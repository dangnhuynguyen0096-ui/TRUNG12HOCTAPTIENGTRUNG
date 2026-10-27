/* Học tiếng Trung theo môn — khung app dùng chung.
   Mỗi môn là 1 file data/<id>.js gọi HOC.add({ id, name, book, lessons:[...] }).
   Mỗi bài (lesson) gồm các văn bản (texts). Mỗi văn bản:
     { id, title, kind, words, src, p:[đoạn văn; "{n}" là chỗ trống n],
       notes:[[từ, pinyin, nghĩa]], ex:[bài tập sách], adv:{ g:[[cấu trúc, giải thích, ví dụ]], an:[[câu, phân tích, dịch]], w:[[tên, đề]] } }
   Bài tập sách (ex[i].t):
     mc     items:[[câu hỏi, [lựa chọn], đáp án (số, hoặc mảng số nếu chọn nhiều)]]
     tf     items:[[nhận định, true | false | 'o' (bài không nhắc tới)]]
     place  o:[câu cần điền], a:[chỉ số lựa chọn cho chỗ trống 1, 2, ...]   (chỗ trống {n} trong đoạn văn)
     cloze  items:[[[A, B, C, D], đáp án]]   (chỗ trống {n} trong đoạn văn, hoặc trong ex.text nếu là đoạn riêng)
     fill   items:[[câu có ___ , đáp án (chuỗi, nhiều đáp án ngăn bằng |)]]
     match  items:[[vế trái, vế phải]]
     order  items:[[vế 1, vế 2, ...]]   (đúng thứ tự, app tự xáo)
     open   items:[[câu hỏi, gợi ý đáp án, (câu cho máy đọc)]]
   Môn nghe (listen: true): p là bài khóa, ẩn đến khi người học bấm hiện; ex.audio là đoạn máy đọc riêng cho một bài tập.
   Mọi phần chấm đều chạy trong máy; phần viết tự do thì có nút sao chép lệnh để nhờ AI chấm. */
(function () {
  'use strict';
  var DB = {}, app = document.getElementById('app'), crumb = document.getElementById('crumb');
  window.HOC = { add: function (s) {
    /* văn mẫu (môn viết): đầu đoạn "^" = căn giữa (标题), ">" = căn phải (落款), "|" = viết sát lề (称呼, 此致…); còn lại lùi đầu dòng hai chữ */
    s.lessons.forEach(function (l) { l.texts.forEach(function (t) {
      if (!t.p.some(function (p) { return /^[\^>|]/.test(p); })) return;
      t.fmt = t.p.map(function (p) { return { '^': 'c', '>': 'r', '|': 'l' }[p.charAt(0)] || ''; });
      t.p = t.p.map(function (p) { return p.replace(/^[\^>|]/, ''); });
    }); });
    DB[s.id] = s;
  } };

  /* ---------- tiện ích ---------- */
  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'on') for (var ev in attrs.on) e.addEventListener(ev, attrs.on[ev]);
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null && c !== false) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function L(i) { return String.fromCharCode(65 + i); }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('hoc:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('hoc:' + k, JSON.stringify(v)); } catch (e) {} }
  };
  function plain(s) { return s.replace(/\{\d+\}/g, '……'); }
  function sentences(t) {
    var out = [];
    t.p.forEach(function (p) {
      (spoken(p).match(/[^。！？；\n]+[。！？；」”]*/g) || []).forEach(function (s) { s = s.trim(); if (s.replace(/[^\u4e00-\u9fff]/g, '').length >= 6) out.push(s); });
    });
    return out;
  }
  function han(s) { return s.replace(/[^\u4e00-\u9fff0-9a-zA-Z]/g, ''); }
  /* độ giống nhau theo chữ (LCS), dùng cho chính tả và luyện nói */
  function lcs(a, b) {
    var m = a.length, n = b.length, prev = new Array(n + 1).fill(0), cur;
    for (var i = 1; i <= m; i++) { cur = [0]; for (var j = 1; j <= n; j++) cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]); prev = cur; }
    return prev[n];
  }
  function diffHtml(ref, got) {
    /* tô đỏ chữ trong câu gốc mà người học viết thiếu/sai */
    var a = ref, b = han(got), m = a.length, n = b.length, d = [];
    for (var i = 0; i <= m; i++) { d[i] = []; for (var j = 0; j <= n; j++) d[i][j] = 0; }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) d[i][j] = a[i] === b[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
    var out = '', x = 0, y = 0;
    while (x < m) {
      if (y < n && a[x] === b[y]) { out += esc(a[x]); x++; y++; }
      else if (y < n && d[x][y + 1] >= d[x + 1][y]) y++;
      else { out += /[\u4e00-\u9fff]/.test(a[x]) ? '<mark>' + esc(a[x]) + '</mark>' : esc(a[x]); x++; }
    }
    return out;
  }

  /* ---------- đọc to (TTS) và micro ---------- */
  var zhVoice = null;
  function pickVoice() { if (!window.speechSynthesis) return; var vs = speechSynthesis.getVoices(); zhVoice = vs.filter(function (v) { return /zh[-_]CN/i.test(v.lang); })[0] || vs.filter(function (v) { return /^zh/i.test(v.lang); })[0] || null; }
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate, onend) {
    if (!window.speechSynthesis) { alert('Trình duyệt này không đọc được tiếng Trung. Hãy dùng Chrome hoặc Edge.'); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text); u.lang = 'zh-CN'; if (zhVoice) u.voice = zhVoice; u.rate = rate || store.get('rate', 0.9);
    if (onend) u.onend = onend;
    speechSynthesis.speak(u);
  }
  /* chỉnh tốc độ đọc: dùng chung cho mọi môn, lưu lại trên máy */
  var RATES = [[0.5, 'Rất chậm'], [0.7, 'Chậm'], [0.9, 'Vừa'], [1, 'Bình thường'], [1.2, 'Nhanh'], [1.5, 'Rất nhanh']];
  function rateCtl() {
    var cur = store.get('rate', 0.9);
    var sel = h('select', { class: 'rate-sel', title: 'Tốc độ giọng đọc' }, RATES.map(function (r) {
      return h('option', { value: r[0] }, ['🔊 ' + r[1] + ' (' + r[0] + '×)']);
    }));
    sel.value = String(cur);
    sel.addEventListener('change', function () {
      store.set('rate', +sel.value);
      document.querySelectorAll('.rate-sel').forEach(function (o) { o.value = sel.value; });
    });
    return sel;
  }
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen(cb, onerr) {
    if (!Rec) { onerr('Máy này không nhận giọng nói được. Hãy dùng Chrome trên Android/máy tính.'); return null; }
    var r = new Rec(); r.lang = 'zh-CN'; r.interimResults = false; r.maxAlternatives = 3;
    r.onresult = function (e) { var best = ''; for (var i = 0; i < e.results[0].length; i++) if (e.results[0][i].transcript.length > best.length) best = e.results[0][i].transcript; cb(best); };
    r.onerror = function (e) { onerr(e.error === 'not-allowed' ? 'Bạn cần cho phép dùng micro.' : 'Không nghe rõ, thử lại nhé.'); };
    r.start(); return r;
  }
  function copy(text, btn) {
    var done = function () { var o = btn.textContent; btn.textContent = 'Đã chép ✓'; setTimeout(function () { btn.textContent = o; }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { fallback(); }); else fallback();
    function fallback() { var t = h('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
  }

  /* ---------- lặp lại ngắt quãng cho từ vựng ---------- */
  var GAP = [0, 1, 3, 7, 16, 35, 80];
  function today() { return Math.floor(Date.now() / 864e5); }
  function srsGet(sid) { return store.get('srs:' + sid, {}); }
  function srsGrade(sid, w, ok) {
    var s = srsGet(sid), c = s[w] || { b: 0, d: 0 };
    c.b = ok ? Math.min(c.b + 1, GAP.length - 1) : 0; c.d = today() + (ok ? GAP[c.b] : 0);
    s[w] = c; store.set('srs:' + sid, s);
  }
  function allWords(sub, filter) {
    var seen = {}, out = [];
    sub.lessons.forEach(function (l) { l.texts.forEach(function (t) {
      if (filter && !filter(l, t)) return;
      (t.notes || []).forEach(function (n) { if (!seen[n[0]]) { seen[n[0]] = 1; out.push({ w: n[0], py: n[1], vi: n[2], t: t }); } });
    }); });
    return out;
  }
  function dueWords(sub, list) { var s = srsGet(sub.id), d = today(); return (list || allWords(sub)).filter(function (x) { var c = s[x.w]; return !c || c.d <= d; }); }

  /* ---------- tải môn ---------- */
  function loadSubject(id, cb) {
    if (DB[id]) return cb(DB[id]);
    var sc = h('script', { src: 'data/' + id + '.js' });
    sc.onload = function () { cb(DB[id]); };
    sc.onerror = function () { app.innerHTML = '<p class="card">Chưa tải được môn này.</p>'; };
    document.body.appendChild(sc);
  }
  function findText(sub, tid) { var r = null; sub.lessons.forEach(function (l) { l.texts.forEach(function (t) { if (t.id === tid) r = { l: l, t: t }; }); }); return r; }
  function bestOf(sid, tid) { return store.get('best:' + sid + ':' + tid, null); }

  /* ---------- màn hình ---------- */
  function route() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    var parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    window.scrollTo(0, 0);
    if (!parts[0]) return home();
    if (parts[0] === 's') loadSubject(parts[1], function (sub) {
      if (!sub) return;
      if (parts[2] === 'tu-vung') return review(sub, parts[3]);
      if (parts[2]) { var f = findText(sub, parts[2]); return f ? textView(sub, f.l, f.t, parts[3] || 'doc') : subjectView(sub); }
      subjectView(sub);
    });
  }
  window.addEventListener('hashchange', route);

  function home() {
    crumb.textContent = '';
    app.innerHTML = '';
    app.appendChild(h('section', { class: 'hero' }, [
      h('h1', null, ['Chọn môn học']),
      h('p', null, ['Mỗi môn đi theo đúng sách: bài tập trong sách app tự chấm, kèm luyện nghe, nói, ghép câu, phân tích câu và viết.'])
    ]));
    function grid(list) {
      var g = h('div', { class: 'grid' });
      list.forEach(function (s) {
        g.appendChild(h('a', { class: 'card subj', href: '#/s/' + s.id }, [
          h('div', { class: 'big zh' }, [s.skill]), h('h2', null, [s.name]), h('p', { class: 'zh muted' }, [s.book])
        ]));
      });
      return g;
    }
    app.appendChild(grid(SUBJECTS.filter(function (s) { return !s.nc; })));
    var adv = SUBJECTS.filter(function (s) { return s.nc; });
    if (adv.length) {
      app.appendChild(h('h2', { class: 'sec' }, ['🌟 Môn nâng cao']));
      app.appendChild(h('p', { class: 'muted' }, ['Đọc mở rộng ngoài chương trình: văn hay, nhiều từ mới, dùng để nâng vốn từ và luyện nói, viết.']));
      app.appendChild(grid(adv));
    }
  }

  function subjectView(sub) {
    crumb.textContent = ' › ' + sub.name;
    app.innerHTML = '';
    var due = dueWords(sub).length;
    app.appendChild(h('section', { class: 'hero' }, [
      h('h1', null, [sub.name]), h('p', { class: 'zh muted' }, [sub.book]),
      h('a', { class: 'btn', href: '#/s/' + sub.id + '/tu-vung' }, ['🃏 Ôn từ vựng hôm nay (' + due + ')'])
    ]));
    sub.lessons.forEach(function (l) {
      var box = h('details', { class: 'card lesson', open: true });
      box.appendChild(h('summary', null, [h('b', null, ['Bài ' + l.n]), ' ', h('span', { class: 'zh' }, [l.title || ''])]));
      var ul = h('div', { class: 'texts' });
      l.texts.forEach(function (t) {
        var b = bestOf(sub.id, t.id);
        ul.appendChild(h('a', { class: 'trow', href: '#/s/' + sub.id + '/' + t.id }, [
          h('span', { class: 'tag' }, [t.kind || '']), h('span', { class: 'zh tt' }, [t.title]),
          h('span', { class: 'score' + (b && b.pct >= 80 ? ' good' : '') }, [b ? b.pct + '%' : '–'])
        ]));
      });
      ul.appendChild(h('a', { class: 'trow sub', href: '#/s/' + sub.id + '/tu-vung/' + l.n }, ['🃏 Từ vựng bài ' + l.n]));
      box.appendChild(ul); app.appendChild(box);
    });
  }

  var TABS = [['doc', '📖 Đọc'], ['bt', '✍ Bài tập sách'], ['tu', '🃏 Từ vựng'], ['nghe', '🎧 Nghe'], ['noi', '🗣 Nói'], ['cau', '🧩 Câu & đoạn'], ['nc', '🔬 Nâng cao'], ['viet', '📝 Viết']];
  function textView(sub, l, t, tab) {
    crumb.innerHTML = ' › <a href="#/s/' + sub.id + '">' + esc(sub.name) + '</a> › Bài ' + l.n;
    app.innerHTML = '';
    app.appendChild(h('div', { class: 'thead' }, [
      h('span', { class: 'tag' }, [t.kind || '']), h('h1', { class: 'zh' }, [t.title]),
      t.words || t.time ? h('span', { class: 'muted' }, [(t.words ? 'khoảng ' + t.words + ' chữ' : '') + (t.words && t.time ? ' · ' : '') + (t.time ? 'thời gian tham khảo ' + t.time + ' phút' : '')]) : null
    ]));
    var nav = h('nav', { class: 'tabs' });
    TABS.forEach(function (x) { nav.appendChild(h('a', { href: '#/s/' + sub.id + '/' + t.id + '/' + x[0], class: x[0] === tab ? 'on' : '' }, [sub.listen && x[0] === 'doc' ? '🎧 Bài nghe' : x[1]])); });
    app.appendChild(nav);
    var body = h('div', { class: 'tabbody' }); app.appendChild(body);
    ({ doc: tabRead, bt: tabBook, tu: tabWords, nghe: tabListen, noi: tabSpeak, cau: tabSentence, nc: tabAdvanced, viet: tabWrite }[tab] || tabRead)(sub, l, t, body);
    /* nút sang văn bản tiếp theo */
    var all = []; sub.lessons.forEach(function (x) { x.texts.forEach(function (y) { all.push(y); }); });
    var i = all.indexOf(t), nx = h('div', { class: 'pager' });
    if (all[i - 1]) nx.appendChild(h('a', { class: 'btn ghost', href: '#/s/' + sub.id + '/' + all[i - 1].id + '/' + tab }, ['‹ ' + all[i - 1].title]));
    if (all[i + 1]) nx.appendChild(h('a', { class: 'btn ghost', href: '#/s/' + sub.id + '/' + all[i + 1].id + '/' + tab }, [all[i + 1].title + ' ›']));
    app.appendChild(nx);
  }

  /* đoạn văn có gạch dưới từ chú thích; chạm vào để xem nghĩa */
  function paraHtml(p, notes, blankFn) {
    var s = esc(p);
    (notes || []).slice().sort(function (a, b) { return b[0].length - a[0].length; }).forEach(function (n, k) {
      s = s.replace(esc(n[0]), '\u0001' + k + '\u0002');
    });
    s = s.replace(/\u0001(\d+)\u0002/g, function (_, k) { var n = notes.slice().sort(function (a, b) { return b[0].length - a[0].length; })[k]; return '<span class="nw" data-g="' + esc(n[1] + ' · ' + n[2]) + '">' + esc(n[0]) + '</span>'; });
    return s.replace(/\{(\d+)\}/g, function (_, n) { return blankFn ? blankFn(+n) : '<span class="blank">' + n + '</span>'; });
  }
  function bindGloss(root) {
    root.addEventListener('click', function (e) {
      var w = e.target.closest('.nw'); if (!w) return;
      var old = root.querySelector('.gloss'); if (old) old.remove();
      var g = h('span', { class: 'gloss' }, [w.getAttribute('data-g')]); w.after(g);
      setTimeout(function () { g.remove(); }, 4000);
    });
  }

  /* bỏ tên người nói ("男：", "A：") trước khi máy đọc */
  function spoken(s) { return plain(s).replace(/(^|[。！？”\s])[^\s：:，。！？]{1,4}[：:]/g, '$1'); }
  function listenBar(t) {
    return h('div', { class: 'bar' }, [h('button', { class: 'btn', on: { click: function () { speak(spoken(t.p.join('\n'))); } } }, ['🔊 Nghe bài']),
      h('button', { class: 'btn ghost', on: { click: function () { speechSynthesis.cancel(); } } }, ['⏹ Dừng']), rateCtl()]);
  }
  function tabListenText(sub, l, t, body) {
    body.appendChild(h('p', { class: 'tip' }, ['Nghe cả bài 2 lần, không nhìn chữ. Sang tab Bài tập sách làm bài (ở đó cũng có nút nghe), chấm xong mới mở bài khóa ra đối chiếu. Chỉnh tốc độ đọc ở tab Nghe.']));
    body.appendChild(listenBar(t));
    var art = h('article', { class: 'zh reading pre', hidden: true });
    t.p.forEach(function (p, i) {
      var pp = h('p', { html: '<span class="pn">[' + (i + 1) + ']</span>' + paraHtml(p, t.notes) });
      pp.insertBefore(h('button', { class: 'btn ghost sm', on: { click: function () { speak(spoken(p)); } } }, ['🔊']), pp.firstChild);
      art.appendChild(pp);
    });
    if (t.src) art.appendChild(h('p', { class: 'src' }, [t.src]));
    bindGloss(art);
    body.appendChild(h('button', { class: 'btn ghost', on: { click: function () { art.hidden = !art.hidden; this.textContent = art.hidden ? '👁 Hiện bài khóa' : '🙈 Ẩn bài khóa'; } } }, ['👁 Hiện bài khóa']));
    body.appendChild(art);
    if (t.notes && t.notes.length) {
      var nl = h('dl', { class: 'notes' });
      t.notes.forEach(function (n) { nl.appendChild(h('dt', { class: 'zh' }, [n[0]])); nl.appendChild(h('dd', null, [n[1] + ' · ' + n[2]])); });
      body.appendChild(h('details', { class: 'card' }, [h('summary', null, ['Từ mới (' + t.notes.length + ')']), nl]));
    }
  }
  function tabRead(sub, l, t, body) {
    if (sub.listen) return tabListenText(sub, l, t, body);
    var timer = null, start = 0, chars = t.p.join('').replace(/[^\u4e00-\u9fff]/g, '').length;
    var clock = h('span', { class: 'clock' }, ['0:00']);
    var btn = h('button', { class: 'btn', on: { click: function () {
      if (!timer) { start = Date.now(); timer = setInterval(function () { var s = Math.floor((Date.now() - start) / 1000); clock.textContent = Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }, 500); btn.textContent = '⏹ Đọc xong'; }
      else { clearInterval(timer); timer = null; var sec = (Date.now() - start) / 1000, sp = Math.round(chars / sec * 60); btn.textContent = '⏱ Bấm giờ lại';
        res.textContent = 'Tốc độ: ' + sp + ' chữ/phút. ' + (sp >= 250 ? 'Rất tốt, đúng tốc độ cao cấp.' : sp >= 180 ? 'Khá, mục tiêu cao cấp là khoảng 250 chữ/phút.' : 'Hơi chậm, đọc lướt thêm để quen ý chính.');
        var log = store.get('speed:' + sub.id, []); log.push(sp); store.set('speed:' + sub.id, log.slice(-50)); }
    } } }, ['⏱ Bấm giờ đọc']);
    var res = h('p', { class: 'muted' });
    var tip = { '精读': 'Đọc kỹ: hiểu từng câu, đoán nghĩa từ mới qua ngữ cảnh.', '通读': 'Đọc thông: đọc liền một mạch, nắm ý chính và quan điểm tác giả.', '略读': 'Đọc lướt: chỉ tìm ý chính từng đoạn, không dừng ở từ khó.', '查读': 'Đọc tra cứu: đọc câu hỏi trước rồi tìm nhanh thông tin.', '理论': 'Lý thuyết: nắm khái niệm, đặc điểm và bố cục (标题 · 称呼 · 正文 · 落款) trước khi xem văn mẫu.', '范文': 'Văn mẫu: chú ý vị trí từng phần và các câu mở/kết cố định, rồi sang tab Viết để bắt chước.', '内容链接': 'Bài đọc thêm: lấy ý và số liệu ở đây làm dẫn chứng khi thảo luận.', '游记': 'Du ký: văn giàu hình ảnh và thành ngữ. Đọc lướt lấy thông tin (năm, số liệu, địa danh) trước, rồi đọc lại để học cách miêu tả.', '专题': 'Chuyên đề: mỗi đoạn một địa danh, chú ý câu mở đầu đoạn và các từ đánh giá.' }[t.kind] || (/^课文[一二三]$/.test(t.kind) && sub.id === 'ky3' ? 'Khẩu ngữ: đọc to bài khóa, học các mẫu câu 表达方式 ở tab Nâng cao, rồi luyện nói ở tab Nói.' : '');
    body.appendChild(h('div', { class: 'bar' }, [btn, clock, h('button', { class: 'btn ghost', on: { click: function () { speak(plain(t.p.join(''))); } } }, ['🔊 Nghe cả bài']), h('button', { class: 'btn ghost', on: { click: function () { speechSynthesis.cancel(); } } }, ['⏸']), rateCtl()]));
    if (tip) body.appendChild(h('p', { class: 'tip' }, [tip]));
    body.appendChild(res);
    var art = h('article', { class: 'zh reading' + (t.fmt ? ' fmt' : '') });
    t.p.forEach(function (p, i) { art.appendChild(t.fmt ? h('p', { class: t.fmt[i], html: paraHtml(p, t.notes) }) : h('p', { html: '<span class="pn">[' + (i + 1) + ']</span>' + paraHtml(p, t.notes) })); });
    if (t.src) art.appendChild(h('p', { class: 'src' }, [t.src]));
    bindGloss(art); body.appendChild(art);
    if (t.notes && t.notes.length) {
      var nl = h('dl', { class: 'notes' });
      t.notes.forEach(function (n) { nl.appendChild(h('dt', { class: 'zh' }, [n[0]])); nl.appendChild(h('dd', null, [n[1] + ' · ' + n[2]])); });
      body.appendChild(h('details', { class: 'card' }, [h('summary', null, ['Chú thích từ (' + t.notes.length + ')']), nl]));
    }
  }

  /* ---------- bài tập sách ---------- */
  function tabBook(sub, l, t, body) {
    if (!t.ex || !t.ex.length) { body.appendChild(h('p', { class: 'card' }, ['Văn bản này không có bài tập trong sách. Hãy sang tab Câu & đoạn hoặc Nâng cao.'])); return; }
    var graders = [];
    if (sub.listen) body.appendChild(listenBar(t));
    t.ex.forEach(function (ex, i) {
      var card = h('section', { class: 'card ex' }, [h('h3', { class: 'zh' }, [(['一', '二', '三', '四', '五', '六', '七', '八'][i] || i + 1) + '、' + (ex.q || '')])]);
      if (ex.audio) card.appendChild(h('button', { class: 'btn ghost sm', on: { click: function () { speak(spoken(ex.audio)); } } }, ['🔊 Nghe phần này']));
      var g = (EX[ex.t] || EX.open)(ex, card, t);
      if (g) graders.push(g);
      body.appendChild(card);
    });
    var out = h('p', { class: 'result' });
    body.appendChild(h('div', { class: 'bar sticky' }, [
      h('button', { class: 'btn', on: { click: function () {
        var ok = 0, tot = 0; graders.forEach(function (g) { var r = g(); ok += r[0]; tot += r[1]; });
        var pct = tot ? Math.round(ok / tot * 100) : 0;
        out.textContent = 'Đúng ' + ok + '/' + tot + ' câu (' + pct + '%). ' + (pct >= 80 ? 'Rất tốt!' : 'Xem lại các câu tô đỏ, đọc lại đoạn văn liên quan rồi làm lại.');
        var b = bestOf(sub.id, t.id); if (!b || pct >= b.pct) store.set('best:' + sub.id + ':' + t.id, { pct: pct, at: Date.now() });
      } } }, ['Chấm bài']),
      h('button', { class: 'btn ghost', on: { click: function () { route(); } } }, ['Làm lại']), out
    ]));
  }
  function mark(el, ok) { el.classList.remove('right', 'wrong'); el.classList.add(ok ? 'right' : 'wrong'); }
  function articleWithBlanks(t, mk, ex) {
    var art = h('div', { class: 'zh reading small' });
    if (ex.text) { ex.text.split('\n').forEach(function (line) { art.appendChild(h('p', { html: paraHtml(line, null, mk) })); }); return art; }
    t.p.forEach(function (p, i) { if (/\{\d+\}/.test(p)) art.appendChild(h('p', { html: '<span class="pn">[' + (i + 1) + ']</span>' + paraHtml(p, null, mk) })); });
    return art;
  }
  var EX = {
    mc: function (ex, card) {
      var rows = [];
      ex.items.forEach(function (it, k) {
        var multi = Array.isArray(it[2]), name = 'q' + Math.random().toString(36).slice(2);
        var box = h('div', { class: 'q' }, [h('p', { class: 'zh' }, [(ex.items.length > 1 ? k + 1 + '. ' : '') + it[0]])]);
        var inputs = it[1].map(function (o, j) {
          var inp = h('input', { type: multi ? 'checkbox' : 'radio', name: name, value: j });
          box.appendChild(h('label', { class: 'opt zh' }, [inp, ' ' + L(j) + '. ' + o])); return inp;
        });
        card.appendChild(box); rows.push([box, inputs, it[2]]);
      });
      return function () {
        var ok = 0;
        rows.forEach(function (r) {
          var sel = r[1].map(function (x, j) { return x.checked ? j : -1; }).filter(function (j) { return j >= 0; });
          var ans = Array.isArray(r[2]) ? r[2] : [r[2]], good = sel.length === ans.length && ans.every(function (a) { return sel.indexOf(a) >= 0; });
          mark(r[0], good); if (good) ok++;
          r[1].forEach(function (x, j) { x.parentNode.classList.toggle('key', ans.indexOf(j) >= 0); });
        });
        return [ok, rows.length];
      };
    },
    tf: function (ex, card) {
      /* đáp án: true (✓), false (✗), 'o' (○ bài không nhắc tới) */
      var tri = ex.items.some(function (it) { return it[1] === 'o'; });
      var rows = ex.items.map(function (it, k) {
        var s = h('select', null, [h('option', { value: '' }, ['?']), h('option', { value: '1' }, ['✓ Đúng']), h('option', { value: '0' }, ['✗ Sai']), tri ? h('option', { value: 'o' }, ['○ Không nhắc tới']) : null]);
        var box = h('div', { class: 'q row' }, [s, h('span', { class: 'zh' }, [' ' + (k + 1) + '. ' + it[0]])]);
        card.appendChild(box); return [box, s, it[1] === 'o' ? 'o' : it[1] ? '1' : '0'];
      });
      return function () { var ok = 0; rows.forEach(function (r) { var g = r[1].value === r[2]; mark(r[0], g); if (g) ok++; else r[1].title = 'Đáp án: ' + { '1': '✓', '0': '✗', o: '○' }[r[2]]; }); return [ok, rows.length]; };
    },
    place: function (ex, card, t) {
      var sels = [];
      card.appendChild(h('ol', { class: 'zh optlist', type: 'A' }, ex.o.map(function (o) { return h('li', null, [o]); })));
      card.appendChild(articleWithBlanks(t, function (n) { return '<select class="bsel" data-n="' + n + '"><option value="">(' + n + ')</option>' + ex.o.map(function (o, j) { return '<option value="' + j + '">' + L(j) + '</option>'; }).join('') + '</select>'; }, ex));
      card.querySelectorAll('.bsel').forEach(function (s) { sels.push(s); s.addEventListener('change', function () { s.title = ex.o[s.value] || ''; }); });
      return function () { var ok = 0; sels.forEach(function (s) { var a = ex.a[s.dataset.n - 1], g = +s.value === a && s.value !== ''; mark(s, g); if (g) ok++; else s.title = 'Đáp án: ' + L(a) + '. ' + ex.o[a]; }); return [ok, sels.length]; };
    },
    cloze: function (ex, card, t) {
      var sels = [];
      card.appendChild(articleWithBlanks(t, function (n) { var it = ex.items[n - 1]; if (!it) return '(' + n + ')'; return '<select class="bsel" data-n="' + n + '"><option value="">(' + n + ')</option>' + it[0].map(function (o, j) { return '<option value="' + j + '">' + esc(o) + '</option>'; }).join('') + '</select>'; }, ex));
      card.querySelectorAll('.bsel').forEach(function (s) { sels.push(s); });
      return function () { var ok = 0; sels.forEach(function (s) { var it = ex.items[s.dataset.n - 1], g = s.value !== '' && +s.value === it[1]; mark(s, g); if (g) ok++; else s.title = 'Đáp án: ' + it[0][it[1]]; }); return [ok, sels.length]; };
    },
    fill: function (ex, card) {
      var rows = ex.items.map(function (it, k) {
        var inp = h('input', { class: 'zh', type: 'text' });
        var box = h('div', { class: 'q' }, [h('p', { class: 'zh' }, [(k + 1) + '. ' + it[0]]), inp, h('span', { class: 'key-show' })]);
        card.appendChild(box); return [box, inp, it[1]];
      });
      return function () { var ok = 0; rows.forEach(function (r) { var g = String(r[2]).split('|').some(function (a) { return han(a) === han(r[1].value); }); mark(r[0], g); if (g) ok++; r[0].querySelector('.key-show').textContent = g ? '' : ' → ' + r[2].replace(/\|/g, ' / '); }); return [ok, rows.length]; };
    },
    match: function (ex, card) {
      var rights = shuffle(ex.items.map(function (x) { return x[1]; }));
      var rows = ex.items.map(function (it) {
        var s = h('select', { class: 'zh' }, [h('option', { value: '' }, ['—'])].concat(rights.map(function (r) { return h('option', { value: r }, [r]); })));
        var box = h('div', { class: 'q row' }, [h('span', { class: 'zh' }, [it[0] + ' → ']), s]); card.appendChild(box); return [box, s, it[1]];
      });
      return function () { var ok = 0; rows.forEach(function (r) { var g = r[1].value === r[2]; mark(r[0], g); if (g) ok++; }); return [ok, rows.length]; };
    },
    order: function (ex, card) {
      var rows = ex.items.map(function (segs, k) { var box = h('div', { class: 'q' }, [h('p', null, [(k + 1) + '.'])]); var o = orderWidget(segs, box); card.appendChild(box); return [box, o]; });
      return function () { var ok = 0; rows.forEach(function (r) { var g = r[1](); mark(r[0], g); if (g) ok++; }); return [ok, rows.length]; };
    },
    open: function (ex, card, t) {
      ex.items.forEach(function (it, k) {
        var ta = h('textarea', { class: 'zh', rows: 3, placeholder: 'Trả lời bằng tiếng Trung…' });
        var key = 'open:' + t.id + ':' + k + ':' + it[0].slice(0, 8); ta.value = store.get(key, ''); ta.addEventListener('input', function () { store.set(key, ta.value); });
        var ref = h('p', { class: 'zh ref', hidden: true }, [(it[2] ? 'Câu nghe: ' + it[2] + '\n' : '') + 'Gợi ý: ' + (it[1] || '(tự đối chiếu với đoạn văn)')]);
        var b2 = h('button', { class: 'btn ghost sm' }, ['🤖 Chép lệnh nhờ AI chấm']);
        b2.addEventListener('click', function () { copy(aiPrompt('Trả lời câu hỏi đọc hiểu: ' + it[0], ta.value, t, it[1]), b2); });
        card.appendChild(h('div', { class: 'q' }, [h('p', { class: 'zh' }, [(ex.items.length > 1 ? k + 1 + '. ' : '') + it[0]]), it[2] ? h('button', { class: 'btn ghost sm', on: { click: function () { speak(spoken(it[2])); } } }, ['🔊 Nghe']) : null, ta,
          h('div', { class: 'bar' }, [h('button', { class: 'btn ghost sm', on: { click: function () { ref.hidden = !ref.hidden; } } }, ['Xem gợi ý']), b2]), ref]));
      });
      return null;
    }
  };
  /* chạm các mảnh theo đúng thứ tự; trả về hàm kiểm tra */
  function orderWidget(segs, box, joiner) {
    var pool = h('div', { class: 'pool zh' }), line = h('div', { class: 'line zh' }), picked = [];
    function draw() {
      pool.innerHTML = ''; line.innerHTML = '';
      order.forEach(function (i) { if (picked.indexOf(i) < 0) pool.appendChild(h('button', { class: 'chip', on: { click: function () { picked.push(i); draw(); } } }, [segs[i]])); });
      picked.forEach(function (i, k) { line.appendChild(h('button', { class: 'chip on', on: { click: function () { picked.splice(k, 1); draw(); } } }, [segs[i]])); });
    }
    var order = shuffle(segs.map(function (_, i) { return i; }));
    if (segs.length > 1 && order.every(function (v, i) { return v === i; })) order.reverse();
    box.appendChild(line); box.appendChild(pool); draw();
    return function () { var g = picked.length === segs.length && picked.every(function (v, i) { return segs[v] === segs[i]; }); if (!g) { var k = h('p', { class: 'zh ref' }, ['Đáp án: ' + segs.join(joiner || '')]); box.appendChild(k); } return g; };
  }

  /* ---------- từ vựng ---------- */
  function tabWords(sub, l, t, body) {
    var list = (t.notes || []).map(function (n) { return { w: n[0], py: n[1], vi: n[2], t: t }; });
    if (!list.length) { body.appendChild(h('p', { class: 'card' }, ['Văn bản này chưa có từ chú thích.'])); return; }
    flashcards(sub, list, body);
  }
  function review(sub, ln) {
    crumb.innerHTML = ' › <a href="#/s/' + sub.id + '">' + esc(sub.name) + '</a> › Từ vựng' + (ln ? ' bài ' + ln : '');
    app.innerHTML = '';
    var list = allWords(sub, ln ? function (l) { return String(l.n) === ln; } : null);
    var due = ln ? list : dueWords(sub, list);
    app.appendChild(h('h1', null, [ln ? 'Từ vựng bài ' + ln : 'Ôn từ hôm nay']));
    if (!due.length) { app.appendChild(h('p', { class: 'card' }, ['Hôm nay không còn từ nào cần ôn. 🎉'])); return; }
    var body = h('div'); app.appendChild(body); flashcards(sub, shuffle(due).slice(0, 40), body);
  }
  function flashcards(sub, list, body) {
    var mode = store.get('fcmode', 'zh'), i = 0, wrong = [];
    var sw = h('div', { class: 'bar' }, [['zh', 'Hán → nghĩa'], ['vi', 'Nghĩa → Hán'], ['quiz', 'Trắc nghiệm'], ['ctx', 'Điền vào câu gốc']].map(function (m) {
      return h('button', { class: 'btn ghost sm' + (mode === m[0] ? ' on' : ''), on: { click: function () { store.set('fcmode', m[0]); mode = m[0]; i = 0; sw.querySelectorAll('button').forEach(function (b) { b.classList.remove('on'); }); this.classList.add('on'); show(); } } }, [m[1]]);
    }));
    var stage = h('div', { class: 'card fc' });
    body.appendChild(sw); body.appendChild(stage);
    function ctxSentence(x) { var s = sentences(x.t).filter(function (z) { return z.indexOf(x.w) >= 0; })[0]; return s ? s.replace(x.w, '＿＿') : null; }
    function next(ok) { srsGrade(sub.id, list[i].w, ok); if (!ok) wrong.push(list[i]); i++; show(); }
    function show() {
      stage.innerHTML = '';
      if (i >= list.length) {
        stage.appendChild(h('p', null, ['Xong ' + list.length + ' từ, sai ' + wrong.length + '.']));
        if (wrong.length) stage.appendChild(h('button', { class: 'btn', on: { click: function () { list = wrong; wrong = []; i = 0; show(); } } }, ['Ôn lại các từ sai']));
        return;
      }
      var x = list[i];
      stage.appendChild(h('p', { class: 'muted' }, [(i + 1) + '/' + list.length]));
      if (mode === 'quiz' || mode === 'ctx') {
        var pool = shuffle(list.concat(allWords(sub)).filter(function (y) { return y.w !== x.w; })).slice(0, 3).concat([x]);
        var q = mode === 'ctx' ? ctxSentence(x) : null;
        stage.appendChild(h('p', { class: 'zh big' }, [q || x.vi]));
        if (q) stage.appendChild(h('p', { class: 'muted' }, [x.vi]));
        shuffle(pool).forEach(function (y) {
          stage.appendChild(h('button', { class: 'btn ghost block zh', on: { click: function () { var ok = y.w === x.w; this.classList.add(ok ? 'right' : 'wrong'); speak(x.w); setTimeout(function () { next(ok); }, ok ? 500 : 1300); if (!ok) stage.querySelectorAll('.block').forEach(function (b) { if (b.textContent === x.w) b.classList.add('right'); }); } } }, [y.w]));
        });
        return;
      }
      var front = mode === 'zh' ? h('p', { class: 'zh huge' }, [x.w]) : h('p', { class: 'big' }, [x.vi]);
      var back = h('div', { hidden: true }, [h('p', { class: 'zh huge' }, [x.w]), h('p', null, [x.py]), h('p', null, [x.vi]), (function () { var c = ctxSentence(x); return c ? h('p', { class: 'zh muted' }, [c.replace('＿＿', x.w)]) : null; })()]);
      stage.appendChild(front); stage.appendChild(back);
      var acts = h('div', { class: 'bar' }, [h('button', { class: 'btn', on: { click: function () { back.hidden = false; front.hidden = mode === 'vi' ? false : true; speak(x.w); acts.hidden = true; grade.hidden = false; } } }, ['Lật thẻ'])]);
      var grade = h('div', { class: 'bar', hidden: true }, [h('button', { class: 'btn ghost wrongb', on: { click: function () { next(false); } } }, ['Chưa nhớ']), h('button', { class: 'btn', on: { click: function () { next(true); } } }, ['Nhớ rồi'])]);
      stage.appendChild(acts); stage.appendChild(grade);
    }
    show();
  }

  /* ---------- nghe: chính tả từng câu ---------- */
  function tabListen(sub, l, t, body) {
    var ss = sentences(t), i = 0;
    body.appendChild(h('p', { class: 'tip' }, ['Nghe từng câu (không nhìn chữ), gõ lại bằng bàn phím tiếng Trung rồi kiểm tra. Chữ bạn bỏ sót hoặc viết sai sẽ được tô đỏ.']));
    body.appendChild(h('div', { class: 'bar' }, ['Tốc độ đọc ', rateCtl()]));
    var stage = h('div', { class: 'card' }); body.appendChild(stage);
    var total = 0, got = 0;
    function show() {
      stage.innerHTML = '';
      if (i >= ss.length) { stage.appendChild(h('p', null, ['Xong! Độ chính xác: ' + (total ? Math.round(got / total * 100) : 0) + '%'])); return; }
      var s = ss[i], ta = h('textarea', { class: 'zh', rows: 2, placeholder: 'Gõ câu vừa nghe…' }), res = h('p', { class: 'zh reading small' });
      stage.appendChild(h('p', { class: 'muted' }, ['Câu ' + (i + 1) + '/' + ss.length]));
      stage.appendChild(h('div', { class: 'bar' }, [h('button', { class: 'btn', on: { click: function () { speak(s); } } }, ['🔊 Nghe']), h('button', { class: 'btn ghost', on: { click: function () { speak(s, Math.min(0.6, store.get('rate', 0.9))); } } }, ['🐢 Chậm'])]));
      stage.appendChild(ta); stage.appendChild(res);
      var chk = h('button', { class: 'btn', on: { click: function () {
        var ref = han(s), sc = lcs(ref, han(ta.value)); total += ref.length; got += sc;
        res.innerHTML = Math.round(sc / ref.length * 100) + '% · ' + diffHtml(s, ta.value); chk.hidden = true; nx.hidden = false;
      } } }, ['Kiểm tra']);
      var nx = h('button', { class: 'btn', hidden: true, on: { click: function () { i++; show(); } } }, ['Câu tiếp ›']);
      stage.appendChild(h('div', { class: 'bar' }, [chk, nx, h('button', { class: 'btn ghost', on: { click: function () { i++; show(); } } }, ['Bỏ qua'])]));
      speak(s);
    }
    show();
  }

  /* ---------- nói: đọc to từng câu, máy nhận giọng và so với câu gốc ---------- */
  function tabSpeak(sub, l, t, body) {
    var ss = sentences(t);
    body.appendChild(h('p', { class: 'tip' }, ['Nghe mẫu rồi bấm 🎙 đọc lại (Chrome/Edge). App so chữ máy nghe được với câu gốc. Phần cuối có bài nói tự do theo nội dung bài.']));
    ss.forEach(function (s, k) {
      var res = h('p', { class: 'zh small' }), best = store.get('say:' + t.id + ':' + k, null);
      var row = h('div', { class: 'card say' }, [h('p', { class: 'zh' }, [s]), h('div', { class: 'bar' }, [
        h('button', { class: 'btn ghost sm', on: { click: function () { speak(s); } } }, ['🔊']),
        h('button', { class: 'btn sm', on: { click: function () {
          var b = this; b.textContent = '… đang nghe'; res.textContent = '';
          listen(function (txt) { b.textContent = '🎙 Đọc'; var sc = Math.round(lcs(han(s), han(txt)) / han(s).length * 100); res.innerHTML = sc + '% · máy nghe: ' + esc(txt) + '<br>' + diffHtml(s, txt); store.set('say:' + t.id + ':' + k, sc); mark(row, sc >= 85); },
            function (msg) { b.textContent = '🎙 Đọc'; res.textContent = msg; });
        } } }, ['🎙 Đọc']), best != null ? h('span', { class: 'muted' }, ['lần trước ' + best + '%']) : null]), res]);
      body.appendChild(row);
    });
    var topics = (t.adv && t.adv.s) || [['Tóm tắt miệng', 'Dùng 4–5 câu nói lại nội dung chính của 《' + t.title + '》.'], ['Nêu quan điểm', 'Bạn đồng ý với quan điểm của tác giả không? Nói khoảng 1 phút, dùng ít nhất 3 từ trong bài.']];
    topics.forEach(function (tp) {
      var res = h('p', { class: 'zh small' }), b2 = h('button', { class: 'btn ghost sm' }, ['🤖 Chép lệnh nhờ AI sửa']), said = '';
      b2.addEventListener('click', function () { copy(aiPrompt('Bài nói (đã chuyển thành chữ): ' + tp[1], said, t), b2); });
      body.appendChild(h('div', { class: 'card' }, [h('h3', null, ['Nói tự do: ' + tp[0]]), h('p', null, [tp[1]]), h('div', { class: 'bar' }, [h('button', { class: 'btn sm', on: { click: function () {
        var b = this; b.textContent = '… đang nghe';
        listen(function (txt) { b.textContent = '🎙 Nói tiếp'; said += txt + '。'; res.textContent = said; }, function (m) { b.textContent = '🎙 Nói'; res.textContent = m; });
      } } }, ['🎙 Nói']), b2]), res]));
    });
  }

  /* ---------- câu & đoạn: ghép vế câu, xếp đoạn, điền từ ---------- */
  function tabSentence(sub, l, t, body) {
    var ss = sentences(t).filter(function (s) { return s.split(/[，、：；]/).length >= 3; });
    var c1 = h('section', { class: 'card' }, [h('h3', null, ['1. Ghép vế câu']), h('p', { class: 'muted' }, ['Chạm các vế theo đúng thứ tự để khôi phục câu trong bài. Chú ý từ nối (因为…所以, 虽然…但是, 不仅…而且…).'])]);
    var checks = [];
    shuffle(ss).slice(0, 5).forEach(function (s) {
      var segs = s.match(/[^，、：；]+[，、：；]?/g); var box = h('div', { class: 'q' }); c1.appendChild(box); checks.push([box, orderWidget(segs, box)]);
    });
    c1.appendChild(h('button', { class: 'btn', on: { click: function () { checks.forEach(function (c) { mark(c[0], c[1]()); }); } } }, ['Kiểm tra']));
    body.appendChild(c1);
    if (t.p.length >= 3 && t.p.length <= 9) {
      var c2 = h('section', { class: 'card' }, [h('h3', null, ['2. Sắp xếp đoạn văn']), h('p', { class: 'muted' }, ['Mỗi mảnh là câu mở đầu của một đoạn. Xếp lại cho đúng mạch bài.'])]);
      var heads = t.p.map(function (p) { var s = plain(p).match(/^[^。！？]+[。！？]?/); return (s ? s[0] : plain(p)).slice(0, 60); });
      var box = h('div', { class: 'q stack' }); c2.appendChild(box); var o = orderWidget(heads, box, ' / ');
      c2.appendChild(h('button', { class: 'btn', on: { click: function () { mark(box, o()); } } }, ['Kiểm tra']));
      body.appendChild(c2);
    }
    var ws = (t.notes || []).concat((t.adv && t.adv.v) || []).filter(function (n) { return plain(t.p.join('')).indexOf(n[0]) >= 0; });
    if (ws.length >= 3) {
      var c3 = h('section', { class: 'card' }, [h('h3', null, ['3. Điền từ vào câu gốc']), h('p', { class: 'muted' }, ['Từ cho sẵn: ']), h('p', { class: 'zh chips' }, shuffle(ws).map(function (n) { return h('span', { class: 'chip' }, [n[0]]); }))]);
      var rows = [];
      ws.forEach(function (n) {
        var s = sentences(t).filter(function (z) { return z.indexOf(n[0]) >= 0; })[0]; if (!s) return;
        var inp = h('input', { class: 'zh short' }); var parts = s.split(n[0]);
        var row = h('p', { class: 'zh q' }, [parts[0], inp, parts.slice(1).join(n[0])]); c3.appendChild(row); rows.push([row, inp, n[0]]);
      });
      c3.appendChild(h('button', { class: 'btn', on: { click: function () { rows.forEach(function (r) { var g = han(r[1].value) === r[2]; mark(r[0], g); if (!g) r[1].placeholder = r[2]; }); } } }, ['Kiểm tra']));
      body.appendChild(c3);
    }
  }

  /* ---------- nâng cao: cấu trúc, phân tích câu ---------- */
  function tabAdvanced(sub, l, t, body) {
    var a = t.adv || {};
    if (a.g && a.g.length) {
      var c = h('section', { class: 'card' }, [h('h3', null, ['Cấu trúc & từ nối quan trọng'])]);
      a.g.forEach(function (g) {
        var inp = h('textarea', { class: 'zh', rows: 2, placeholder: 'Đặt 1 câu của bạn với cấu trúc này…' }), key = 'mk:' + t.id + ':' + g[0];
        inp.value = store.get(key, ''); inp.addEventListener('input', function () { store.set(key, inp.value); });
        var b = h('button', { class: 'btn ghost sm' }, ['🤖 Chép lệnh nhờ AI sửa câu']); b.addEventListener('click', function () { copy(aiPrompt('Đặt câu với cấu trúc 「' + g[0] + '」 (' + g[1] + ')', inp.value, t), b); });
        c.appendChild(h('div', { class: 'q' }, [h('p', { class: 'zh' }, [h('b', null, [g[0]])]), h('p', null, [g[1]]), g[2] ? h('p', { class: 'zh muted' }, ['例：' + g[2]]) : null, inp, b]));
      });
      body.appendChild(c);
    }
    if (a.an && a.an.length) {
      var c2 = h('section', { class: 'card' }, [h('h3', null, ['Phân tích câu dài']), h('p', { class: 'muted' }, ['Tự tìm chủ ngữ, vị ngữ, tân ngữ và các thành phần phụ (定语, 状语, 补语) trước, rồi mới mở đáp án.'])]);
      a.an.forEach(function (x) {
        var ans = h('div', { hidden: true }, [h('p', { class: 'zh an' , html: esc(x[1]).replace(/【(.+?)】/g, '<b>【$1】</b>') }), x[2] ? h('p', null, [x[2]]) : null]);
        c2.appendChild(h('div', { class: 'q' }, [h('p', { class: 'zh' }, [x[0]]), h('button', { class: 'btn ghost sm', on: { click: function () { ans.hidden = !ans.hidden; } } }, ['Xem phân tích']), ans]));
      });
      body.appendChild(c2);
    }
    if (a.v && a.v.length) {
      var c3 = h('section', { class: 'card' }, [h('h3', null, ['Từ vựng mở rộng (ngoài chú thích sách)'])]), dl = h('dl', { class: 'notes' });
      a.v.forEach(function (n) { dl.appendChild(h('dt', { class: 'zh' }, [n[0]])); dl.appendChild(h('dd', null, [n[1] + ' · ' + n[2]])); });
      c3.appendChild(dl); body.appendChild(c3);
    }
    if (!a.g && !a.an && !a.v) body.appendChild(h('p', { class: 'card' }, ['Phần nâng cao cho văn bản này đang được bổ sung.']));
  }

  /* ---------- viết: đề, đếm chữ, tự lưu, chép lệnh nhờ AI chấm ---------- */
  function tabWrite(sub, l, t, body) {
    var tasks = ((t.adv && t.adv.w) || []).concat([
      ['Tóm tắt', 'Tóm tắt 《' + t.title + '》 trong khoảng 150 chữ, giữ đủ các ý chính, dùng văn viết (书面语).'],
      ['Sửa đoạn văn', 'Dán một đoạn bạn đã viết (bài tập trên lớp hoặc phần tóm tắt ở trên) để AI sửa lỗi và nâng cấp cách diễn đạt.'],
      ['Mô phỏng giao tiếp', 'Viết một đoạn hội thoại 8–10 lượt lời giữa hai người bàn về chủ đề của bài, dùng ít nhất 5 từ trong phần chú thích.']
    ]);
    body.appendChild(h('p', { class: 'tip' }, ['Bài viết tự lưu trong máy. Viết xong bấm "Chép lệnh nhờ AI chấm" rồi dán vào Claude: AI chỉ dùng lúc này nên rất tiết kiệm.']));
    tasks.forEach(function (tk) {
      var key = 'w:' + sub.id + ':' + t.id + ':' + tk[0], ta = h('textarea', { class: 'zh', rows: 7 }), cnt = h('span', { class: 'muted' });
      ta.value = store.get(key, ''); function upd() { cnt.textContent = ta.value.replace(/[^\u4e00-\u9fff]/g, '').length + ' chữ'; }
      ta.addEventListener('input', function () { store.set(key, ta.value); upd(); }); upd();
      var b = h('button', { class: 'btn' }, ['🤖 Chép lệnh nhờ AI chấm']); b.addEventListener('click', function () { copy(aiPrompt(tk[0] + ': ' + tk[1], ta.value, t), b); });
      body.appendChild(h('section', { class: 'card' }, [h('h3', null, [tk[0]]), h('p', null, [tk[1]]), ta, h('div', { class: 'bar' }, [b, cnt])]));
    });
  }
  function aiPrompt(task, answer, t, ref) {
    return 'Bạn là giáo viên tiếng Trung, chấm bài cho sinh viên ngành ngôn ngữ Trung trình độ cao cấp. Trả lời bằng tiếng Việt, ngắn gọn.\n' +
      '1) Chấm điểm /10. 2) Liệt kê lỗi (từ, ngữ pháp, diễn đạt, logic), mỗi lỗi: câu sai → câu sửa → lý do. 3) Viết lại bản hoàn chỉnh ở mức cao cấp, ưu tiên văn viết (书面语). 4) Gợi ý 3 từ/cấu trúc nâng cao nên dùng.\n\n' +
      'Bài đọc liên quan: 《' + t.title + '》\nĐề: ' + task + '\n' + (ref ? 'Gợi ý đáp án: ' + ref + '\n' : '') + '\nBài làm:\n' + (answer || '(chưa viết)');
  }

  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(function () {});
  route();
})();
