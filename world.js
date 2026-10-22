/* Thế giới 3D kiểu sa bàn mở rộng: Khu phố lớn tấp nập / Thế giới học tập tiếng Trung.
   Cần THREE (r128) và THREE.OrbitControls. */
(function () {
  'use strict';
  var T = window.THREE;
  var W = window.World = {};
  var renderer, scene, camera, controls, clock, wrap, labelLayer;
  var ray = new T.Raycaster(), ptr = new T.Vector2();
  var floorMeshes = [], npcs = {}, places = {}, player = null, bounds = { x: 7.5, y: 0, z: 6.0 };
  var hooks = {}, questKey = null, ready = false, outdoor = false;

  /* ---------- vật liệu & hình khối ---------- */
  var matCache = {};
  function mat(c, opts) {
    var k = c + JSON.stringify(opts || {});
    if (!matCache[k]) matCache[k] = new T.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.85, metalness: 0.02, flatShading: true }, opts || {}));
    return matCache[k];
  }
  function mesh(geo, color, opts) { var m = new T.Mesh(geo, color instanceof T.Material ? color : mat(color, opts)); m.castShadow = true; m.receiveShadow = true; return m; }
  function box(w, h, d, c, x, y, z) { var m = mesh(new T.BoxGeometry(w, h, d), c); m.position.set(x || 0, (y || 0) + h / 2, z || 0); return m; }
  function cyl(rt, rb, h, c, x, y, z, seg) { var m = mesh(new T.CylinderGeometry(rt, rb, h, seg || 12), c); m.position.set(x || 0, (y || 0) + h / 2, z || 0); return m; }
  function ball(r, c, x, y, z) { var m = mesh(new T.SphereGeometry(r, 14, 10), c); m.position.set(x || 0, y || 0, z || 0); return m; }
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

  /* ---------- đồ đạc & kiến trúc khu phố ---------- */
  var F = {
    bed: function (o) { return grp(box(2.2, 0.45, 3.2, '#8A5A3C'), box(2.0, 0.3, 3.0, '#FFFFFF', 0, 0.45, 0), box(2.0, 0.32, 1.9, o.c || '#7DB7E8', 0, 0.62, 0.5), box(1.2, 0.25, 0.6, '#FFF6EA', 0, 0.75, -1.1), box(2.2, 1.2, 0.2, '#8A5A3C', 0, 0, -1.6)); },
    desk: function (o) {
      var g = grp(box(1.8, 0.1, 1, o.c || '#C98B57', 0, 0.85, 0), box(0.1, 0.85, 0.1, '#6B4A33', -0.8, 0, -0.4), box(0.1, 0.85, 0.1, '#6B4A33', 0.8, 0, -0.4), box(0.1, 0.85, 0.1, '#6B4A33', -0.8, 0, 0.4), box(0.1, 0.85, 0.1, '#6B4A33', 0.8, 0, 0.4));
      if (o.pc) g.add(box(0.9, 0.6, 0.06, '#1F2937', 0, 1.05, -0.3), box(0.1, 0.12, 0.1, '#374151', 0, 0.95, -0.3), mesh(new T.PlaneGeometry(0.8, 0.5), mat('#5AB0F0', { emissive: '#2E78C7', emissiveIntensity: 0.6 })));
      if (o.pc) { var sc = g.children[g.children.length - 1]; sc.position.set(0, 1.35, -0.26); }
      return g;
    },
    tree: function (o) { 
      var g = grp(cyl(0.18, 0.22, 1.4, '#7A5235')); 
      var c = mesh(new T.ConeGeometry(o.r || 1.1, 2.2, 8), '#2F8F5B'); c.position.y = 2.1; g.add(c); 
      var c2 = mesh(new T.ConeGeometry((o.r || 1.1) * 0.75, 1.6, 8), '#3AA56B'); c2.position.y = 3.0; g.add(c2); 
      return g; 
    },
    sign: function (o) { var g = new T.Group(); var p = panel(o.text, o.w || 2.4, o.h || 0.7, { bg: o.bg || '#D23B2E', fg: o.fg || '#FFFFFF' }); g.add(p); return g; },
    post: function (o) { var g = grp(cyl(0.06, 0.06, 2.2, '#555')); var p = panel(o.text, o.w || 1.6, 0.5, { bg: o.bg || '#1F9D74', fg: '#fff' }); p.position.set(0, 2.3, 0); g.add(p); var p2 = p.clone(); p2.rotation.y = Math.PI; g.add(p2); return g; },
    window: function (o) { var g = grp(box(o.w || 2, o.h || 1.4, 0.08, '#FFFFFF')); var gl = mesh(new T.PlaneGeometry((o.w || 2) - 0.2, (o.h || 1.4) - 0.2), mat(o.sky || '#9ED3EE', { emissive: o.sky || '#9ED3EE', emissiveIntensity: 0.35 })); gl.position.set(0, (o.h || 1.4) / 2, 0.05); g.add(gl); return g; },
    door: function (o) { return grp(box(1.2, 2.3, 0.08, o.c || '#B5643C'), ball(0.06, '#F4B42A', 0.4, 1.1, 0.06)); },
    lamp: function () { var g = grp(cyl(0.2, 0.25, 0.06, '#333'), cyl(0.04, 0.04, 1.7, '#333')); var sh = mesh(new T.ConeGeometry(0.35, 0.45, 12, 1, true), mat('#FFE9A8', { emissive: '#FFD36B', emissiveIntensity: 0.6, side: T.DoubleSide })); sh.position.y = 1.8; g.add(sh); return g; },
    bench: function () { return grp(box(2, 0.1, 0.5, '#B5643C', 0, 0.45, 0), box(0.1, 0.45, 0.4, '#555', -0.8, 0, 0), box(0.1, 0.45, 0.4, '#555', 0.8, 0, 0)); },
    fence: function (o) { var g = new T.Group(), n = Math.round((o.w || 6) / 0.5); for (var i = 0; i <= n; i++) g.add(box(0.08, 0.9, 0.08, '#FFFFFF', -(o.w || 6) / 2 + i * 0.5, 0, 0)); g.add(box(o.w || 6, 0.08, 0.06, '#FFFFFF', 0, 0.7, 0)); return g; },
    facade: function (o) {
      var g = grp(box(o.w || 4, o.h || 3, 0.6, o.c || '#E9D8C4'));
      var r = mesh(new T.CylinderGeometry(0.01, (o.w || 4) * 0.75, 1.2, 4), o.roof || '#C0392B'); r.rotation.y = Math.PI / 4; r.scale.z = 0.35; r.position.y = (o.h || 3) + 0.6; g.add(r);
      g.add(box(1.1, 1.9, 0.1, '#6B4A33', 0, 0, 0.32));
      var s = panel(o.text, Math.min(2.6, (o.w || 4) - 0.6), 0.6, { bg: o.bg || '#1F9D74', fg: '#fff' }); s.position.set(0, (o.h || 3) - 0.6, 0.32); g.add(s);
      return g;
    },
    house: function (o) {
      var w = o.w || 2.6, d = o.d || 2, hh = o.h || 2.2, g = grp(box(w, hh, d, o.c || '#F3E3CF'));
      var r = mesh(new T.ConeGeometry(Math.max(w, d) * 0.78, 1.1, 4), o.roof || '#C0392B'); r.rotation.y = Math.PI / 4; r.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d)); r.position.y = hh + 0.55; g.add(r);
      var s = panel(o.text || '', Math.min(2.4, w - 0.3), 0.5, { bg: o.bg || '#D23B2E', fg: '#fff' }); s.position.set(0, hh - 0.35, d / 2 + 0.03); g.add(s);
      return g;
    },
    flowers: function () { var g = new T.Group(), cols = ['#FF7AB6', '#F4B42A', '#FFFFFF', '#E25D4E', '#9B6BD6']; for (var i = 0; i < 9; i++) g.add(ball(0.12, cols[i % 5], (i % 3) * 0.35 - 0.35, 0.18, Math.floor(i / 3) * 0.35 - 0.35)); return g; }
  };

  /* ---------- định nghĩa các phòng và khu phố lớn ---------- */
  var R = {
    giant_town: {
      outdoor: true,
      floor: '#9FD39B',
      items: [
        // Mạng lưới đường giao thông bàn cờ rộng lớn
        ['road', 0, 0, 0, { z: 0, d: 4.5 }],
        ['road', 0, 0, 0, { z: -4.0, d: 2.8 }],
        ['road', 0, 0, 0, { z: 4.0, d: 2.8 }],
        
        // Phía Bắc: Thư viện, Học viện, Trạm Nghe-Nói
        ['facade', -5.5, -4.5, 0, { text: 'Thư Viện Đọc Hiểu', w: 4.5, h: 3.2, bg: '#2FA37A' }],
        ['facade', 0, -4.8, 0, { text: 'Học Viện Hán Ngữ', w: 5.2, h: 3.6, bg: '#D23B2E', c: '#F3E3CF' }],
        ['facade', 5.5, -4.5, 0, { text: 'Trạm Nghe - Nói', w: 4.5, h: 3.2, bg: '#4E8DE2' }],

        // Phía Nam: Chợ truyền thống, Quán trà sữa, Công viên
        ['facade', -5.5, 4.5, 0, { text: 'Chợ Truyền Thống', w: 4.5, h: 3, bg: '#F28C28' }],
        ['house', 0, 4.5, 0, { w: 4.2, d: 2.6, h: 2.6, text: 'Quán Trà Sữa', bg: '#3BA39C' }],
        ['facade', 5.5, 4.5, 0, { text: 'Công Viên Thành Phố', w: 4.5, h: 3, bg: '#2F8F5B', c: '#D6E8D0' }],

        // Cây xanh rợp bóng phân bổ khắp khu phố
        ['tree', -7.0, -2.2, 0, { r: 1.0 }], ['tree', 7.0, -2.2, 0, { r: 0.9 }],
        ['tree', -7.0, 2.2, 0, { r: 0.9 }], ['tree', 7.0, 2.2, 0, { r: 1.0 }],
        ['tree', -3.8, -2.2, 0, { r: 0.8 }], ['tree', 3.8, 2.2, 0, { r: 0.8 }],

        // Đèn đường chiếu sáng toàn khu phố
        ['lamp', -4.5, -1.5], ['lamp', 4.5, -1.5],
        ['lamp', -4.5, 1.5], ['lamp', 4.5, 1.5],

        // Băng ghế đá công cộng & Bảng chỉ dẫn trung tâm
        ['bench', -2.5, -1.5, 0], ['bench', 2.5, 1.5, 0], ['bench', 0, -2.5, Math.PI / 2],
        ['post', 0, 0, 0, { text: 'Khu Phố Hán Ngữ Lớn', bg: '#10233F' }]
      ]
    }
  };
  W.rooms = R;

  /* ---------- nhân vật chibi ---------- */
  var LOOK = {
    me: { shirt: '#F4B42A', pants: '#4E8DE2', hair: '#2B1D14', style: 'cap' },
    teacher: { shirt: '#5D6B82', pants: '#2D3748', hair: '#3B3B3B', style: 'short', glasses: 1 },
    seller: { shirt: '#F28C28', pants: '#5D6B82', hair: '#C9C9C9', style: 'bun' },
    cook: { shirt: '#FFFFFF', pants: '#5D6B82', hair: '#2B1D14', style: 'chef' },
    manager: { shirt: '#1F2937', pants: '#1F2937', hair: '#1B1B1B', style: 'short' },
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
    if (L.style !== 'bald') { var hair = new T.Mesh(new T.SphereGeometry(0.58, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), hairM); hair.position.set(0, 1.78, -0.04); g.add(hair); }
    if (L.style === 'cap') { var cp = cyl(0.58, 0.6, 0.25, '#D23B2E', 0, 2.0, 0, 16); g.add(cp); }
    g.add(ball(0.07, '#1B1B1B', -0.19, 1.8, 0.5), ball(0.07, '#1B1B1B', 0.19, 1.8, 0.5));
    var ch1 = ball(0.08, '#F49AA8', -0.32, 1.65, 0.45), ch2 = ball(0.08, '#F49AA8', 0.32, 1.65, 0.45); g.add(ch1, ch2);
    g.scale.setScalar(scale || 1);
    g.userData = { legL: legL, legR: legR, armL: armL, armR: armR, head: head, t: Math.random() * 6 };
    return g;
  }

  function sky(time, dark) {
    return ['#7EC8F0', '#D8F0FF', 1.05, '#FFFFFF'];
  }
  function place(obj, x, z, rot, y) { obj.position.x += x || 0; obj.position.z += z || 0; if (y) obj.position.y += y; obj.rotation.y = rot || 0; scene.add(obj); return obj; }

  W.load = function (roomId, opt) {
    opt = opt || {};
    var def = R[roomId] || R.giant_town;
    outdoor = !!def.outdoor;
    while (scene.children.length) scene.remove(scene.children[0]);
    floorMeshes = []; npcs = {}; labels = []; labelLayer.innerHTML = '';
    var s = sky(opt.time, def.dark);
    wrap.style.background = 'linear-gradient(180deg,' + s[0] + ' 0%,' + s[1] + ' 100%)';
    scene.add(new T.HemisphereLight('#FFFFFF', '#8A7A6A', 0.8));
    var sun = new T.DirectionalLight(s[3], s[2]); sun.position.set(6, 12, 8); sun.castShadow = true;
    scene.add(sun);
    var fw = 16, fd = 12;
    var floor = mesh(new T.BoxGeometry(fw, 0.4, fd), def.floor); floor.position.y = -0.2; scene.add(floor); floorMeshes.push(floor);
    
    def.items.forEach(function (it) {
      var type = it[0], o = it[4] || {};
      if (type === 'road') { var rz = o.z != null ? o.z : 3.4; var rd = mesh(new T.BoxGeometry(fw, 0.02, o.d || 2.2), '#5B6472'); rd.position.set(0, 0.01, rz); scene.add(rd); return; }
      if (type === 'sign') { var sg = F.sign(o).children[0]; sg.position.set(o.x || 0, o.y || 3, -fd / 2 + 0.02); scene.add(sg); return; }
      var maker = F[type]; if (!maker) return;
      var obj = maker(o);
      place(obj, it[1], it[2], it[3]);
    });

    /* nhân vật */
    var cast = (opt.cast || ['me', 'teacher', 'seller', 'cook', 'manager']).slice();
    var spots = [[-3.0, -1.5], [3.0, -1.2], [0.5, -2.5], [-5.0, 0.8], [5.0, 1.0]];
    cast.forEach(function (key, i) {
      var c = chibi(key, 1); var sp = spots[i % spots.length];
      c.position.set(sp[0], 0, sp[1]); c.rotation.y = 0.25 * (sp[0] < 0 ? 1 : -1);
      c.userData.key = key; c.userData.home = c.position.clone();
      scene.add(c); npcs[key] = c;
      c.traverse(function (m) { if (m.isMesh) m.userData.npc = key; });
      makeLabel(key, c);
    });

    player = chibi('me', opt.scale || 0.82);
    player.position.set(0, 0, 3.5);
    player.rotation.y = Math.PI; player.userData.target = null;
    scene.add(player);
    makeLabel('me', player, opt.meName);
    questKey = opt.quest || null; refreshQuest();
    controls.target.set(0, 0.8, -0.3);
    var zk = wrap.clientWidth < 640 ? 1.4 : 1; camera.position.set(9.5 * zk, 11 * zk, 13 * zk);
    controls.update();
  };

  /* ---------- nhãn tên ---------- */
  var labels = [];
  function makeLabel(key, obj, name, custom) {
    var info = custom || (window.CONTENT && window.CONTENT.characters ? window.CONTENT.characters[key] : {}) || { zh: key, name: key };
    var el = document.createElement('button');
    el.className = 'npc-label' + (key === 'me' ? ' me' : '');
    el.type = 'button';
    el.innerHTML = '<i></i><b lang="zh-CN"></b><small></small>';
    el.querySelector('b').textContent = key === 'me' ? (name || 'Em') : (info.zh || key);
    el.querySelector('small').textContent = key === 'me' ? 'Em' : (info.name || '');
    if (key !== 'me') el.addEventListener('click', function () { clickNpc(key); });
    else el.tabIndex = -1;
    labelLayer.appendChild(el);
    labels.push({ el: el, obj: obj, key: key });
    obj.userData.label = el;
  }
  function refreshQuest() {
    labels.forEach(function (l) { l.el.classList.toggle('quest', l.key === questKey); });
  }

  function onDown(e) { down = { x: e.clientX, y: e.clientY, t: Date.now() }; }
  var down = null;
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
      n.rotation.y = Math.atan2(player.position.x - n.position.x, player.position.z - n.position.z);
      player.rotation.y = Math.atan2(n.position.x - player.position.x, n.position.z - player.position.z);
      if (hooks.onNpc) hooks.onNpc(key);
    });
  }

  function tick() {
    requestAnimationFrame(tick);
    if (!ready) return;
    var dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    if (player) {
      var u = player.userData, tg = u.target;
      if (tg) {
        var d = new T.Vector3().subVectors(tg, player.position); d.y = 0;
        var dist = d.length();
        if (dist < 0.08) { u.target = null; var cb = u.done; u.done = null; if (cb) cb(); }
        else {
          d.normalize(); var step = Math.min(dist, 3.6 * dt);
          player.position.addScaledVector(d, step);
          player.rotation.y = Math.atan2(d.x, d.z);
          var sw = Math.sin(t * 12) * 0.5; u.legL.rotation.x = sw; u.legR.rotation.x = -sw; u.armL.rotation.x = -sw; u.armR.rotation.x = sw;
        }
      } else { u.legL.rotation.x *= 0.8; u.legR.rotation.x *= 0.8; u.armL.rotation.x *= 0.8; u.armR.rotation.x *= 0.8; }
    }
    controls.update();
    renderer.render(scene, camera);
    var r = renderer.domElement.getBoundingClientRect(), v = new T.Vector3();
    labels.forEach(function (l) {
      if (!l.obj.parent) { l.el.style.display = 'none'; return; }
      v.set(0, 2.75 * l.obj.scale.y, 0); l.obj.localToWorld(v); v.project(camera);
      if (v.z > 1) { l.el.style.display = 'none'; return; }
      l.el.style.display = '';
      l.el.style.transform = 'translate(-50%,-100%) translate(' + ((v.x + 1) / 2 * r.width).toFixed(1) + 'px,' + ((1 - v.y) / 2 * r.height).toFixed(1) + 'px)';
    });
  }

  function resize() {
    var w = wrap.clientWidth, hgt = wrap.clientHeight;
    renderer.setSize(w, hgt, false); camera.aspect = w / Math.max(1, hgt);
    camera.fov = w < 640 ? 52 : 40;
    camera.updateProjectionMatrix();
  }

  W.init = function (container, h) {
    hooks = h || {};
    wrap = container;
    renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.domElement.className = 'world-canvas';
    container.appendChild(renderer.domElement);
    labelLayer = document.createElement('div'); labelLayer.className = 'label-layer'; container.appendChild(labelLayer);
    scene = new T.Scene();
    camera = new T.PerspectiveCamera(40, 1, 0.1, 200);
    controls = new T.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.08; controls.enablePan = false;
    controls.minDistance = 9; controls.maxDistance = 30; controls.maxPolarAngle = 1.32; controls.minPolarAngle = 0.35;
    clock = new T.Clock();
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);
    window.addEventListener('resize', resize);
    resize(); ready = true; tick();
  };
})();
