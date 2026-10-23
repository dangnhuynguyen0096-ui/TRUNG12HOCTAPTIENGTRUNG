/* Thế giới 3D kiểu sa bàn: mỗi bài khóa / mỗi khoa là một căn phòng cắt mở.
   Cần THREE (r128) và THREE.OrbitControls. */
(function () {
  'use strict';
  var T = window.THREE;
  var W = window.World = {};
  var renderer, scene, camera, controls, clock, wrap, labelLayer;
  var ray = new T.Raycaster(), ptr = new T.Vector2();
  var floorMeshes = [], npcs = {}, places = {}, player = null, bounds = { x: 6.2, z: 4.2 };
  var hooks = {}, questKey = null, ready = false, outdoor = false, follow = false, dirty = 3;

  /* ---------- vật liệu & hình khối ---------- */
  var matCache = {};
  function mat(c, opts) {
    var k = c + JSON.stringify(opts || {});
    /* Lambert rẻ hơn Standard nhiều trên máy yếu */
    if (!matCache[k]) matCache[k] = new T.MeshLambertMaterial(Object.assign({ color: c }, opts || {}));
    return matCache[k];
  }
  function mesh(geo, color, opts) { var m = new T.Mesh(geo, color instanceof T.Material ? color : mat(color, opts)); return m; }
  function box(w, h, d, c, x, y, z) { var m = mesh(new T.BoxGeometry(w, h, d), c); m.position.set(x || 0, (y || 0) + h / 2, z || 0); return m; }
  function cyl(rt, rb, h, c, x, y, z, seg) { var m = mesh(new T.CylinderGeometry(rt, rb, h, seg || 8), c); m.position.set(x || 0, (y || 0) + h / 2, z || 0); return m; }
  function ball(r, c, x, y, z) { var m = mesh(new T.SphereGeometry(r, 10, 7), c); m.position.set(x || 0, y || 0, z || 0); return m; }
  function grp() { var g = new T.Group(); for (var i = 0; i < arguments.length; i++) g.add(arguments[i]); return g; }

  function textTex(text, o) {
    o = o || {};
    var cv = document.createElement('canvas'), w = o.w || 512, hh = o.h || 128;
    cv.width = w; cv.height = hh;
    var g = cv.getContext('2d');
    g.fillStyle = o.bg || '#ffffff'; g.fillRect(0, 0, w, hh);
    g.fillStyle = o.fg || '#1D2B45';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    var lines = String(text).split('\n'), fs = o.size || Math.floor(hh / (lines.length + 0.6));
    g.font = '700 ' + fs + 'px "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
    lines.forEach(function (ln, i) { g.fillText(ln, w / 2, hh / 2 + (i - (lines.length - 1) / 2) * fs * 1.15); });
    var t = new T.CanvasTexture(cv); t.anisotropy = 4; return t;
  }
  function panel(text, w, h, o) {
    o = o || {};
    var m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ map: textTex(text, { bg: o.bg, fg: o.fg, w: o.pw || 512, h: o.ph || Math.round(512 * h / w), size: o.size }) }));
    return m;
  }

  var winMat = null;
  function blockWin() {
    if (winMat) return winMat;
    var cv = document.createElement('canvas'); cv.width = 64; cv.height = 128; var g = cv.getContext('2d');
    g.fillStyle = 'rgba(0,0,0,0)'; g.clearRect(0, 0, 64, 128);
    for (var r = 0; r < 6; r++) for (var c2 = 0; c2 < 3; c2++) { g.fillStyle = (r + c2) % 4 ? '#9ED3EE' : '#FFE9A8'; g.fillRect(6 + c2 * 20, 6 + r * 20, 13, 12); }
    var t = new T.CanvasTexture(cv); t.wrapS = t.wrapT = T.RepeatWrapping;
    winMat = new T.MeshBasicMaterial({ map: t, transparent: true }); return winMat;
  }

  /* ---------- đồ đạc ---------- */
  var F = {
    bed: function (o) { return grp(box(2.2, 0.45, 3.2, '#8A5A3C'), box(2.0, 0.3, 3.0, '#FFFFFF', 0, 0.45, 0), box(2.0, 0.32, 1.9, o.c || '#7DB7E8', 0, 0.62, 0.5), box(1.2, 0.25, 0.6, '#FFF6EA', 0, 0.75, -1.1), box(2.2, 1.2, 0.2, '#8A5A3C', 0, 0, -1.6)); },
    desk: function (o) {
      var g = grp(box(1.8, 0.1, 1, o.c || '#C98B57', 0, 0.85, 0), box(0.1, 0.85, 0.1, '#6B4A33', -0.8, 0, -0.4), box(0.1, 0.85, 0.1, '#6B4A33', 0.8, 0, -0.4), box(0.1, 0.85, 0.1, '#6B4A33', -0.8, 0, 0.4), box(0.1, 0.85, 0.1, '#6B4A33', 0.8, 0, 0.4));
      if (o.pc) g.add(box(0.9, 0.6, 0.06, '#1F2937', 0, 1.05, -0.3), box(0.1, 0.12, 0.1, '#374151', 0, 0.95, -0.3), mesh(new T.PlaneGeometry(0.8, 0.5), mat('#5AB0F0', { emissive: '#2E78C7', emissiveIntensity: 0.6 })));
      if (o.pc) { var sc = g.children[g.children.length - 1]; sc.position.set(0, 1.35, -0.26); }
      if (o.book) g.add(box(0.5, 0.06, 0.35, '#E25D4E', 0.3, 0.95, 0.1), box(0.5, 0.06, 0.35, '#F4B42A', 0.3, 1.01, 0.1));
      if (o.phone) g.add(box(0.3, 0.12, 0.2, '#D23B2E', -0.5, 0.95, 0));
      if (o.headset) { var t = mesh(new T.TorusGeometry(0.18, 0.04, 6, 14, Math.PI), '#111827'); t.position.set(-0.4, 1.12, 0); g.add(t, ball(0.07, '#D23B2E', -0.58, 1.02, 0), ball(0.07, '#D23B2E', -0.22, 1.02, 0)); }
      if (o.brush) g.add(box(1.2, 0.02, 0.7, '#FFFCF2', 0, 0.95, 0.05), cyl(0.03, 0.02, 0.5, '#6B4A33', 0.55, 0.96, 0.2), cyl(0.15, 0.15, 0.06, '#222', -0.6, 0.95, -0.2));
      return g;
    },
    chair: function (o) { return grp(box(0.7, 0.08, 0.7, o.c || '#3E4C6B', 0, 0.5, 0), box(0.7, 0.75, 0.08, o.c || '#3E4C6B', 0, 0.5, -0.32), box(0.06, 0.5, 0.06, '#222', -0.3, 0, -0.3), box(0.06, 0.5, 0.06, '#222', 0.3, 0, -0.3), box(0.06, 0.5, 0.06, '#222', -0.3, 0, 0.3), box(0.06, 0.5, 0.06, '#222', 0.3, 0, 0.3)); },
    table: function (o) { return grp(cyl(o.r || 0.9, o.r || 0.9, 0.1, o.c || '#D9A06B', 0, 0.8, 0, 20), cyl(0.12, 0.2, 0.8, '#6B4A33')); },
    longtable: function (o) { return grp(box(o.w || 4, 0.1, 1.1, o.c || '#E8C39E', 0, 0.8, 0), box(0.12, 0.8, 0.9, '#6B4A33', -(o.w || 4) / 2 + 0.3, 0, 0), box(0.12, 0.8, 0.9, '#6B4A33', (o.w || 4) / 2 - 0.3, 0, 0)); },
    sofa: function (o) { var c = o.c || '#3BA39C'; return grp(box(2.6, 0.45, 1, c), box(2.6, 0.8, 0.3, c, 0, 0.3, -0.4), box(0.3, 0.7, 1, c, -1.3, 0, 0), box(0.3, 0.7, 1, c, 1.3, 0, 0)); },
    shelf: function (o) {
      var g = grp(box(o.w || 2, o.h || 2.4, 0.5, o.c || '#8A5A3C'));
      var cols = ['#E25D4E', '#4E8DE2', '#F4B42A', '#2FA37A', '#9B6BD6', '#F08A4B'];
      for (var r = 0; r < 3; r++) for (var i = 0; i < 7; i++) { var b = box(0.18, 0.5 + (i % 3) * 0.08, 0.36, cols[(i + r) % cols.length], -(o.w || 2) / 2 + 0.25 + i * 0.24, 0.15 + r * 0.75, 0.12); g.add(b); }
      return g;
    },
    plant: function (o) { return grp(cyl(0.3, 0.22, 0.5, '#B5643C'), ball(o.r || 0.55, '#2F8F5B', 0, 0.95 + (o.r || 0.55) * 0.5, 0)); },
    tree: function (o) { return grp(cyl(0.15, 0.2, 1.2, '#7A5235'), mesh(new T.ConeGeometry(0.9, 1.8, 8), '#2F8F5B')).add ? (function () { var g = grp(cyl(0.15, 0.2, 1.2, '#7A5235')); var c = mesh(new T.ConeGeometry(o.r || 1, 2, 8), '#2F8F5B'); c.position.y = 2; g.add(c); var c2 = mesh(new T.ConeGeometry((o.r || 1) * 0.75, 1.5, 8), '#3AA56B'); c2.position.y = 2.8; g.add(c2); return g; })() : null; },
    rug: function (o) { var m = mesh(new T.BoxGeometry(o.w || 3, 0.03, o.d || 2), o.c || '#9B6BD6'); m.position.y = 0.015; return grp(m); },
    counter: function (o) { var g = grp(box(o.w || 4, 1.1, 0.8, o.c || '#3E4C6B'), box(o.w || 4, 0.08, 0.95, '#E8E2D6', 0, 1.1, 0)); if (o.glass) g.add(mesh(new T.BoxGeometry(o.w || 4, 0.9, 0.04), new T.MeshStandardMaterial({ color: '#BFE3F7', transparent: true, opacity: 0.35 }))), g.children[g.children.length - 1].position.set(0, 1.65, 0); return g; },
    fridge: function () { return grp(box(1, 2.2, 0.9, '#E9EEF3'), box(0.06, 0.6, 0.06, '#9AA5B1', 0.35, 1.3, 0.47)); },
    stove: function () { return grp(box(1.6, 0.95, 0.8, '#D9DEE5'), cyl(0.18, 0.18, 0.05, '#222', -0.4, 0.95, 0), cyl(0.18, 0.18, 0.05, '#222', 0.4, 0.95, 0), cyl(0.25, 0.2, 0.2, '#C0392B', 0.4, 1.0, 0)); },
    crate: function (o) {
      var g = grp(box(1.3, 0.6, 0.9, '#C98B57'));
      for (var i = 0; i < 6; i++) g.add(ball(0.17, o.fruit || '#D9362B', -0.4 + (i % 3) * 0.4, 0.75, -0.18 + Math.floor(i / 3) * 0.36));
      return g;
    },
    awning: function (o) { var g = new T.Group(); for (var i = 0; i < 6; i++) { var b = box(o.w / 6, 0.08, 1.4, i % 2 ? '#FFFFFF' : '#E6604E', -o.w / 2 + o.w / 12 + i * o.w / 6, 2.4, 0); b.rotation.x = -0.25; g.add(b); } g.add(box(0.08, 2.4, 0.08, '#6B4A33', -o.w / 2, 0, 0.6), box(0.08, 2.4, 0.08, '#6B4A33', o.w / 2, 0, 0.6)); return g; },
    suitcase: function (o) { return grp(box(0.6, 0.85, 0.3, o.c || '#222'), box(0.25, 0.08, 0.06, '#555', 0, 0.85, 0)); },
    belt: function (o) { return grp(box(o.w || 6, 0.5, 1, '#4B5563'), box(o.w || 6, 0.05, 0.9, '#1F2937', 0, 0.5, 0)); },
    bike: function (o) {
      var g = new T.Group(), c = o.c || '#4E8DE2';
      [-0.55, 0.55].forEach(function (x) { var w = mesh(new T.TorusGeometry(0.35, 0.05, 8, 20), '#222'); w.position.set(x, 0.38, 0); g.add(w); });
      var f = box(1.1, 0.07, 0.07, c, 0, 0.62, 0); g.add(f);
      var s = box(0.07, 0.5, 0.07, c, -0.2, 0.4, 0); s.rotation.z = 0.3; g.add(s);
      g.add(box(0.3, 0.06, 0.15, '#222', -0.25, 0.9, 0), box(0.06, 0.06, 0.5, '#222', 0.5, 0.95, 0));
      return g;
    },
    board: function (o) { var g = grp(box(o.w || 4.5, 2, 0.1, '#6B4A33')); var p = panel(o.text || '', (o.w || 4.5) - 0.2, 1.8, { bg: o.bg || '#2F5D4B', fg: o.fg || '#FFFFFF' }); p.position.set(0, 1, 0.06); g.add(p); return g; },
    sign: function (o) { var g = new T.Group(); var p = panel(o.text, o.w || 2.4, o.h || 0.7, { bg: o.bg || '#D23B2E', fg: o.fg || '#FFFFFF' }); g.add(p); return g; },
    post: function (o) { var g = grp(cyl(0.06, 0.06, 2.2, '#555')); var p = panel(o.text, o.w || 1.6, 0.5, { bg: o.bg || '#1F9D74', fg: '#fff' }); p.position.set(0, 2.3, 0); g.add(p); var p2 = p.clone(); p2.rotation.y = Math.PI; g.add(p2); return g; },
    window: function (o) { var g = grp(box(o.w || 2, o.h || 1.4, 0.08, '#FFFFFF')); var gl = mesh(new T.PlaneGeometry((o.w || 2) - 0.2, (o.h || 1.4) - 0.2), mat(o.sky || '#9ED3EE', { emissive: o.sky || '#9ED3EE', emissiveIntensity: 0.35 })); gl.position.set(0, (o.h || 1.4) / 2, 0.05); g.add(gl); g.add(box(0.06, o.h || 1.4, 0.1, '#FFFFFF', 0, 0, 0.02)); return g; },
    door: function (o) { return grp(box(1.2, 2.3, 0.08, o.c || '#B5643C'), ball(0.06, '#F4B42A', 0.4, 1.1, 0.06)); },
    tv: function () { var g = grp(box(1.6, 0.5, 0.5, '#6B4A33'), box(1.5, 0.9, 0.08, '#111', 0, 0.55, 0)); return g; },
    lamp: function () { return grp(cyl(0.05, 0.05, 1.6, '#333'), mesh(new T.ConeGeometry(0.35, 0.4, 12, 1, true), mat('#FFE9A8', { emissive: '#FFD36B', emissiveIntensity: 0.5, side: T.DoubleSide }))).add ? (function () { var g = grp(cyl(0.2, 0.25, 0.06, '#333'), cyl(0.04, 0.04, 1.7, '#333')); var sh = mesh(new T.ConeGeometry(0.35, 0.45, 12, 1, true), mat('#FFE9A8', { emissive: '#FFD36B', emissiveIntensity: 0.6, side: T.DoubleSide })); sh.position.y = 1.8; g.add(sh); return g; })() : null; },
    bench: function () { return grp(box(2, 0.1, 0.5, '#B5643C', 0, 0.45, 0), box(0.1, 0.45, 0.4, '#555', -0.8, 0, 0), box(0.1, 0.45, 0.4, '#555', 0.8, 0, 0)); },
    fence: function (o) { var g = new T.Group(), n = Math.round((o.w || 6) / 0.5); for (var i = 0; i <= n; i++) g.add(box(0.08, 0.9, 0.08, '#FFFFFF', -(o.w || 6) / 2 + i * 0.5, 0, 0)); g.add(box(o.w || 6, 0.08, 0.06, '#FFFFFF', 0, 0.7, 0)); return g; },
    facade: function (o) {
      var g = grp(box(o.w || 4, o.h || 3, 0.6, o.c || '#E9D8C4'));
      var r = mesh(new T.CylinderGeometry(0.01, (o.w || 4) * 0.75, 1.2, 4), o.roof || '#C0392B'); r.rotation.y = Math.PI / 4; r.scale.z = 0.35; r.position.y = (o.h || 3) + 0.6; g.add(r);
      g.add(box(1.1, 1.9, 0.1, '#6B4A33', 0, 0, 0.32));
      var s = panel(o.text, Math.min(2.6, (o.w || 4) - 0.6), 0.6, { bg: o.bg || '#1F9D74', fg: '#fff' }); s.position.set(0, (o.h || 3) - 0.6, 0.32); g.add(s);
      return g;
    },
    gatearch: function (o) { var g = grp(box(0.5, 3.2, 0.5, '#9AA5B1', -2.4, 0, 0), box(0.5, 3.2, 0.5, '#9AA5B1', 2.4, 0, 0), box(5.4, 0.6, 0.6, '#9AA5B1', 0, 3.2, 0)); var s = panel(o.text, 3.6, 0.5, { bg: '#D23B2E', fg: '#fff' }); s.position.set(0, 3.5, 0.32); g.add(s); return g; },
    flag: function () { var g = grp(cyl(0.05, 0.05, 4, '#ccc')); var f = mesh(new T.PlaneGeometry(1.2, 0.8), mat('#D23B2E', { side: T.DoubleSide })); f.position.set(0.6, 3.6, 0); g.add(f); return g; },
    stage: function (o) { return grp(box(o.w || 6, 0.4, o.d || 2.2, '#9B3B3B')); },
    mic: function () { return grp(cyl(0.2, 0.25, 0.05, '#222'), cyl(0.03, 0.03, 1.5, '#444'), ball(0.1, '#111', 0, 1.6, 0)); },
    speaker: function () { return grp(box(0.8, 1.4, 0.6, '#1F2937'), cyl(0.25, 0.25, 0.05, '#555', 0, 0.8, 0.3)); },
    scroll: function (o) { var p = panel(o.text || '永', 0.9, 1.8, { bg: '#FFF8E6', fg: '#1D2B45', pw: 256, ph: 512 }); return grp(p); },
    clock: function () { var g = grp(cyl(0.4, 0.4, 0.08, '#FFFFFF')); g.children[0].rotation.x = Math.PI / 2; return g; },
    lights: function (o) { var g = new T.Group(), cols = ['#FF7AB6', '#7ADFFF', '#FFE16B', '#B9FF7A']; for (var i = 0; i < (o.n || 14); i++) { var b = mesh(new T.SphereGeometry(0.07, 8, 6), mat(cols[i % 4], { emissive: cols[i % 4], emissiveIntensity: 1 })); b.position.set(i * (o.gap || 0.9), Math.sin(i * 0.9) * 0.08, 0); g.add(b); } return g; },
    house: function (o) {
      var w = o.w || 2.6, d = o.d || 2, hh = o.h || 2.2, g = grp(box(w, hh, d, o.c || '#F3E3CF'));
      var r = mesh(new T.ConeGeometry(Math.max(w, d) * 0.78, 1.1, 4), o.roof || '#C0392B'); r.rotation.y = Math.PI / 4; r.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d)); r.position.y = hh + 0.55; g.add(r);
      g.add(box(0.8, 1.3, 0.08, '#6B4A33', 0, 0, d / 2 + 0.02));
      [-1, 1].forEach(function (sd) { if (w > 2) { var wi = mesh(new T.PlaneGeometry(0.55, 0.5), mat('#9ED3EE', { emissive: '#9ED3EE', emissiveIntensity: 0.3 })); wi.position.set(sd * w * 0.3, 1.2, d / 2 + 0.02); g.add(wi); } });
      var s = panel(o.text || '', Math.min(2.4, w - 0.3), 0.5, { bg: o.bg || '#D23B2E', fg: '#fff' }); s.position.set(0, hh - 0.35, d / 2 + 0.03); g.add(s);
      return g;
    },
    block: function (o) {
      var w = o.w || 3, d = o.d || 2.4, hh = o.h || 5, g = grp(box(w, hh, d, o.c || '#E8DCCB'));
      var wm = blockWin(); var f = new T.Mesh(new T.PlaneGeometry(w - 0.3, hh - 0.6), wm); f.position.set(0, hh / 2 + 0.1, d / 2 + 0.01); g.add(f);
      g.add(box(w + 0.1, 0.18, d + 0.1, o.roof || '#9AA5B1', 0, hh, 0));
      return g;
    },
    parkgate: function (o) {
      var g = grp(box(0.25, 2, 0.25, '#7A5235', -1.1, 0, 0), box(0.25, 2, 0.25, '#7A5235', 1.1, 0, 0), box(2.6, 0.3, 0.3, '#2F8F5B', 0, 2, 0));
      var s = panel(o.text || '公园', 1.8, 0.45, { bg: '#2F8F5B', fg: '#fff' }); s.position.set(0, 2.15, 0.17); g.add(s);
      return g;
    },
    pond: function (o) { var m = mesh(new T.CylinderGeometry(o.r || 1.6, o.r || 1.6, 0.06, 20), mat('#5AB0F0', { emissive: '#2E78C7', emissiveIntensity: 0.15 })); m.position.y = 0.03; m.scale.z = 0.7; return grp(m, ball(0.18, '#F4B42A', 0.5, 0.12, 0.2)); },
    flowers: function () { var g = new T.Group(), cols = ['#FF7AB6', '#F4B42A', '#FFFFFF', '#E25D4E', '#9B6BD6']; for (var i = 0; i < 9; i++) { var b = ball(0.12, cols[i % 5], (i % 3) * 0.35 - 0.35, 0.18, Math.floor(i / 3) * 0.35 - 0.35); g.add(b); } return g; },
    trays: function () { var g = new T.Group(), cols = ['#F4B42A', '#FFFFFF', '#E6604E', '#2FA37A']; for (var i = 0; i < 4; i++) g.add(box(0.6, 0.15, 0.45, cols[i], -1 + i * 0.7, 1.18, 0)); return g; }
  };

  /* ---------- định nghĩa phòng ---------- */
  var R = {
    bedroom:  { floor: '#E9D2B4', wall: '#F7D8C8', wall2: '#FBE6DA', items: [['bed', -4.5, -2.7, 0, { c: '#7DB7E8' }], ['window', -1, -4.9, 0, { w: 2.2 }], ['desk', 2.2, -4, 0, { book: 1 }], ['chair', 2.2, -3.2, Math.PI], ['shelf', 5, -4.5, 0, { w: 1.6 }], ['rug', 0, 0.5, 0, { w: 3.6, d: 2.4, c: '#F2A7B8' }], ['plant', 6, 3.5], ['clock', -6.9, 2.4, Math.PI / 2], ['sign', 0, 0, 0, { wall: 'back', text: '早上好！', y: 3.3, x: 3.2, w: 2, h: 0.6, bg: '#F4B42A' }]] },
    kitchen:  { floor: '#E8DCC6', wall: '#FFF1C9', wall2: '#FFF8E2', items: [['stove', -4, -4.4, 0], ['fridge', -6.1, -4.3, 0], ['counter', -1.2, -4.4, 0, { w: 2.6, c: '#E9EEF3' }], ['window', 2.5, -4.9, 0, { w: 2.4 }], ['table', 1, 0.3, 0, { r: 1.3 }], ['chair', 1, -1.3, 0], ['chair', 1, 1.9, Math.PI], ['chair', -0.6, 0.3, Math.PI / 2], ['chair', 2.6, 0.3, -Math.PI / 2], ['plant', 6, -4.2], ['sign', 0, 0, 0, { wall: 'back', text: '早饭', x: 5, y: 3.3, w: 1.6, h: 0.6, bg: '#E6604E' }]] },
    living:   { floor: '#D9C7A8', wall: '#E5DAFA', wall2: '#F1EBFF', items: [['sofa', -3, -3.9, 0, { c: '#7C6BD6' }], ['table', -3, -2, 0, { r: 0.7, c: '#C98B57' }], ['tv', 3, -4.5, 0], ['shelf', 5.8, -4.5, 0, { w: 1.6 }], ['rug', -1, -1.2, 0, { w: 5, d: 3, c: '#F4B42A' }], ['door', -6.95, 1.5, Math.PI / 2], ['window', 0.6, -4.9, 0, { w: 1.8, sky: '#28335C' }], ['plant', -6, -4.2], ['lamp', 6, 2.5]] },
    street:   { outdoor: true, floor: '#A7D9B4', items: [['road'], ['facade', -3.6, -3.8, 0, { text: '邮局', w: 4, bg: '#1F9D74' }], ['facade', 3.2, -3.8, 0, { text: '银行', w: 4, bg: '#C0392B', c: '#F1E4D0' }], ['tree', -6.2, -1.5], ['tree', 6.3, -1.2], ['bench', 0, -2.3, 0], ['post', 6, 3.2, 0, { text: '北京路' }], ['plant', -0.3, -4.2]] },
    gate:     { outdoor: true, floor: '#A7D9B4', items: [['gatearch', 0, -3.4, 0, { text: '学校' }], ['fence', -4.8, -3.4, 0, { w: 4.2 }], ['fence', 4.8, -3.4, 0, { w: 4.2 }], ['flag', -5.5, -1], ['tree', 5.8, 0.5], ['tree', -6.2, 2.8], ['road'], ['post', 3.5, 2.8, 0, { text: '星期二', bg: '#4E8DE2' }]] },
    classroom:{ floor: '#D6B48A', wall: '#CFE6D8', wall2: '#E3F2E9', items: [['board', -0.5, -4.85, 0, { text: '{lesson}' }], ['desk', -0.5, -3.2, 0, { book: 1 }], ['desk', -3.5, -0.8, 0], ['desk', -0.5, -0.8, 0], ['desk', 2.5, -0.8, 0], ['desk', -3.5, 1.8, 0], ['desk', -0.5, 1.8, 0], ['desk', 2.5, 1.8, 0], ['chair', -3.5, 0, Math.PI], ['chair', -0.5, 0, Math.PI], ['chair', 2.5, 0, Math.PI], ['chair', -3.5, 2.6, Math.PI], ['chair', -0.5, 2.6, Math.PI], ['chair', 2.5, 2.6, Math.PI], ['window', -6.95, -1, Math.PI / 2, { w: 2.4 }], ['window', -6.95, 2.2, Math.PI / 2, { w: 2.4 }], ['plant', 5.8, -4.2], ['lights', -6, -4.95, 0, { n: 15 }]] },
    canteen:  { floor: '#E8D7C0', wall: '#FFD6A8', wall2: '#FFE8CC', items: [['counter', -1, -4.2, 0, { w: 6, c: '#D9DEE5' }], ['trays', -1, -4.2], ['board', -1, -4.95, 0, { text: '饺子 包子 面条\n馒头 米饭 鸡蛋汤', w: 5, bg: '#2D2A26', fg: '#FFE16B', y: 1.6 }], ['longtable', -2.5, 0.5, 0, { w: 4 }], ['longtable', 3, 0.5, 0, { w: 4 }], ['chair', -3.5, 1.4, Math.PI], ['chair', -1.5, 1.4, Math.PI], ['chair', 2, 1.4, Math.PI], ['chair', 4, 1.4, Math.PI], ['sign', 0, 0, 0, { wall: 'left', text: '食堂', y: 3.2, z: -1, w: 2, h: 0.7 }], ['plant', 6, -4.2]] },
    market:   { outdoor: true, floor: '#E8DCC6', items: [['awning', -1, -3.4, 0, { w: 6 }], ['crate', -3, -3.3, 0, { fruit: '#D9362B' }], ['crate', -1.5, -3.3, 0, { fruit: '#F28C28' }], ['crate', 0, -3.3, 0, { fruit: '#7FB93A' }], ['crate', 1.5, -3.3, 0, { fruit: '#8E44AD' }], ['board', 4.6, -4, -0.3, { text: '苹果 3块/斤\n橘子 2块/斤', w: 2.6, bg: '#FFF8E6', fg: '#C0392B' }], ['tree', -6.2, 1.5], ['tree', 6.2, 2.5], ['road']] },
    bank:     { floor: '#DCE3EA', wall: '#E9EEF3', wall2: '#F4F7FA', items: [['counter', 0, -3.6, 0, { w: 7, c: '#2E4A7A', glass: 1 }], ['sign', 0, 0, 0, { wall: 'back', text: '中国银行', y: 3.4, w: 3.2, h: 0.75 }], ['board', 4.8, -4.95, 0, { text: '美元 → 人民币\n1 : 7', w: 2.6, bg: '#10233F', fg: '#7ADFFF', y: 1.3 }], ['chair', -4, 1.5, Math.PI], ['chair', -3, 1.5, Math.PI], ['chair', -2, 1.5, Math.PI], ['plant', 6, 3], ['plant', -6.2, -4.2]] },
    office:   { floor: '#D6CBB8', wall: '#E3E8EF', wall2: '#F0F3F7', items: [['desk', -2.5, -3.4, 0, { pc: 1, phone: 1 }], ['desk', 1.5, -3.4, 0, { pc: 1 }], ['chair', -2.5, -2.6, Math.PI], ['chair', 1.5, -2.6, Math.PI], ['shelf', 5.4, -4.5, 0, { w: 2.2, c: '#5D6B82' }], ['sign', 0, 0, 0, { wall: 'back', text: '办公室', y: 3.3, x: -0.5, w: 2.4, h: 0.7, bg: '#2E4A7A' }], ['board', -6.92, 0.5, Math.PI / 2, { text: '18楼1门 601\n62931074', w: 2.6, bg: '#FFFFFF', fg: '#1D2B45', y: 1.3 }], ['plant', 6, 3.5], ['sofa', 3, 2.8, Math.PI, { c: '#5D6B82' }]] },
    hall:     { floor: '#C9A27A', wall: '#F3D9D9', wall2: '#FAEAEA', items: [['stage', 0, -3.6, 0, { w: 8, d: 2.4 }], ['sign', 0, 0, 0, { wall: 'back', text: '欢迎王教授！', y: 3.3, w: 4.2, h: 0.8 }], ['flag', -5.8, -4.3], ['flag', 5.2, -4.3], ['chair', -3, 1, Math.PI], ['chair', -1.8, 1, Math.PI], ['chair', -0.6, 1, Math.PI], ['chair', 0.6, 1, Math.PI], ['chair', 1.8, 1, Math.PI], ['chair', 3, 1, Math.PI], ['lights', -6, -4.95, 0, { n: 15 }]] },
    library:  { floor: '#CDAE86', wall: '#E7DCC8', wall2: '#F2EADB', items: [['shelf', -5, -4.5, 0, { w: 2.4, h: 2.6 }], ['shelf', -2.2, -4.5, 0, { w: 2.4, h: 2.6 }], ['shelf', 0.6, -4.5, 0, { w: 2.4, h: 2.6 }], ['sign', 0, 0, 0, { wall: 'back', text: '图书馆', x: 4.2, y: 3.3, w: 2.4, h: 0.7, bg: '#7A5235' }], ['longtable', -1, 0.6, 0, { w: 4.4 }], ['chair', -2.5, 1.5, Math.PI], ['chair', -0.5, 1.5, Math.PI], ['chair', 1, -0.3, 0], ['lamp', 5, -3], ['plant', 6, 3.4], ['shelf', -6.75, 1.5, Math.PI / 2, { w: 2.4 }]] },
    airport:  { floor: '#D7DEE6', wall: '#DDE9F4', wall2: '#EEF4FA', items: [['belt', -2, -3.4, 0, { w: 7 }], ['suitcase', -4.2, -3.4, 0, { c: '#222' }], ['suitcase', -2.8, -3.4, 0, { c: '#C0392B' }], ['suitcase', -1.3, -3.4, 0, { c: '#4E8DE2' }], ['counter', 4.3, 0.2, Math.PI / 2, { w: 3, c: '#1F2937' }], ['sign', 0, 0, 0, { wall: 'left', text: '海关', y: 3.2, z: 1.5, w: 2, h: 0.7, bg: '#1F2937' }], ['board', 0, -4.95, 0, { text: '北京 BEIJING  ✈  到达', w: 5, bg: '#10233F', fg: '#FFE16B', y: 2 }], ['plant', 6, -4.2], ['plant', -6.2, 3.6]] },
    bikes:    { outdoor: true, floor: '#B8D8A8', items: [['facade', -2, -4, 0, { text: '学校', w: 6, h: 3.4, bg: '#D23B2E', c: '#F3E3CF' }], ['bike', -4.5, -1.2, 0.2, { c: '#E25D4E' }], ['bike', -3.2, -1.2, 0.2, { c: '#2FA37A' }], ['bike', -1.9, -1.2, 0.2, { c: '#4E8DE2' }], ['bike', -0.6, -1.2, 0.2, { c: '#F4B42A' }], ['bike', 0.7, -1.2, 0.2, { c: '#9B6BD6' }], ['bike', 4.5, 2.8, -0.5, { c: '#4E8DE2' }], ['tree', 5.5, -2.5], ['bench', 2.5, -2.4, 0]] },
    town:     { outdoor: true, floor: '#B9D9A8', size: [40, 15], follow: true, items: [] }, /* phố dài: app.js tự dựng hàng quán theo số bài */
    park:     { outdoor: true, floor: '#A7D9B4', items: [['pond', 2.6, -2.2, 0, { r: 1.8 }], ['tree', -5.6, -3.6], ['tree', -3.4, -4.1, 0, { r: 0.8 }], ['tree', 5.8, 2.8], ['tree', -6, 2.6, 0, { r: 0.8 }], ['bench', -2, -2.6, 0], ['bench', 4.4, 1.2, -Math.PI / 2], ['flowers', -0.6, -4.2], ['flowers', 0.8, 3.6], ['lamp', -4.2, 0.6], ['lamp', 2.4, 1.6], ['fence', 0, -4.8, 0, { w: 13 }], ['parkgate', -0.2, 4.2, Math.PI, { text: '公园' }]] },
    k_nghe:   { floor: '#2B3557', wall: '#3B4A7A', wall2: '#46588F', dark: 1, items: [['sign', 0, 0, 0, { wall: 'back', text: '听 · 听力系', y: 3.3, w: 3.4, h: 0.8, bg: '#7ADFFF', fg: '#10233F' }], ['desk', -4, -2.6, 0, { headset: 1, pc: 1 }], ['desk', -1, -2.6, 0, { headset: 1, pc: 1 }], ['desk', 2, -2.6, 0, { headset: 1, pc: 1 }], ['chair', -4, -1.8, Math.PI], ['chair', -1, -1.8, Math.PI], ['chair', 2, -1.8, Math.PI], ['speaker', 5.6, -4.3], ['speaker', -6.2, -4.3], ['rug', 0, 1.8, 0, { w: 6, d: 2.5, c: '#5B3FA8' }], ['lights', -6, -4.95, 0, { n: 15 }]] },
    k_noi:    { floor: '#3A2D52', wall: '#5A3F7A', wall2: '#6B4E8F', dark: 1, items: [['sign', 0, 0, 0, { wall: 'back', text: '说 · 口语系', y: 3.3, w: 3.4, h: 0.8, bg: '#FF7AB6', fg: '#2B1236' }], ['stage', 0, -3.6, 0, { w: 5, d: 2 }], ['mic', 0, -3.3, 0], ['rug', 0, 1, 0, { w: 5, d: 3, c: '#C2457E' }], ['sofa', -4, 2.4, Math.PI / 2, { c: '#3BA39C' }], ['sofa', 4.2, 2.4, -Math.PI / 2, { c: '#F4B42A' }], ['speaker', 3.4, -4.3], ['speaker', -3.4, -4.3], ['lights', -6, -4.95, 0, { n: 15 }]] },
    k_doc:    { floor: '#C9A87C', wall: '#E9DCC3', wall2: '#F3EADA', items: [['sign', 0, 0, 0, { wall: 'back', text: '读 · 阅读系', y: 3.3, x: 3.8, w: 3.2, h: 0.8, bg: '#2FA37A' }], ['shelf', -5, -4.5, 0, { w: 2.4, h: 2.6 }], ['shelf', -2.2, -4.5, 0, { w: 2.4, h: 2.6 }], ['sofa', 2, 0.5, Math.PI, { c: '#C2457E' }], ['table', 2, -0.9, 0, { r: 0.7 }], ['lamp', 4.6, -2], ['rug', 1.5, 0, 0, { w: 4.5, d: 3, c: '#2FA37A' }], ['plant', 6, 3.4], ['shelf', -6.75, 1.5, Math.PI / 2, { w: 2.4 }]] },
    k_viet:   { floor: '#D9C29E', wall: '#F5E9D2', wall2: '#FBF3E3', items: [['sign', 0, 0, 0, { wall: 'back', text: '写 · 书法系', y: 3.3, x: 3.6, w: 3.2, h: 0.8, bg: '#1D2B45' }], ['scroll', -4.5, -4.9, 0, { text: '永' }], ['scroll', -3, -4.9, 0, { text: '学' }], ['scroll', -1.5, -4.9, 0, { text: '写' }], ['desk', -3, -1.6, 0, { brush: 1 }], ['desk', 0, -1.6, 0, { brush: 1 }], ['desk', 3, -1.6, 0, { brush: 1 }], ['chair', -3, -0.8, Math.PI], ['chair', 0, -0.8, Math.PI], ['chair', 3, -0.8, Math.PI], ['plant', 6, 3.4], ['plant', -6.2, 3.4]] }
  };
  W.rooms = R;

  /* ---------- nhân vật chibi ---------- */
  var LOOK = {
    me: { shirt: '#F4B42A', pants: '#4E8DE2', hair: '#2B1D14', style: 'cap' }, mom: { shirt: '#E25D4E', pants: '#3E4C6B', hair: '#2B1D14', style: 'long' },
    dad: { shirt: '#4E8DE2', pants: '#2D3748', hair: '#1B1B1B', style: 'short' }, gege: { shirt: '#2FA37A', pants: '#2D3748', hair: '#1B1B1B', style: 'short' },
    meimei: { shirt: '#FF8FB8', pants: '#F4B42A', hair: '#2B1D14', style: 'bun' }, teacher: { shirt: '#5D6B82', pants: '#2D3748', hair: '#3B3B3B', style: 'short', glasses: 1 },
    mike: { shirt: '#E25D4E', pants: '#2D3748', hair: '#E8C46A', style: 'short' }, mali: { shirt: '#9B6BD6', pants: '#2D3748', hair: '#B5482E', style: 'long' },
    auntie: { shirt: '#2FA37A', pants: '#5D6B82', hair: '#2B1D14', style: 'bun' }, seller: { shirt: '#F28C28', pants: '#5D6B82', hair: '#C9C9C9', style: 'bun' },
    cook: { shirt: '#FFFFFF', pants: '#5D6B82', hair: '#2B1D14', style: 'chef' }, clerk: { shirt: '#2E4A7A', pants: '#2E4A7A', hair: '#2B1D14', style: 'long' },
    staff: { shirt: '#FFFFFF', pants: '#2D3748', hair: '#1B1B1B', style: 'short', glasses: 1 }, secretary: { shirt: '#C2457E', pants: '#2D3748', hair: '#2B1D14', style: 'long' },
    principal: { shirt: '#2D3748', pants: '#2D3748', hair: '#DDDDDD', style: 'bald', glasses: 1 }, prof: { shirt: '#7A5235', pants: '#2D3748', hair: '#888888', style: 'short', glasses: 1 },
    edward: { shirt: '#3BA39C', pants: '#2D3748', hair: '#8A5A3C', style: 'short' }, roland: { shirt: '#F4B42A', pants: '#2D3748', hair: '#E8C46A', style: 'long' },
    lee: { shirt: '#4E8DE2', pants: '#2D3748', hair: '#1B1B1B', style: 'short' }, tianfang: { shirt: '#FF8FB8', pants: '#2D3748', hair: '#1B1B1B', style: 'bun' },
    zhangdong: { shirt: '#2FA37A', pants: '#2D3748', hair: '#1B1B1B', style: 'short' }, lin: { shirt: '#9B6BD6', pants: '#2D3748', hair: '#2B1D14', style: 'long', glasses: 1 },
    manager: { shirt: '#1F2937', pants: '#1F2937', hair: '#1B1B1B', style: 'short' }, officer: { shirt: '#2E4A7A', pants: '#2E4A7A', hair: '#1B1B1B', style: 'cap', cap: '#1F2937' },
    t_nghe: { shirt: '#7ADFFF', pants: '#2D3748', hair: '#2B1D14', style: 'long', glasses: 1 }, t_noi: { shirt: '#FF7AB6', pants: '#2D3748', hair: '#1B1B1B', style: 'short' },
    t_doc: { shirt: '#2FA37A', pants: '#2D3748', hair: '#888888', style: 'bun', glasses: 1 }, t_viet: { shirt: '#1D2B45', pants: '#1D2B45', hair: '#DDDDDD', style: 'bald' },
    student: { shirt: '#9AA5B1', pants: '#2D3748', hair: '#1B1B1B', style: 'short' }
  };
  function chibi(key, scale) {
    var L = LOOK[key] || LOOK.student, g = new T.Group(), skin = '#F6D3B3';
    var legL = box(0.22, 0.55, 0.24, L.pants, -0.15, 0, 0), legR = box(0.22, 0.55, 0.24, L.pants, 0.15, 0, 0);
    var body = cyl(0.36, 0.44, 0.75, L.shirt, 0, 0.5, 0, 14);
    var armL = box(0.16, 0.55, 0.18, L.shirt, -0.5, 0.62, 0), armR = box(0.16, 0.55, 0.18, L.shirt, 0.5, 0.62, 0);
    armL.rotation.z = 0.15; armR.rotation.z = -0.15;
    var head = ball(0.55, skin, 0, 1.75, 0);
    g.add(legL, legR, body, armL, armR, head);
    var hairM = mat(L.hair);
    if (L.style !== 'bald') { var hair = new T.Mesh(new T.SphereGeometry(0.58, 14, 10, 0, Math.PI * 2, 0, Math.PI * (L.style === 'long' ? 0.62 : 0.5)), hairM); hair.position.set(0, 1.78, -0.04); hair.castShadow = true; g.add(hair); }
    if (L.style === 'long') { var back = box(0.9, 0.8, 0.25, L.hair, 0, 1.15, -0.35); g.add(back); }
    if (L.style === 'bun') g.add(ball(0.22, L.hair, 0, 2.38, -0.15));
    if (L.style === 'bald') g.add(ball(0.3, L.hair, 0, 1.75, -0.38));
    if (L.style === 'cap') { var cp = cyl(0.58, 0.6, 0.25, L.cap || '#D23B2E', 0, 2.0, 0, 16); g.add(cp); g.add(box(0.6, 0.06, 0.45, L.cap || '#D23B2E', 0, 2.03, 0.45)); }
    if (L.style === 'chef') g.add(cyl(0.42, 0.38, 0.55, '#FFFFFF', 0, 2.15, 0));
    g.add(ball(0.07, '#1B1B1B', -0.19, 1.8, 0.5), ball(0.07, '#1B1B1B', 0.19, 1.8, 0.5));
    var ch1 = ball(0.08, '#F49AA8', -0.32, 1.65, 0.45), ch2 = ball(0.08, '#F49AA8', 0.32, 1.65, 0.45); g.add(ch1, ch2);
    if (L.glasses) { var gl = mesh(new T.TorusGeometry(0.11, 0.02, 6, 14), '#222'); gl.position.set(-0.19, 1.8, 0.53); var gl2 = gl.clone(); gl2.position.x = 0.19; g.add(gl, gl2); }
    g.scale.setScalar(scale || 1);
    g.userData = { legL: legL, legR: legR, armL: armL, armR: armR, head: head, t: Math.random() * 6 };
    return g;
  }

  /* ---------- dựng phòng ---------- */
  function sky(time, dark) {
    var hh = parseInt(time || '9', 10);
    if (dark) return ['#1B1638', '#3B2A6B', 0.55, '#B9A8FF'];
    if (hh < 8) return ['#FFB8A8', '#FFE3C4', 0.9, '#FFD2B0'];
    if (hh < 16) return ['#7EC8F0', '#D8F0FF', 1.05, '#FFFFFF'];
    if (hh < 19) return ['#F59E62', '#FFD7A8', 0.85, '#FFC48A'];
    return ['#14183A', '#3A3F7A', 0.55, '#AFC0FF'];
  }
  function place(obj, x, z, rot, y) { obj.position.x += x || 0; obj.position.z += z || 0; if (y) obj.position.y += y; obj.rotation.y = rot || 0; scene.add(obj); return obj; }

  W.load = function (roomId, opt) {
    opt = opt || {};
    var def = R[roomId] || R.classroom;
    outdoor = !!def.outdoor;
    while (scene.children.length) scene.remove(scene.children[0]);
    floorMeshes = []; npcs = {}; labels = []; labelLayer.innerHTML = '';
    var s = sky(opt.time, def.dark);
    wrap.style.background = 'linear-gradient(180deg,' + s[0] + ' 0%,' + s[1] + ' 100%)';
    scene.add(new T.HemisphereLight('#FFFFFF', '#8A7A6A', 0.42 * s[2] + 0.12));
    var sun = new T.DirectionalLight(s[3], s[2] * 0.72); sun.position.set(6, 12, 8);
    scene.add(sun);
    var sz = opt.size || def.size || [14, 10], fw = sz[0], fd = sz[1];
    bounds = { x: fw / 2 - 0.8, z: fd / 2 - 0.8 }; follow = !!def.follow;
    var items = def.items.concat(opt.items || []);
    var floor = mesh(new T.BoxGeometry(fw, 0.4, fd), def.floor); floor.position.y = -0.2; scene.add(floor); floorMeshes.push(floor);
    if (outdoor) {
      var base = mesh(new T.BoxGeometry(fw + 0.6, 0.6, fd + 0.6), '#7A5A3C'); base.position.y = -0.55; scene.add(base);
    } else {
      var bw = box(fw, 3.8, 0.3, def.wall, 0, 0, -fd / 2 - 0.15); scene.add(bw);
      var lw = box(0.3, 3.8, fd + 0.3, def.wall2 || def.wall, -fw / 2 - 0.15, 0, -0.15); scene.add(lw);
      var skirt = box(fw, 0.25, 0.32, '#6B4A33', 0, 0, -fd / 2 - 0.14); scene.add(skirt);
    }
    items.forEach(function (it) {
      var type = it[0], o = it[4] || {};
      if (type === 'road') { var rz = o.z != null ? o.z : 3.4; var rd = mesh(new T.BoxGeometry(fw, 0.02, o.d || 2.2), '#5B6472'); rd.position.set(0, 0.01, rz); scene.add(rd); for (var i = 0; i < Math.floor(fw / 2.4); i++) { var st = mesh(new T.BoxGeometry(1, 0.02, 0.15), '#FFFFFF'); st.position.set(-fw / 2 + 1.2 + i * 2.4, 0.03, rz); scene.add(st); } return; }
      if (type === 'walk') { var wk = mesh(new T.BoxGeometry(fw, 0.03, o.d || 1.2), o.c || '#D9CBB3'); wk.position.set(0, 0.015, o.z || 0); scene.add(wk); return; }
      if (type === 'sign') {
        var sg = F.sign(o).children[0];
        if (o.wall === 'left') { sg.position.set(-fw / 2 + 0.02, o.y || 3, o.z || 0); sg.rotation.y = Math.PI / 2; }
        else { sg.position.set(o.x || 0, o.y || 3, -fd / 2 + 0.02); }
        scene.add(sg); return;
      }
      var maker = F[type]; if (!maker) return;
      var obj = maker(o);
      if (type === 'board') {
        if (o.text === '{lesson}') { obj = F.board({ text: opt.board || '', w: 4.5 }); }
        obj.position.y += o.y || 1;
      }
      if (type === 'window' || type === 'clock' || type === 'scroll') obj.position.y += o.y || (type === 'scroll' ? 1.2 : 1.2);
      if (type === 'lights') obj.position.y += 3.55;
      place(obj, it[1], it[2], it[3]);
    });
    /* nhân vật */
    var cast = (opt.cast || []).slice(), n = cast.length;
    var spots = opt.spots || [[-2.6, -1.3], [2.6, -1.0], [0.4, -2.4], [-4.6, 0.6], [4.6, 0.8], [-1.2, 2.2], [3.2, 2.6]];
    cast.forEach(function (key, i) {
      var c = chibi(key, 1); var sp = spots[i % spots.length];
      c.position.set(sp[0], 0, sp[1]); c.rotation.y = 0.25 * (sp[0] < 0 ? 1 : -1);
      c.userData.key = key; c.userData.home = c.position.clone();
      scene.add(c); npcs[key] = c;
      c.traverse(function (m) { if (m.isMesh) m.userData.npc = key; });
      makeLabel(key, c);
    });
    (opt.extras || []).forEach(function (ex) { var c = chibi(ex.look || 'student', 0.9); c.position.set(ex.x, 0, ex.z); c.rotation.y = ex.r || Math.PI; scene.add(c); });
    places = {};
    (opt.places || []).forEach(function (p) {
      var obj = p.kind === 'park' ? F.parkgate(p) : F.house(p);
      obj.position.set(p.x, 0, p.z); obj.rotation.y = p.r || 0; scene.add(obj);
      obj.userData.labelY = p.kind === 'park' ? 3 : (p.h || 2.2) + 1.5;
      obj.traverse(function (m) { if (m.isMesh) m.userData.place = p.key; });
      places[p.key] = { obj: obj, p: p };
      makeLabel('place:' + p.key, obj, null, { zh: p.label, name: p.sub, icon: p.icon });
    });
    player = chibi('me', opt.scale || 0.82);
    player.position.set(opt.px != null ? opt.px : 0, 0, opt.pz != null ? opt.pz : 3.2);
    player.rotation.y = Math.PI; player.userData.target = null;
    scene.add(player);
    makeLabel('me', player, opt.meName);
    questKey = opt.quest || null; refreshQuest();
    var zk = wrap.clientWidth < 640 ? 1.4 : 1, cx = follow ? player.position.x : 0;
    controls.target.set(cx, 0.8, -0.3);
    camera.position.set(cx + (follow ? 4 : 9.5) * zk, 11 * zk, 13 * zk);
    controls.update(); dirty = 3;
  };

  /* ---------- nhãn tên (HTML) ---------- */
  var labels = [];
  function makeLabel(key, obj, name, custom) {
    var info = custom || (window.CONTENT.characters[key] || {});
    var el = document.createElement('button');
    el.className = 'npc-label' + (key === 'me' ? ' me' : '') + (custom ? ' place' : '');
    el.type = 'button';
    el.innerHTML = '<i></i><b lang="zh-CN"></b><small></small>';
    el.querySelector('b').textContent = key === 'me' ? (name || 'Em') : (info.zh || '');
    el.querySelector('small').textContent = key === 'me' ? 'Em' : (info.name || '');
    if (custom && custom.icon) el.querySelector('i').textContent = custom.icon;
    if (custom) el.addEventListener('click', function () { clickPlace(key.slice(6)); });
    else if (key !== 'me') el.addEventListener('click', function () { clickNpc(key); });
    else el.tabIndex = -1;
    labelLayer.appendChild(el);
    labels.push({ el: el, obj: obj, key: key });
    obj.userData.label = el;
  }
  function refreshQuest() {
    labels.forEach(function (l) { l.el.classList.toggle('quest', l.key === questKey || l.key === 'place:' + questKey); });
  }
  W.setQuest = function (k) { questKey = k; refreshQuest(); };

  /* ---------- tương tác ---------- */
  var down = null;
  function onDown(e) { down = { x: e.clientX, y: e.clientY, t: Date.now() }; }
  function onUp(e) {
    if (!down) return;
    var moved = Math.abs(e.clientX - down.x) + Math.abs(e.clientY - down.y);
    down = null;
    if (moved > 8) return;
    var r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    var objs = []; Object.keys(npcs).forEach(function (k) { npcs[k].traverse(function (m) { if (m.isMesh) objs.push(m); }); });
    var hit = ray.intersectObjects(objs, false)[0];
    if (hit && hit.object.userData.npc) { clickNpc(hit.object.userData.npc); return; }
    var pobjs = []; Object.keys(places).forEach(function (k) { places[k].obj.traverse(function (m) { if (m.isMesh) pobjs.push(m); }); });
    var ph = ray.intersectObjects(pobjs, false)[0];
    if (ph && ph.object.userData.place) { clickPlace(ph.object.userData.place); return; }
    var fh = ray.intersectObjects(floorMeshes, false)[0];
    if (fh) { walkTo(fh.point.x, fh.point.z, null); }
  }
  function walkTo(x, z, done) {
    player.userData.target = new T.Vector3(Math.max(-bounds.x, Math.min(bounds.x, x)), 0, Math.max(-bounds.z, Math.min(bounds.z, z)));
    player.userData.done = done;
  }
  function clickNpc(key) {
    var n = npcs[key]; if (!n) return;
    var dir = new T.Vector3().subVectors(player.position, n.position); dir.y = 0;
    if (dir.length() < 0.01) dir.set(0, 0, 1);
    dir.normalize().multiplyScalar(1.5);
    var tx = n.position.x + dir.x, tz = n.position.z + dir.z;
    walkTo(tx, tz, function () {
      faceEach(key);
      if (hooks.onNpc) hooks.onNpc(key);
    });
  }
  function clickPlace(key) {
    var pl = places[key]; if (!pl) return;
    var p = pl.p, fz = p.z + (p.r ? -1 : 1) * ((p.d || 2) / 2 + 0.7);
    walkTo(p.x, fz, function () {
      player.rotation.y = Math.atan2(p.x - player.position.x, p.z - player.position.z);
      if (hooks.onPlace) hooks.onPlace(key);
    });
  }
  function faceEach(key) {
    var n = npcs[key]; if (!n || !player) return;
    n.rotation.y = Math.atan2(player.position.x - n.position.x, player.position.z - n.position.z);
    player.rotation.y = Math.atan2(n.position.x - player.position.x, n.position.z - player.position.z);
  }
  W.talk = function (key, on) { var n = key === 'me' ? player : npcs[key]; if (n) n.userData.talk = on ? 1.6 : 0; if (key !== 'me' && on) faceEach(key); };
  W.cheer = function () { if (player) player.userData.cheer = 1.4; };

  /* ---------- vòng lặp ---------- */
  function tick() {
    requestAnimationFrame(tick);
    if (!ready) return;
    var dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime, busy = false;
    if (player) {
      busy = !!(player.userData.target || player.userData.cheer > 0 || player.userData.talk > 0);
      var u = player.userData, tg = u.target;
      if (tg) {
        var d = new T.Vector3().subVectors(tg, player.position); d.y = 0;
        var dist = d.length();
        if (dist < 0.08) { u.target = null; var cb = u.done; u.done = null; if (cb) cb(); }
        else {
          d.normalize(); var step = Math.min(dist, Math.max(3.6, dist * 1.4) * dt); /* xa thì đi nhanh hơn */
          player.position.addScaledVector(d, step);
          player.rotation.y = Math.atan2(d.x, d.z);
          var sw = Math.sin(t * 12) * 0.5; u.legL.rotation.x = sw; u.legR.rotation.x = -sw; u.armL.rotation.x = -sw; u.armR.rotation.x = sw;
        }
      } else { u.legL.rotation.x *= 0.8; u.legR.rotation.x *= 0.8; u.armL.rotation.x *= 0.8; u.armR.rotation.x *= 0.8; }
      if (u.cheer > 0) { u.cheer -= dt; player.position.y = Math.abs(Math.sin(u.cheer * 9)) * 0.35; u.armL.rotation.z = 2.4; u.armR.rotation.z = -2.4; if (u.cheer <= 0) { player.position.y = 0; u.armL.rotation.z = 0.15; u.armR.rotation.z = -0.15; } }
      if (u.talk > 0) { u.talk -= dt; u.head.position.y = 1.75 + Math.abs(Math.sin(t * 14)) * 0.04; }
    }
    Object.keys(npcs).forEach(function (k) {
      var n = npcs[k], u = n.userData; u.t += dt;
      if (u.talk > 0) { busy = true; u.talk -= dt; u.head.position.y = 1.75 + Math.abs(Math.sin(u.t * 14)) * 0.05; u.armR.rotation.x = Math.sin(u.t * 6) * 0.5; } else { u.armR.rotation.x *= 0.9; }
    });
    /* camera đi theo em dọc con phố */
    if (follow && player) {
      var dx = (player.position.x - controls.target.x) * Math.min(1, dt * 3);
      if (Math.abs(dx) > 0.002) { controls.target.x += dx; camera.position.x += dx; busy = true; }
    }
    controls.update();
    if (!busy && !dirty) return;
    if (dirty) dirty--;
    renderer.render(scene, camera);
    /* vị trí nhãn */
    var r = renderer.domElement.getBoundingClientRect(), v = new T.Vector3();
    labels.forEach(function (l) {
      if (!l.obj.parent) { l.el.style.display = 'none'; return; }
      v.set(0, l.obj.userData.labelY || 2.75 * l.obj.scale.y, 0); l.obj.localToWorld(v); v.project(camera);
      if (v.z > 1 || v.x < -1.15 || v.x > 1.15) { l.el.style.display = 'none'; return; }
      l.el.style.display = '';
      l.el.style.transform = 'translate(-50%,-100%) translate(' + ((v.x + 1) / 2 * r.width).toFixed(1) + 'px,' + ((1 - v.y) / 2 * r.height).toFixed(1) + 'px)';
    });
  }

  function resize() {
    var w = wrap.clientWidth, hgt = wrap.clientHeight;
    renderer.setSize(w, hgt, false); camera.aspect = w / Math.max(1, hgt);
    camera.fov = w < 640 ? 52 : 40;
    /* trên điện thoại khung chat che nửa dưới: đẩy cảnh lên trên */
    if (w < 640) camera.setViewOffset(w, hgt, 0, hgt * 0.16, w, hgt); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); dirty = 3;
  }

  W.init = function (container, h) {
    hooks = h || {};
    wrap = container;
    var dpr = window.devicePixelRatio || 1;
    renderer = new T.WebGLRenderer({ antialias: dpr < 1.5, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(dpr, 1.5));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.domElement.className = 'world-canvas';
    renderer.domElement.setAttribute('aria-label', 'Cảnh 3D: kéo để xoay, cuộn hoặc chụm để phóng to, bấm vào nhân vật để nói chuyện');
    container.appendChild(renderer.domElement);
    labelLayer = document.createElement('div'); labelLayer.className = 'label-layer'; container.appendChild(labelLayer);
    scene = new T.Scene();
    camera = new T.PerspectiveCamera(40, 1, 0.1, 200);
    controls = new T.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.08; controls.enablePan = false;
    controls.addEventListener('change', function () { dirty = 2; });
    controls.minDistance = 9; controls.maxDistance = 30; controls.maxPolarAngle = 1.32; controls.minPolarAngle = 0.35;
    clock = new T.Clock();
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);
    window.addEventListener('resize', resize);
    if (window.ResizeObserver) new ResizeObserver(resize).observe(container);
    resize(); ready = true; tick();
  };
  W.overview = function () { var zk = wrap.clientWidth < 640 ? 1.4 : 1, cx = follow && player ? player.position.x : 0; camera.position.set(cx + (follow ? 4 : 9.5) * zk, 11 * zk, 13 * zk); controls.target.set(cx, 0.8, -0.3); dirty = 3; };
  /* đi tới một hàng quán (dùng cho nút trong khung chat) */
  W.goPlace = function (key) { clickPlace(key); };
})();
