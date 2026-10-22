/* Lớn lên cùng tiếng Trung · bản 2
   Mỗi bài khóa là một căn phòng 3D. Sau khi nói chuyện xong trong phòng bài khóa,
   bé đi qua 4 khoa Nghe · Nói · Đọc · Viết để "hòa nhập" (qua bài, lên cấp bậc). */
(function () {
  'use strict';
  var C = window.CONTENT;
  var $app = document.getElementById('app');
  var KEY = 'lon-len-trung-v2', OLD = 'lop1-trung-v1';

  Object.assign(C.characters, {
    t_nghe: { name: 'Cô Thính · khoa Nghe', zh: '听力老师', face: '🎧' },
    t_noi: { name: 'Thầy Khẩu · khoa Nói', zh: '口语老师', face: '🎤' },
    t_doc: { name: 'Cô Duyệt · khoa Đọc', zh: '阅读老师', face: '📖' },
    t_viet: { name: 'Thầy Thư · khoa Viết', zh: '书法老师', face: '🖌️' }
  });
  var KHOA = [
    { id: 'nghe', zh: '听', name: 'Khoa Nghe', sys: '听力系', room: 'k_nghe', t: 't_nghe',
      hi: ['欢迎来到听力系！先听，再说。', 'Huānyíng lái dào tīnglì xì! Xiān tīng, zài shuō.', 'Chào mừng đến khoa Nghe! Nghe trước rồi mới nói.'],
      how: 'Nghe từ, nghe thanh điệu và nghe hiểu câu trong bài khóa.' },
    { id: 'noi', zh: '说', name: 'Khoa Nói', sys: '口语系', room: 'k_noi', t: 't_noi',
      hi: ['欢迎来到口语系！大声说汉语吧！', 'Huānyíng lái dào kǒuyǔ xì! Dàshēng shuō Hànyǔ ba!', 'Chào mừng đến khoa Nói! Nói to tiếng Trung nào!'],
      how: 'Bấm 🎤 rồi nói theo câu mẫu, nhìn tranh trả lời và kể lại (Khán đồ thuyết thoại).' },
    { id: 'doc', zh: '读', name: 'Khoa Đọc', sys: '阅读系', room: 'k_doc', t: 't_doc',
      hi: ['欢迎来到阅读系！我们一起读课文。', 'Huānyíng lái dào yuèdú xì! Wǒmen yìqǐ dú kèwén.', 'Chào mừng đến khoa Đọc! Cùng đọc bài khóa nào.'],
      how: 'Đọc từ mới, đọc cả bài khóa, ghép nghĩa, ngữ pháp, xếp câu và thử thách.' },
    { id: 'viet', zh: '写', name: 'Khoa Viết', sys: '书法系', room: 'k_viet', t: 't_viet',
      hi: ['欢迎来到书法系！一笔一画写汉字。', 'Huānyíng lái dào shūfǎ xì! Yì bǐ yí huà xiě Hànzì.', 'Chào mừng đến khoa Viết! Viết chữ Hán từng nét một.'],
      how: 'Viết chữ Hán đúng thứ tự nét trên ô 田字格 và chọn chữ theo pinyin.' }
  ];
  var KBY = {}; KHOA.forEach(function (k) { KBY[k.id] = k; });
  var RANKS = [[0, 'Khách'], [1, 'Tân sinh'], [6, 'Thành viên'], [15, 'Thành viên chính thức'], [30, 'Ngôi sao khoa']];
  var ROOMVI = { bedroom: 'Phòng ngủ', kitchen: 'Bếp', street: 'Ngoài phố', gate: 'Cổng trường', living: 'Phòng khách', classroom: 'Lớp học', canteen: 'Nhà ăn', market: 'Chợ', bank: 'Ngân hàng', office: 'Văn phòng', hall: 'Hội trường', library: 'Thư viện', airport: 'Sân bay', bikes: 'Bãi xe đạp' };

  /* ---------- lưu tiến độ ---------- */
  function load(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  var state = load(KEY);
  if (!state) {
    var old = load(OLD) || {};
    state = { profile: old.profile || null, stars: old.stars || {}, learned: old.learned || {}, khoa: {}, story: {}, cur: null, settings: old.settings || { py: true, vi: true, rate: 0.8 } };
  }
  ['stars', 'learned', 'khoa', 'story'].forEach(function (k) { state[k] = state[k] || {}; });

  /* ---------- tiện ích ---------- */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null) continue;
      if (k === 'class') el.className = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fill(s) {
    var p = state.profile || {};
    return String(s)
      .replace(/\{surPy\}/g, p.surPy || '').replace(/\{sur\}/g, p.sur || '').replace(/\{surVi\}/g, p.surVi || '')
      .replace(/\{fullPy\}/g, (p.surPy || '') + ' ' + (p.givenPy || '')).replace(/\{fullVi\}/g, (p.surVi || '') + ' ' + (p.givenVi || ''))
      .replace(/\{full\}/g, (p.sur || '') + (p.given || ''));
  }
  function toast(msg) {
    var t = h('div', { class: 'toast', role: 'status' }, [msg]);
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 2600);
    setTimeout(function () { t.remove(); }, 3100);
  }
  function starsTxt(n) { return '★★★'.slice(0, n) + '☆☆☆'.slice(n); }
  function plain(x) { return String(x).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/['\s]/g, ''); }

  /* ---------- giọng đọc ---------- */
  var zhVoice = null, warnedVoice = false;
  function pickVoice() {
    try {
      var vs = speechSynthesis.getVoices();
      zhVoice = vs.filter(function (v) { return /zh[-_]CN/i.test(v.lang); })[0] || vs.filter(function (v) { return /^zh/i.test(v.lang); })[0] || null;
    } catch (e) {}
  }
  try { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {}
  function say(text, onend) {
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(fill(text).replace(/[（(][^）)]*[）)]/g, ''));
      u.lang = 'zh-CN'; if (zhVoice) u.voice = zhVoice; u.rate = state.settings.rate;
      if (onend) { u.onend = onend; u.onerror = onend; }
      speechSynthesis.speak(u);
      if (!zhVoice && !warnedVoice) { warnedVoice = true; setTimeout(function () { if (!zhVoice) toast('Máy chưa có giọng đọc tiếng Trung. Hãy cài "Chinese (Simplified)" trong cài đặt giọng nói.'); }, 900); }
    } catch (e) { if (!warnedVoice) { warnedVoice = true; toast('Trình duyệt này không đọc được tiếng.'); } if (onend) onend(); }
  }
  function hz(zh, py, vi, opts) {
    opts = opts || {};
    return h('div', { class: 'hz-block' + (opts.big ? ' big' : '') }, [
      h('div', { class: 'zh', lang: 'zh-CN' }, [fill(zh)]),
      state.settings.py && py ? h('div', { class: 'py' }, [fill(py)]) : null,
      state.settings.vi && vi ? h('div', { class: 'vi' }, [fill(vi)]) : null
    ]);
  }

  /* ---------- micro: nhận giọng nói tiếng Trung ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var mic = { off: !SR, why: SR ? '' : 'Trình duyệt này chưa nhận giọng nói. Hãy mở game bằng Chrome hoặc Edge (có mạng).' };
  function hear(onPart, onDone, onFail) {
    if (mic.off) { onFail(mic.why, true); return null; }
    try { speechSynthesis.cancel(); } catch (e) {}
    var r, fin = false, alts = [];
    try {
      r = new SR(); r.lang = 'zh-CN'; r.interimResults = true; r.maxAlternatives = 4; r.continuous = false;
    } catch (e) { mic.off = true; mic.why = 'Không mở được micro ở trang này.'; onFail(mic.why, true); return null; }
    var timer = setTimeout(function () { try { r.stop(); } catch (e) {} }, 9000);
    r.onresult = function (e) {
      var res = e.results[e.results.length - 1];
      if (res.isFinal) { alts = []; for (var i = 0; i < res.length; i++) alts.push(res[i].transcript); }
      else onPart(res[0].transcript);
    };
    r.onerror = function (e) {
      if (fin) return;
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed' || e.error === 'audio-capture') {
        fin = true; mic.off = true;
        mic.why = e.error === 'audio-capture' ? 'Không tìm thấy micro trên máy.' : 'Micro chưa được cho phép ở trang này. Mở game trên trang web riêng (hoặc bấm cho phép micro) để nói.';
        onFail(mic.why, true);
      } else if (e.error === 'network') { fin = true; onFail('Nhận giọng nói cần có mạng. Em chạm chọn câu thay nhé.', false); }
      else if (e.error === 'aborted') { fin = true; }
    };
    r.onend = function () {
      clearTimeout(timer);
      if (fin) return; fin = true;
      if (alts.length) onDone(alts); else onFail('Chưa nghe rõ, em bấm 🎤 và nói lại nhé.', false);
    };
    try { r.start(); } catch (e) { fin = true; onFail('Micro đang bận, thử lại sau một chút.', false); }
    return r;
  }
  /* chấm điểm: so khớp chuỗi con chung dài nhất theo từng chữ */
  var SAME = { '她': '他', '它': '他', '妳': '你', '得': '的', '地': '的', '再': '在', '嗎': '吗', '們': '们', '麼': '么', '么': '么', '儿': '' };
  function norm(s) {
    var p = state.profile || {}, t = fill(s);
    [p.sur + p.given, p.given, p.sur].forEach(function (n) { if (n) t = t.split(n).join(''); });
    return t.replace(/[^一-鿿0-9a-zA-Z]/g, '').split('').map(function (c) { return SAME[c] != null ? SAME[c] : c; }).join('');
  }
  function score(heard, target) {
    var a = norm(heard), raw = fill(target), b = norm(target);
    var n = a.length, m = b.length, dp = [], i, j;
    for (i = 0; i <= n; i++) { dp.push(new Array(m + 1).fill(0)); }
    for (i = 1; i <= n; i++) for (j = 1; j <= m; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    var ok = new Array(m).fill(false); i = n; j = m;
    while (i > 0 && j > 0) { if (a[i - 1] === b[j - 1]) { ok[j - 1] = true; i--; j--; } else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--; }
    /* tô màu trên câu gốc (giữ dấu câu, tên riêng tính là đúng) */
    var html = [], k = 0, p = state.profile || {}, nameChars = (p.sur || '') + (p.given || '');
    raw.split('').forEach(function (c) {
      var isHz = /[一-鿿0-9a-zA-Z]/.test(c);
      if (!isHz) { html.push(c); return; }
      if (nameChars.indexOf(c) >= 0 && b.indexOf(c) < 0) { html.push('<span class="ok">' + c + '</span>'); return; }
      var good = ok[k]; k++;
      html.push('<span class="' + (good ? 'ok' : 'bad') + '">' + c + '</span>');
    });
    return { r: m ? dp[n][m] / m : 1, html: html.join(''), heard: heard };
  }
  /* nút micro dùng chung: targets là các câu có thể nói, judge quyết định đúng/sai */
  function micBox(targets, judge, opts) {
    opts = opts || {};
    var status = h('p', { class: 'mic-status', 'aria-live': 'polite' }, [mic.off ? mic.why : (opts.tip || 'Bấm 🎤 rồi nói to, rõ.')]);
    var result = h('div', { class: 'mic-result zh', lang: 'zh-CN' });
    var rec = null;
    var btn = h('button', { class: 'mic-btn' + (mic.off ? ' off' : ''), 'aria-label': 'Nói vào micro', onclick: function () {
      if (rec) { try { rec.stop(); } catch (e) {} return; }
      if (mic.off) { status.textContent = mic.why; if (opts.onNoMic) opts.onNoMic(); return; }
      btn.classList.add('on'); status.textContent = 'Đang nghe…'; result.innerHTML = '';
      rec = hear(function (part) { status.textContent = '… ' + part; }, function (alts) {
        btn.classList.remove('on'); rec = null;
        var best = null;
        alts.forEach(function (a) { targets.forEach(function (t, ti) { var s = score(a, t); s.i = ti; if (!best || s.r > best.r) best = s; }); });
        result.innerHTML = best.html;
        status.textContent = 'Máy nghe được: “' + alts[0] + '” · khớp ' + Math.round(best.r * 100) + '%';
        judge(best, alts);
      }, function (msg, hard) {
        btn.classList.remove('on'); rec = null; status.textContent = msg;
        if (hard) { btn.classList.add('off'); if (opts.onNoMic) opts.onNoMic(); }
      });
      if (!rec) btn.classList.remove('on');
    } }, [h('span', { 'aria-hidden': 'true' }, ['🎤'])]);
    var wrap = h('div', { class: 'mic-box' }, [btn, h('div', { class: 'mic-text' }, [status, result])]);
    wrap.status = status;
    return wrap;
  }

  /* ---------- tra cứu tiến độ ---------- */
  function allLessons() { var out = []; C.semesters.forEach(function (s) { s.lessons.forEach(function (l) { out.push({ s: s, l: l }); }); }); return out; }
  function findLesson(id) { var r = null; allLessons().forEach(function (x) { if (x.l.id === id) r = x; }); return r; }
  function kst(lid) { return state.khoa[lid] || (state.khoa[lid] = {}); }
  function passed(lid) { return (state.stars[lid] || 0) > 0; }
  function unlocked(sem) { return !sem.locked; } /* chơi tự do: mọi bài đều mở */
  function totalStars() { var n = 0; for (var lid in state.khoa) for (var k in state.khoa[lid]) n += state.khoa[lid][k] || 0; return n; }
  function khoaTotal(kid) { var n = 0; for (var lid in state.khoa) n += state.khoa[lid][kid] || 0; return n; }
  function rankOf(n) { var r = RANKS[0]; RANKS.forEach(function (x) { if (n >= x[0]) r = x; }); return r; }
  function nextRank(n) { for (var i = 0; i < RANKS.length; i++) if (RANKS[i][0] > n) return RANKS[i]; return null; }
  function currentSem() {
    var cur = C.semesters[0];
    C.semesters.forEach(function (s) { if (!s.locked && s.lessons.length && s.lessons.some(function (l) { return passed(l.id); })) cur = s; });
    return cur;
  }
  function curLesson() {
    var x = state.cur && findLesson(state.cur);
    if (x && unlocked(x.s, x.s.lessons.indexOf(x.l))) return x;
    var sem = C.semesters[0], pick = { s: sem, l: sem.lessons[0] };
    C.semesters.forEach(function (s) { s.lessons.forEach(function (l, i) { if (unlocked(s, i)) pick = { s: s, l: l }; }); });
    state.cur = pick.l.id; return pick;
  }

  /* ---------- tạo nhân vật ---------- */
  var SURS = [['阮', 'Ruǎn', 'Nguyễn'], ['陈', 'Chén', 'Trần'], ['黎', 'Lí', 'Lê'], ['范', 'Fàn', 'Phạm'], ['黄', 'Huáng', 'Hoàng'], ['邓', 'Dèng', 'Đặng']];
  var GIVENS = [['安', 'Ān', 'An'], ['明', 'Míng', 'Minh'], ['兰', 'Lán', 'Lan'], ['如意', 'Rúyì', 'Như Ý'], ['龙', 'Lóng', 'Long'], ['美', 'Měi', 'Mỹ']];
  function renderOnboard() {
    document.body.classList.remove('in-game');
    var pick = { sur: 0, given: 0 };
    var nick = h('input', { id: 'nick', type: 'text', maxlength: '16', placeholder: 'Ví dụ: Bin, Na, Su…', value: '' });
    function chipRow(list, keyName) {
      var row = h('div', { class: 'chips', role: 'radiogroup' });
      list.forEach(function (it, i) {
        var b = h('button', { class: 'chip' + (i === 0 ? ' on' : ''), role: 'radio', 'aria-checked': i === 0 ? 'true' : 'false', onclick: function () {
          pick[keyName] = i; [].forEach.call(row.children, function (c, j) { c.classList.toggle('on', j === i); c.setAttribute('aria-checked', j === i); }); preview();
        } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [it[0]]), h('small', null, [it[2]])]);
        row.appendChild(b);
      });
      return row;
    }
    var pv = h('div', { class: 'name-preview' });
    function preview() {
      var s = SURS[pick.sur], g = GIVENS[pick.given];
      pv.innerHTML = '';
      pv.appendChild(h('span', { class: 'zh', lang: 'zh-CN' }, [s[0] + g[0]]));
      pv.appendChild(h('span', { class: 'py' }, [s[1] + ' ' + g[1]]));
      pv.appendChild(h('button', { class: 'speak', 'aria-label': 'Nghe', onclick: function () { say(s[0] + g[0]); } }, ['🔊']));
    }
    preview();
    $app.innerHTML = '';
    $app.appendChild(h('main', { class: 'screen onboard' }, [
      h('div', { class: 'hero' }, [
        h('div', { class: 'hero-face', 'aria-hidden': 'true' }, ['🧒']),
        h('h1', null, ['Lớn lên cùng tiếng Trung']),
        h('p', null, ['Em là bạn nhỏ vừa vào lớp 1. Mỗi bài khóa là một căn phòng: em vào phòng, nói chuyện với mọi người bằng micro, rồi đi qua 4 khoa Nghe · Nói · Đọc · Viết để được công nhận. Học xong mỗi học kỳ, em lớn thêm một chặng.'])
      ]),
      h('section', { class: 'card form' }, [
        h('label', { for: 'nick' }, ['Tên ở nhà của em']), nick,
        h('div', { class: 'lbl' }, ['Họ tiếng Trung']), chipRow(SURS, 'sur'),
        h('div', { class: 'lbl' }, ['Tên tiếng Trung']), chipRow(GIVENS, 'given'),
        h('div', { class: 'lbl' }, ['Tên Trung Quốc của em']), pv,
        h('button', { class: 'btn primary', onclick: function () {
          var s = SURS[pick.sur], g = GIVENS[pick.given];
          state.profile = { nick: nick.value.trim() || 'Bé', sur: s[0], surPy: s[1], surVi: s[2], given: g[0], givenPy: g[1], givenVi: g[2] };
          save(); startGame();
        } }, ['Bắt đầu ngày đầu tiên'])
      ])
    ]));
  }

  /* ---------- khung game ---------- */
  var G = null; /* {world, hud, tabs, chat, log, dock, room} */
  var has3D = false;
  function startGame() {
    document.body.classList.add('in-game');
    $app.innerHTML = '';
    var world = h('div', { class: 'world' });
    var hud = h('header', { class: 'hud' });
    var tabs = h('nav', { class: 'room-tabs', 'aria-label': 'Các phòng' });
    var log = h('div', { class: 'chat-log', 'aria-live': 'polite' });
    var dock = h('div', { class: 'chat-dock' });
    var title = h('b', null, ['']);
    var chat = h('section', { class: 'chat-panel', 'aria-label': 'Hội thoại' }, [
      h('div', { class: 'chat-head' }, [title, h('button', { class: 'icon-btn sm', 'aria-label': 'Thu gọn hội thoại', onclick: function () { chat.classList.toggle('min'); } }, ['▾'])]),
      log, dock
    ]);
    $app.appendChild(world); $app.appendChild(hud); $app.appendChild(tabs); $app.appendChild(chat);
    G = { world: world, hud: hud, tabs: tabs, chat: chat, log: log, dock: dock, title: title, room: null };
    has3D = false;
    try {
      if (window.THREE && window.World && window.THREE.OrbitControls) {
        var t = document.createElement('canvas');
        if (t.getContext('webgl') || t.getContext('experimental-webgl')) { World.init(world, { onNpc: onNpc, onPlace: onPlace }); has3D = true; }
      }
    } catch (e) { has3D = false; world.innerHTML = ''; }
    if (!has3D) world.classList.add('flat');
    goTown(true);
  }
  function renderHud() {
    var sem = currentSem(), p = state.profile;
    G.hud.innerHTML = '';
    [h('span', { class: 'me-face', 'aria-hidden': 'true' }, [sem.face]),
      h('div', { class: 'who' }, [h('b', null, [p.nick + ' · ' + p.sur + p.given]), h('small', null, [sem.stage + ' · ' + sem.age + ' tuổi · ' + sem.label])]),
      h('span', { class: 'star-count', title: 'Tổng sao' }, ['★ ' + totalStars()]),
      h('button', { class: 'icon-btn', 'aria-label': 'Bản đồ bài học', title: 'Bài học', onclick: openMap }, ['🗺️']),
      h('button', { class: 'icon-btn', 'aria-label': 'Sách giáo trình', title: 'Sách', onclick: function () { openTextbook(); } }, ['📘']),
      h('button', { class: 'icon-btn', 'aria-label': 'Sổ từ', title: 'Sổ từ', onclick: openBook }, ['字']),
      h('button', { class: 'icon-btn', 'aria-label': 'Giải đáp từ vựng', title: 'Giải đáp', onclick: openHelp }, ['💡']),
      h('button', { class: 'icon-btn', 'aria-label': 'Cài đặt', title: 'Cài đặt', onclick: openSettings }, ['⚙'])
    ].forEach(function (x) { G.hud.appendChild(x); });
  }
  function renderTabs() {
    var x = curLesson(), l = x.l, ks = kst(l.id), storyDone = !!state.story[l.id];
    G.tabs.innerHTML = '';
    G.tabs.appendChild(h('button', { class: 'rtab town' + (G.room === 'town' ? ' on' : ''), onclick: function () { goTown(); } }, [h('b', null, ['🗺️']), h('small', null, ['Khu phố'])]));
    G.tabs.appendChild(h('button', { class: 'rtab park' + (G.room === 'park' ? ' on' : ''), onclick: goPark }, [h('b', null, ['🌳']), h('small', null, ['Công viên'])]));
    G.tabs.appendChild(h('button', { class: 'rtab lesson' + (G.room === 'lesson' ? ' on' : ''), onclick: function () { goLesson(); } }, [
      h('b', { lang: 'zh-CN' }, ['第' + l.no + '课']), h('small', null, [ROOMVI[l.room] || 'Bài khóa'])
    ]));
    KHOA.forEach(function (k) {
      var s = ks[k.id] || 0;
      G.tabs.appendChild(h('button', { class: 'rtab k-' + k.id + (G.room === k.id ? ' on' : ''), onclick: function () { goKhoa(k); } }, [
        h('b', { lang: 'zh-CN' }, [k.zh]), h('small', null, [k.name.replace('Khoa ', '') + ' ' + (s ? starsTxt(s) : '○')])
      ]));
    });
  }
  function refresh() { renderHud(); renderTabs(); }

  /* thế giới dự phòng khi máy không chạy được 3D */
  function flatLoad(room, cast, quest, label, places) {
    G.world.innerHTML = '';
    var row = h('div', { class: 'flat-cast' });
    (places || []).forEach(function (p) {
      row.appendChild(h('button', { class: 'flat-npc', onclick: function () { onPlace(p.key); } }, [h('span', { class: 'face', 'aria-hidden': 'true' }, [p.icon]), h('b', { lang: 'zh-CN' }, [p.label]), h('small', null, [p.sub])]));
    });
    cast.forEach(function (key) {
      var ch = C.characters[key] || {};
      row.appendChild(h('button', { class: 'flat-npc' + (key === quest ? ' quest' : ''), onclick: function () { onNpc(key); } }, [
        h('span', { class: 'face', 'aria-hidden': 'true' }, [ch.face || '🙂']), h('b', { lang: 'zh-CN' }, [ch.zh || '']), h('small', null, [ch.name || ''])
      ]));
    });
    G.world.appendChild(h('div', { class: 'flat-room room-' + room }, [h('p', { class: 'flat-title' }, [label]), row]));
  }
  function loadRoom(room, opt, label) {
    if (has3D) World.load(room, opt);
    else flatLoad(room, opt.cast || [], opt.quest, label, opt.places);
  }
  function setQuest(k) { if (has3D) World.setQuest(k); else [].forEach.call(G.world.querySelectorAll('.flat-npc'), function (b, i) { b.classList.toggle('quest', (G.cast || [])[i] === k); }); }
  function talk(k, on) { if (has3D) World.talk(k, on); }
  function cheer() { if (has3D) World.cheer(); }

  /* ---------- hội thoại (khung chat góc trái) ---------- */
  function clearChat(title) { G.log.innerHTML = ''; G.dock.innerHTML = ''; G.title.textContent = title; G.chat.classList.remove('min'); }
  function bubble(side, who, zh, py, vi, silent) {
    var ch = C.characters[who] || {};
    var face = side === 'me' ? currentSem().face : (ch.face || '🙂');
    var b = h('div', { class: 'msg ' + side }, [
      h('span', { class: 'face', 'aria-hidden': 'true' }, [face]),
      h('div', { class: 'bub' }, [
        h('small', { class: 'name' }, [side === 'me' ? state.profile.nick : (ch.name ? ch.name + (ch.zh ? ' · ' + ch.zh : '') : '')]),
        zh ? hz(zh, py, vi) : h('p', { class: 'narr' }, [fill(vi)]),
        zh ? h('button', { class: 'speak', 'aria-label': 'Nghe lại', onclick: function () { say(zh); } }, ['🔊']) : null
      ])
    ]);
    G.log.appendChild(b);
    G.log.scrollTop = G.log.scrollHeight;
    if (zh && !silent) { if (side !== 'me') talk(who, true); say(zh); }
    return b;
  }
  function dockBtns(list) { G.dock.innerHTML = ''; var r = h('div', { class: 'row wrap' }); list.forEach(function (b) { if (b) r.appendChild(b); }); G.dock.appendChild(r); }
  function btn(label, fn, cls) { return h('button', { class: 'btn ' + (cls || ''), onclick: fn }, [label]); }

  /* ---------- phòng bài khóa ---------- */
  var story = null;
  function goLesson(lid) {
    closeSheet();
    if (lid) state.cur = lid;
    var x = curLesson(), l = x.l; save();
    G.room = 'lesson'; G.cast = l.cast || [];
    var first = null; l.story.forEach(function (s) { if (!first && s.c && s.c !== 'panda' && G.cast.indexOf(s.c) >= 0) first = s.c; });
    var done = !!state.story[l.id];
    loadRoom(l.room || 'classroom', { cast: G.cast, quest: done ? null : (first || G.cast[0]), time: l.time, board: l.zh, meName: state.profile.sur + state.profile.given }, l.vi);
    refresh();
    story = null;
    clearChat('第' + l.no + '课 · ' + l.zh);
    bubble('npc panda', 'panda', null, null, l.day + ' · ' + l.time + ' · ' + l.vi + '.');
    if (!done) {
      bubble('npc panda', 'panda', null, null, 'Bấm vào người có dấu ❗ để bắt đầu nói chuyện. Kéo để xoay phòng, cuộn hoặc chụm để phóng to.');
      dockBtns([btn('Bắt đầu nói chuyện ▸', function () { onNpc(first || G.cast[0]); }, 'primary'), btn('📘 Bài khóa gốc trong sách', function () { openTextbook(l); }, 'ghost'), btn('🗺️ Ra khu phố', function () { goTown(); }, 'ghost')]);
    } else afterStory(l, true);
  }
  function onNpc(key) {
    if (G.room === 'lesson') {
      var l = curLesson().l;
      if (!story && !state.story[l.id]) return runStory(l);
      if (story) return;
      var lines = l.story.filter(function (s) { return s.c === key && s.zh; });
      var ln = lines.length ? lines[Math.floor(Math.random() * lines.length)] : null;
      if (ln) bubble('npc', key, ln.zh, ln.py, ln.vi);
      else bubble('npc', key, '你好！', 'Nǐ hǎo!', 'Chào em!');
      return;
    }
    if (G.room === 'park') return parkTalk(key);
    var k = KBY[G.room]; if (k && key === k.t) openKhoa(k);
  }
  function runStory(l) {
    story = { k: 0 }; setQuest(null);
    G.log.innerHTML = '';
    function show() {
      G.dock.innerHTML = '';
      if (story.k >= l.story.length) return finishStory(l);
      var line = l.story[story.k];
      if (line.me) return myTurn(line);
      if (line.c === 'panda') bubble('npc panda', 'panda', null, null, line.vi);
      else bubble('npc', line.c, line.zh, line.py, line.vi);
      story.k++;
      var nx = l.story[story.k];
      if (nx && nx.me) show();
      else dockBtns([btn(story.k >= l.story.length ? 'Xong ✓' : 'Tiếp ▸', show, 'primary')]);
    }
    function myTurn(line) {
      var opts = line.opts, correct = fill(opts[0][0]);
      G.dock.appendChild(h('p', { class: 'prompt' }, ['Em nói: ' + line.me]));
      function accept(fromMic) {
        G.dock.innerHTML = '';
        bubble('me', 'me', opts[0][0], opts[0][1], opts[0][2], fromMic);
        talk('me', true);
        if (fromMic) { cheer(); toast('Giỏi lắm! Máy nghe hiểu câu em nói.'); }
        story.k++; setTimeout(show, fromMic ? 500 : 0);
      }
      var choices = h('div', { class: 'opts' });
      function drawChoices() {
        choices.innerHTML = '';
        shuffle(opts.map(function (o, i) { return { o: o, ok: i === 0 }; })).forEach(function (x) {
          var b = h('button', { class: 'opt', onclick: function () {
            if (x.ok) accept(false);
            else { b.disabled = true; b.classList.add('shake'); say(x.o[0]); toast('Chưa hợp: “' + fill(x.o[2]) + '”. Thử câu khác nhé.'); }
          } }, [hz(x.o[0], x.o[1], null)]);
          choices.appendChild(b);
        });
      }
      var mb = micBox(opts.map(function (o) { return o[0]; }), function (best) {
        if (best.i === 0 && best.r >= 0.6) accept(true);
        else if (best.r >= 0.6) mb.status.textContent = 'Câu em nói nghĩa là “' + fill(opts[best.i][2]) + '”, chưa hợp lúc này. Nói câu khác nhé.';
        else mb.status.textContent += ' · Nói lại chậm và rõ hơn, hoặc chạm chọn câu bên dưới.';
      }, { tip: 'Bấm 🎤 và nói câu tiếng Trung hợp với tình huống. Bí thì chạm “Gợi ý câu”.' });
      G.dock.appendChild(mb);
      var hintBtn = btn('Gợi ý câu', function () { hintBtn.remove(); drawChoices(); choices.hidden = false; }, 'ghost');
      choices.hidden = !mic.off;
      if (mic.off) { hintBtn = null; drawChoices(); }
      G.dock.appendChild(choices);
      if (hintBtn) G.dock.appendChild(hintBtn);
    }
    show();
  }
  function finishStory(l) {
    var first = !state.story[l.id];
    state.story[l.id] = 1; story = null; save();
    cheer(); refresh();
    if (first) toast('Xong bài khóa! Giờ đi qua 4 khoa để hòa nhập.');
    afterStory(l, false);
  }
  function afterStory(l, revisit) {
    var ks = kst(l.id);
    bubble('npc panda', 'panda', null, null, revisit ? 'Bài khóa này em đã nói xong. Bấm vào mọi người để nghe lại, hoặc sang các khoa.' :
      'Em đã nói chuyện xong! Giờ em tự chọn: xem bài khóa gốc trong sách, luyện ở 4 khoa Nghe · Nói · Đọc · Viết để lên cấp, hoặc ra khu phố tìm bài khác.');
    dockBtns(KHOA.map(function (k) { return btn(k.zh + ' ' + k.name + (ks[k.id] ? ' ' + starsTxt(ks[k.id]) : ''), function () { goKhoa(k); }, ks[k.id] ? '' : 'primary'); })
      .concat([btn('📘 Bài khóa gốc', function () { openTextbook(l); }, 'ghost'), btn('↻ Nói lại', function () { runStory(l); }, 'ghost'), btn('🗺️ Khu phố', function () { goTown(); }, 'ghost')]));
  }

  /* ---------- phòng khoa ---------- */
  function goKhoa(k) {
    closeSheet();
    var l = curLesson().l;
    G.room = k.id; G.cast = [k.t];
    loadRoom(k.room, { cast: [k.t], quest: k.t, time: '10:00', spots: [[0.6, -1.4]], meName: state.profile.sur + state.profile.given,
      extras: [{ look: 'student', x: -4.2, z: 1.6, r: 2.4 }, { look: 'mali', x: 4.4, z: 1.2, r: -2.4 }, { look: 'lee', x: -2.5, z: -0.4, r: Math.PI }] }, k.name + ' · ' + k.sys);
    refresh();
    clearChat(k.zh + ' · ' + k.name + ' · ' + k.sys);
    var tot = khoaTotal(k.id), rk = rankOf(tot), nx = nextRank(tot);
    bubble('npc', k.t, k.hi[0], k.hi[1], k.hi[2]);
    bubble('npc panda', 'panda', null, null, 'Cấp của em ở ' + k.name + ': ' + rk[1] + ' (★' + tot + (nx ? ', còn ' + (nx[0] - tot) + ' sao nữa lên ' + nx[1] : '') + '). ' + k.how);
    var s = kst(l.id)[k.id] || 0;
    dockBtns([btn((s ? 'Luyện lại' : 'Bắt đầu') + ' bài ' + l.no + ' ở ' + k.name + ' ▸', function () { openKhoa(k); }, 'primary'),
      btn('📘 Bài khóa gốc', function () { openTextbook(l); }, 'ghost'), btn('🗺️ Khu phố', function () { goTown(); }, 'ghost')]);
  }

  /* ---------- tấm luyện tập (sheet) ---------- */
  var sheetEl = null;
  function closeSheet() { if (sheetEl) { sheetEl.remove(); sheetEl = null; } try { speechSynthesis.cancel(); } catch (e) {} }
  function sheet(title, cls) {
    closeSheet();
    var body = h('div', { class: 'sheet-body' }), dock = h('div', { class: 'sheet-dock' }), sub = h('small', null, ['']);
    var el = h('div', { class: 'sheet ' + (cls || ''), role: 'dialog', 'aria-modal': 'true', 'aria-label': title }, [
      h('div', { class: 'sheet-box' }, [
        h('div', { class: 'sheet-top' }, [h('div', null, [h('b', null, [title]), sub]), h('button', { class: 'icon-btn', 'aria-label': 'Đóng', onclick: closeSheet }, ['✕'])]),
        body, dock
      ])
    ]);
    el.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });
    document.body.appendChild(el); sheetEl = el;
    return { el: el, body: body, dock: dock, sub: sub };
  }

  function openKhoa(k) {
    var l = curLesson().l;
    var tasks = TASKS[k.id](l).filter(Boolean);
    var sh = sheet(k.zh + ' ' + k.name + ' · Bài ' + l.no, 'k-' + k.id);
    var run = { i: 0, miss: 0 };
    function ctx() {
      return {
        body: sh.body, dock: sh.dock, l: l,
        miss: function (el) { run.miss++; if (el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); } },
        next: function () { run.i++; step(); }
      };
    }
    function step() {
      sh.body.innerHTML = ''; sh.dock.innerHTML = ''; sh.body.scrollTop = 0;
      if (run.i >= tasks.length) return finish();
      sh.sub.textContent = 'Phần ' + (run.i + 1) + '/' + tasks.length + ' · ' + tasks[run.i].name;
      var prog = h('div', { class: 'progress' });
      tasks.forEach(function (t, j) { prog.appendChild(h('span', { class: j < run.i ? 'd' : j === run.i ? 'c' : '' })); });
      sh.body.appendChild(prog);
      tasks[run.i].fn(ctx());
    }
    function finish() {
      var st = run.miss <= 1 ? 3 : run.miss <= 4 ? 2 : 1, ks = kst(l.id);
      var before = khoaTotal(k.id), wasPassed = passed(l.id);
      ks[k.id] = Math.max(ks[k.id] || 0, st);
      var after = khoaTotal(k.id), r0 = rankOf(before), r1 = rankOf(after);
      var all = KHOA.every(function (kk) { return ks[kk.id] > 0; });
      if (all) state.stars[l.id] = Math.max(state.stars[l.id] || 0, Math.min.apply(null, KHOA.map(function (kk) { return ks[kk.id]; })));
      l.vocab.forEach(function (v) { state.learned[v[0]] = 1; });
      save(); refresh(); cheer();
      sh.sub.textContent = 'Hoàn thành';
      sh.body.appendChild(h('div', { class: 'done' }, [
        h('div', { class: 'big-stars', 'aria-label': st + ' sao' }, [starsTxt(st)]),
        h('h2', null, ['Xong ' + k.name + ' bài ' + l.no + '!']),
        h('p', null, ['Số lần sai: ' + run.miss + '. Cấp của em ở ' + k.name + ': ' + r1[1] + ' (★' + after + ').']),
        r1 !== r0 ? h('p', { class: 'grow' }, ['🎉 Lên cấp: ' + r0[1] + ' → ' + r1[1] + '! ' + k.sys + ' đã công nhận em.']) : null,
        all && !wasPassed ? h('p', { class: 'grow' }, ['✅ Em đã hòa nhập đủ 4 khoa của bài ' + l.no + '!']) : null,
        !all ? h('p', { class: 'hint' }, ['Gợi ý (không bắt buộc): ' + KHOA.filter(function (kk) { return !ks[kk.id]; }).map(function (kk) { return kk.name; }).join(', ') + ' vẫn chờ em.']) : null,
        semesterGrow(l)
      ]));
      var nextL = nextLesson(l);
      var row = h('div', { class: 'row wrap' });
      KHOA.filter(function (kk) { return !ks[kk.id]; }).slice(0, 2).forEach(function (kk) { row.appendChild(btn('Sang ' + kk.name + ' →', function () { goKhoa(kk); }, 'primary')); });
      if (nextL) row.appendChild(btn('Sang bài ' + nextL.l.no + ': ' + nextL.l.vi + ' →', function () { state.cur = nextL.l.id; save(); goLesson(); }, 'primary'));
      row.appendChild(btn('Ở lại ' + k.name, function () { closeSheet(); goKhoa(k); }));
      sh.dock.appendChild(row);
      if (r1 !== r0) toast('🎉 ' + k.name + ': em lên cấp ' + r1[1] + '!');
    }
    step();
  }
  function nextLesson(l) {
    var list = allLessons(), i = -1;
    list.forEach(function (x, j) { if (x.l === l) i = j; });
    var n = list[i + 1];
    return n && !n.s.locked ? n : null;
  }
  function semesterGrow(l) {
    var x = findLesson(l.id), sem = x.s;
    if (!sem.lessons.every(function (y) { return passed(y.id); })) return null;
    var nextSem = C.semesters[C.semesters.indexOf(sem) + 1];
    return nextSem ? h('p', { class: 'grow' }, [sem.face + ' → ' + nextSem.face + '  Em đã học hết ' + sem.label + '! Chặng sau em sẽ thành ' + nextSem.stage.toLowerCase() + ' (' + nextSem.age + ' tuổi).']) : null;
  }
  function nextBtn(c, label) { c.dock.appendChild(btn(label || 'Tiếp ▸', c.next, 'primary')); }

  /* ===== các phần luyện của từng khoa ===== */
  var TASKS = {
    nghe: function (l) { return [{ name: 'Nghe và chọn hình', fn: tListen }, l.tones ? { name: 'Thanh điệu', fn: tTone } : null, { name: 'Nghe hiểu câu', fn: tComp }, bk(l) ? { name: 'Nghe bài khóa gốc', fn: tKwMeaning } : null]; },
    noi: function (l) {
      var kt = l.kantu || {};
      return [{ name: 'Nói theo câu mẫu', fn: tShadow }, bk(l) ? { name: 'Đóng vai bài khóa gốc', fn: tRole } : null, kt.pron ? { name: 'Nhìn tranh phát âm', fn: tPron } : null,
        kt.ask ? { name: 'Nhìn tranh trả lời', fn: tAsk } : null, kt.retell ? { name: 'Kể lại theo tranh', fn: tRetell } : null];
    },
    doc: function (l) {
      return [{ name: 'Từ mới', fn: tVocab }, bk(l) ? { name: 'Đọc bài khóa gốc', fn: tReadBook } : { name: 'Đọc bài khóa', fn: tRead }, bk(l) ? { name: 'Đọc hiểu', fn: tEx2 } : null, { name: 'Ghép nghĩa', fn: tMatch }, { name: 'Ngữ pháp', fn: tGrammar },
        { name: 'Xếp câu', fn: tOrder }, C.challenges && C.challenges[l.id] ? { name: 'Thử thách', fn: tChallenge } : null];
    },
    viet: function () { return [{ name: 'Viết chữ theo nét', fn: tWrite }, { name: 'Pinyin → chữ Hán', fn: tPyPick }]; }
  };
  function series(c, n, ask) { var q = 0; (function go() { c.body.querySelectorAll('.q-area').forEach(function (e) { e.remove(); }); c.dock.innerHTML = ''; if (q >= n) return c.next(); var area = h('div', { class: 'q-area' }); c.body.appendChild(area); ask(area, q, function () { q++; go(); }); })(); }

  /* Nghe */
  function tListen(c) {
    var pool = c.l.vocab, qs = shuffle(pool).slice(0, Math.min(6, pool.length));
    series(c, qs.length, function (area, q, done) {
      var t = qs[q], wrong = shuffle(pool.filter(function (v) { return v !== t; })).slice(0, 3);
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': nghe rồi chọn hình đúng.']));
      area.appendChild(h('button', { class: 'big-speak', 'aria-label': 'Nghe lại', onclick: function () { say(t[0]); } }, ['🔊']));
      var g = h('div', { class: 'pick-grid' });
      shuffle([t].concat(wrong)).forEach(function (v) {
        var b = h('button', { class: 'pick', onclick: function () {
          if (v === t) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); area.appendChild(hz(t[0], t[1], t[2], { big: true })); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [h('span', { class: 'pic' }, [v[3]]), state.settings.vi ? h('small', null, [v[2]]) : null]);
        g.appendChild(b);
      });
      area.appendChild(g);
      setTimeout(function () { say(t[0]); }, 250);
    });
  }
  var TONE = [null, ['Thanh 1', 'ngang'], ['Thanh 2', 'lên'], ['Thanh 3', 'xuống-lên'], ['Thanh 4', 'xuống']];
  function contour(n) { var d = { 1: 'M6 10 L34 10', 2: 'M6 26 L34 8', 3: 'M6 18 L18 32 L34 10', 4: 'M6 8 L34 34' }[n]; return '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; }
  function tTone(c) {
    var qs = shuffle(c.l.tones).slice(0, 6);
    series(c, qs.length, function (area, q, done) {
      var t = qs[q];
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': chữ này đọc thanh mấy?']));
      area.appendChild(h('button', { class: 'tone-char', onclick: function () { say(t[0]); } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [t[0]]), h('small', null, ['🔊 chạm để nghe'])]));
      var g = h('div', { class: 'tone-grid' });
      [1, 2, 3, 4].forEach(function (n) {
        var b = h('button', { class: 'tone-btn', onclick: function () {
          if (n === t[2]) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); area.appendChild(h('p', { class: 'answer' }, [t[0] + ' · ' + t[1] + ' · ' + TONE[n][0]])); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [h('svg', { class: 'contour', viewBox: '0 0 40 40', 'aria-hidden': 'true', html: contour(n) }), h('b', null, [TONE[n][0]]), h('small', null, [TONE[n][1]])]);
        g.appendChild(b);
      });
      area.appendChild(g);
      setTimeout(function () { say(t[0]); }, 250);
    });
  }
  function tComp(c) {
    var lines = c.l.story.filter(function (s) { return s.zh && s.c !== 'panda'; });
    if (bk(c.l)) lines = lines.concat(kwLines(c.l).map(function (k) { return { zh: k.zh, py: k.py, vi: k.vi, c: '' }; }));
    var qs = shuffle(lines).slice(0, Math.min(4, lines.length));
    series(c, qs.length, function (area, q, done) {
      var t = qs[q], wrong = shuffle(lines.filter(function (s) { return s.vi !== t.vi; })).slice(0, 2);
      var who = C.characters[t.c] || {};
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': ' + (who.name || 'Một người') + ' nói gì? Chỉ nghe, không nhìn chữ.']));
      area.appendChild(h('button', { class: 'big-speak', 'aria-label': 'Nghe câu', onclick: function () { say(t.zh); } }, [who.face || '🔊']));
      var g = h('div', { class: 'opts' });
      shuffle([t].concat(wrong)).forEach(function (s) {
        var b = h('button', { class: 'opt', onclick: function () {
          if (s === t) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); area.appendChild(hz(t.zh, t.py, null)); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [fill(s.vi)]);
        g.appendChild(b);
      });
      area.appendChild(g);
      setTimeout(function () { say(t.zh); }, 250);
    });
  }

  /* Nói: dùng micro, máy chấm từng chữ; không có micro thì nói to rồi tự chấm */
  function speakTask(area, c, target, done, o) {
    o = o || {};
    var tries = 0;
    var row = h('div', { class: 'row wrap' });
    var mb = micBox([target], function (best, alts) {
      tries++;
      var ok = o.keys ? o.keys.every(function (k) { return alts.some(function (a) { return norm(a).indexOf(norm(k)) >= 0; }); }) : best.r >= (o.need || 0.6);
      if (ok) { mb.status.textContent += ' · Đạt! 👏'; cheer(); finish(); }
      else {
        mb.status.textContent += o.keys ? ' · Câu trả lời cần có: ' + o.keys.join('、') : ' · Chữ đỏ là chỗ chưa rõ, nói lại nhé.';
        if (tries >= 2 && !row.querySelector('.skip')) row.appendChild(h('button', { class: 'btn ghost skip', onclick: function () { c.miss(); finish(); } }, ['Bỏ qua câu này']));
      }
    }, { onNoMic: noMic });
    function noMic() {
      if (row.querySelector('.self')) return;
      row.appendChild(h('button', { class: 'btn self', onclick: function () { finish(); } }, ['✓ Em đã nói to xong']));
    }
    function finish() { area.querySelectorAll('button.mic-btn').forEach(function (b) { b.disabled = true; }); row.innerHTML = ''; c.dock.innerHTML = ''; c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
    area.appendChild(mb); area.appendChild(row);
    if (mic.off) noMic();
  }
  function tShadow(c) {
    var l = c.l, list = [];
    l.story.forEach(function (s) { if (s.me) list.push(s.opts[0]); });
    l.story.forEach(function (s) { if (s.zh && s.c !== 'panda' && list.length < 6) list.push([s.zh, s.py, s.vi]); });
    list = list.slice(0, 6);
    series(c, list.length, function (area, q, done) {
      var t = list[q];
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + list.length + ': nghe mẫu 🔊, rồi bấm 🎤 nói theo.']));
      area.appendChild(h('div', { class: 'say-card' }, [hz(t[0], t[1], t[2], { big: true }), h('button', { class: 'speak', 'aria-label': 'Nghe mẫu', onclick: function () { say(t[0]); } }, ['🔊'])]));
      speakTask(area, c, t[0], done);
      setTimeout(function () { say(t[0]); }, 250);
    });
  }
  function tPron(c) {
    var list = shuffle(c.l.kantu.pron).slice(0, 6);
    series(c, list.length, function (area, q, done) {
      var t = list[q];
      area.appendChild(h('p', { class: 'hint' }, [c.l.kantu.src + ' · ' + (q + 1) + '/' + list.length + ': nhìn tranh, đọc to chữ.']));
      area.appendChild(h('div', { class: 'say-card pron' }, [h('span', { class: 'pic big', 'aria-hidden': 'true' }, [t[2]]), hz(t[0], t[1], t[3], { big: true }), h('button', { class: 'speak', 'aria-label': 'Nghe mẫu', onclick: function () { say(t[0]); } }, ['🔊'])]));
      speakTask(area, c, t[0], done, { need: 1 });
    });
  }
  function tAsk(c) {
    var kt = c.l.kantu, list = kt.ask;
    series(c, list.length, function (area, q, done) {
      var a = list[q];
      area.appendChild(h('p', { class: 'hint' }, [kt.src + ' · ' + (q + 1) + '/' + list.length + ': nghe câu hỏi, nhìn tranh và trả lời bằng một câu.']));
      area.appendChild(h('div', { class: 'picture' }, [a[1]]));
      area.appendChild(h('div', { class: 'say-card' }, [hz(a[0], null, null), h('button', { class: 'speak', 'aria-label': 'Nghe câu hỏi', onclick: function () { say(a[0]); } }, ['🔊'])]));
      var words = h('div', { class: 'chips' });
      (kt.words || []).forEach(function (w) { words.appendChild(h('button', { class: 'chip', onclick: function () { say(w[0]); } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [w[0]]), h('small', null, [w[1]])])); });
      area.appendChild(words);
      speakTask(area, c, a[3], done, { keys: a[2] });
      var g = h('div', { class: 'opts' });
      var hint = btn('Bí quá? Chọn câu trả lời', function () {
        hint.remove();
        shuffle([a[3]].concat(a[4])).forEach(function (s) {
          var b = h('button', { class: 'opt', onclick: function () {
            if (s === a[3]) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); say(s); c.dock.innerHTML = ''; c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
            else { c.miss(b); b.disabled = true; }
          } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [s])]);
          g.appendChild(b);
        });
      }, 'ghost');
      area.appendChild(hint); area.appendChild(g);
      setTimeout(function () { say(a[0]); }, 250);
    });
  }
  function tRetell(c) {
    var kt = c.l.kantu;
    series(c, 1, function (area, q, done) {
      area.appendChild(h('p', { class: 'hint' }, ['Kể lại cả câu chuyện trong tranh. Nghe mẫu trước, rồi bấm 🎤 kể (đạt khi khớp từ một nửa).']));
      if (kt.scene) area.appendChild(h('div', { class: 'picture' }, [kt.scene]));
      area.appendChild(h('div', { class: 'say-card' }, [hz(kt.retell, null, null), h('button', { class: 'speak', 'aria-label': 'Nghe mẫu', onclick: function () { say(kt.retell); } }, ['🔊'])]));
      speakTask(area, c, kt.retell, done, { need: 0.5 });
    });
  }

  /* Đọc */
  function tVocab(c) {
    var grid = h('div', { class: 'vocab-grid' });
    c.l.vocab.forEach(function (v) {
      grid.appendChild(h('button', { class: 'vcard', onclick: function () { say(v[0]); state.learned[v[0]] = 1; save(); } }, [
        h('span', { class: 'pic', 'aria-hidden': 'true' }, [v[3]]), h('span', { class: 'tzg zh', lang: 'zh-CN' }, [v[0]]),
        state.settings.py ? h('span', { class: 'py' }, [v[1]]) : null, state.settings.vi ? h('span', { class: 'vi' }, [v[2]]) : null
      ]));
    });
    c.body.appendChild(h('p', { class: 'hint' }, ['Chạm từng thẻ để nghe và đọc theo.']));
    c.body.appendChild(grid);
    nextBtn(c, 'Đọc bài khóa →');
  }
  function tRead(c) {
    var l = c.l, box = h('div', { class: 'reader' }), pyOn = state.settings.py;
    function draw() {
      box.innerHTML = '';
      l.story.forEach(function (s) {
        var zh = s.zh || (s.me ? s.opts[0][0] : null), py = s.py || (s.me ? s.opts[0][1] : ''), vi = s.vi || (s.me ? s.opts[0][2] : '');
        if (!zh) return;
        var who = s.me ? { name: state.profile.nick, face: currentSem().face } : (C.characters[s.c] || {});
        box.appendChild(h('button', { class: 'rline', onclick: function () { say(zh); } }, [
          h('span', { class: 'face', 'aria-hidden': 'true' }, [who.face || '🙂']),
          h('span', null, [h('span', { class: 'zh', lang: 'zh-CN' }, [fill(zh)]), pyOn ? h('small', { class: 'py' }, [fill(py)]) : null])
        ]));
      });
    }
    draw();
    c.body.appendChild(h('p', { class: 'hint' }, ['Đọc to cả bài khóa “' + l.zh + '”. Chạm một dòng để nghe. Thử tắt pinyin để tự đọc chữ Hán.']));
    c.body.appendChild(h('div', { class: 'row' }, [btn('Bật/tắt pinyin', function () { pyOn = !pyOn; draw(); }, 'ghost'), btn('🔊 Nghe cả bài', function () {
      var lines = l.story.map(function (s) { return s.zh || (s.me ? s.opts[0][0] : ''); }).filter(Boolean), i = 0;
      (function nx() { if (i < lines.length && sheetEl) say(lines[i++], nx); })();
    }, 'ghost')]));
    c.body.appendChild(box);
    nextBtn(c, 'Ghép nghĩa →');
  }
  function tReadBook(c) {
    var b = bk(c.l), box = h('div', { class: 'reader' });
    b.kw.forEach(function (sec) {
      if (sec.h) box.appendChild(h('h3', { class: 'kw-h', lang: 'zh-CN' }, [sec.h]));
      sec.lines.forEach(function (ln) { if (ln[2]) box.appendChild(h('button', { class: 'rline kw', onclick: function () { say(ln[1]); } }, [h('span', { class: 'who zh' }, [ln[0] ? ln[0] + '：' : '']), h('span', null, [h('span', { class: 'zh', lang: 'zh-CN' }, [ln[1]]), state.settings.py ? h('small', { class: 'py' }, [ln[2]]) : null])])); });
    });
    c.body.appendChild(h('p', { class: 'hint' }, ['Đọc to nguyên văn 课文 · ' + C.book.name + ' · trang ' + b.page + '. Chạm một dòng để nghe.']));
    c.body.appendChild(box);
    nextBtn(c, 'Đọc hiểu →');
  }
  function tMatch(c) {
    var set = shuffle(c.l.vocab).slice(0, 5), left = shuffle(set), right = shuffle(set), sel = null, done = 0;
    var L = h('div', { class: 'col' }), R = h('div', { class: 'col' });
    c.body.appendChild(h('p', { class: 'hint' }, ['Chạm một chữ Hán, rồi chạm nghĩa của nó.']));
    c.body.appendChild(h('div', { class: 'match' }, [L, R]));
    left.forEach(function (v) {
      var b = h('button', { class: 'm-card', onclick: function () { [].forEach.call(L.children, function (x) { x.classList.remove('sel'); }); b.classList.add('sel'); sel = { v: v, b: b }; say(v[0]); } },
        [h('span', { class: 'zh', lang: 'zh-CN' }, [v[0]]), state.settings.py ? h('small', null, [v[1]]) : null]);
      L.appendChild(b);
    });
    right.forEach(function (v) {
      var b = h('button', { class: 'm-card', onclick: function () {
        if (!sel) { toast('Chọn chữ Hán bên trái trước nhé.'); return; }
        if (sel.v === v) { sel.b.classList.add('ok'); b.classList.add('ok'); sel.b.disabled = true; b.disabled = true; sel.b.classList.remove('sel'); sel = null; done++; if (done === set.length) nextBtn(c, 'Ngữ pháp →'); }
        else c.miss(b);
      } }, [h('span', { class: 'pic' }, [v[3]]), h('small', null, [v[2]])]);
      R.appendChild(b);
    });
  }
  function tGrammar(c) {
    var list = h('div', { class: 'gram' });
    c.l.grammar.forEach(function (g) {
      var exs = h('div', { class: 'exs' });
      g.ex.forEach(function (e) { exs.appendChild(h('button', { class: 'ex', onclick: function () { say(e[0]); } }, [hz(e[0], e[1], e[2]), h('span', { class: 'speak', 'aria-hidden': 'true' }, ['🔊'])])); });
      list.appendChild(h('article', { class: 'gcard' }, [h('h3', null, [g.t]), h('p', null, [fill(g.d)]), exs]));
    });
    c.body.appendChild(list);
    nextBtn(c, 'Xếp câu →');
  }
  function tOrder(c) {
    var items = c.l.order;
    series(c, items.length, function (area, q, done) {
      var toks = items[q][0].map(fill), placed = [];
      var ans = h('div', { class: 'answer-row', 'aria-label': 'Câu của em' }), bank = h('div', { class: 'bank' });
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + items.length + ': xếp các chữ thành câu']));
      area.appendChild(h('p', { class: 'target' }, ['“' + fill(items[q][1]) + '”']));
      area.appendChild(ans); area.appendChild(bank);
      var order = shuffle(toks.map(function (t, i) { return i; }));
      if (order.every(function (v, i) { return v === i; }) && toks.length > 1) order.reverse();
      order.forEach(function (i) {
        var b = h('button', { class: 'tile zh', lang: 'zh-CN', onclick: function () {
          if (b.parentNode === bank) { ans.appendChild(b); placed.push(i); } else { bank.appendChild(b); placed.splice(placed.indexOf(i), 1); }
          check();
        } }, [toks[i]]);
        bank.appendChild(b);
      });
      function check() {
        if (placed.length !== toks.length) return;
        var got = placed.map(function (i) { return toks[i]; }).join('');
        if (got === toks.join('')) { ans.classList.add('right'); [].forEach.call(ans.children, function (x) { x.disabled = true; }); say(got); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
        else { c.miss(ans); setTimeout(function () { [].slice.call(ans.children).forEach(function (x) { bank.appendChild(x); }); placed = []; }, 450); }
      }
    });
  }
  function tChallenge(c) {
    var l = c.l, ch = C.challenges[l.id], qs = [], hzs = l.vocab.map(function (v) { return v[0]; });
    shuffle(l.order).slice(0, 2).forEach(function (o) {
      var toks = o[0].map(fill), cand = toks.map(function (t, i) { return i; }).filter(function (i) { return hzs.indexOf(toks[i]) >= 0; });
      if (!cand.length) return;
      var k = cand[Math.floor(Math.random() * cand.length)];
      qs.push({ kind: 'fill', toks: toks, k: k, v: fill(o[1]), opts: [toks[k]].concat(shuffle(hzs.filter(function (x) { return toks.indexOf(x) < 0; })).slice(0, 2)) });
    });
    (ch.gram || []).forEach(function (g) { qs.push({ kind: 'gram', g: g }); });
    (ch.pic || []).forEach(function (pc) { qs.push({ kind: 'pic', pc: pc }); });
    qs = shuffle(qs);
    series(c, qs.length, function (area, q, done) {
      var it = qs[q];
      function ok(text, vi) { if (text) say(text); area.appendChild(h('p', { class: 'answer' }, ['Đúng rồi! ' + (vi || '')])); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
      area.appendChild(h('p', { class: 'hint' }, ['Thử thách ' + (q + 1) + '/' + qs.length + ' · ' + { fill: 'Chọn từ điền vào chỗ trống', gram: 'Phân tích ngữ pháp', pic: 'Nhìn tranh, chọn câu mô tả' }[it.kind]]));
      if (it.kind === 'fill') {
        area.appendChild(h('p', { class: 'target' }, ['“' + it.v + '”']));
        var line = h('div', { class: 'answer-row' });
        it.toks.forEach(function (t, i) { line.appendChild(h('span', { class: 'tile zh' + (i === it.k ? ' blank' : ''), lang: 'zh-CN' }, [i === it.k ? '？' : t])); });
        area.appendChild(line);
        var g = h('div', { class: 'opts row' });
        shuffle(it.opts).forEach(function (o) {
          var b = h('button', { class: 'tile zh', lang: 'zh-CN', onclick: function () {
            if (o === it.toks[it.k]) { line.children[it.k].textContent = o; line.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); ok(it.toks.join('')); }
            else { c.miss(b); b.disabled = true; }
          } }, [o]);
          g.appendChild(b);
        });
        area.appendChild(g);
      } else if (it.kind === 'gram') {
        area.appendChild(h('p', { class: 'target' }, [it.g.q]));
        var row = h('div', { class: 'answer-row' });
        it.g.s.forEach(function (t) {
          var b = h('button', { class: 'tile zh', lang: 'zh-CN', onclick: function () {
            if (t === it.g.a) { b.classList.add('right'); [].forEach.call(row.children, function (x) { x.disabled = true; }); ok(it.g.s.join('')); }
            else { c.miss(b); b.disabled = true; }
          } }, [t]);
          row.appendChild(b);
        });
        area.appendChild(row);
      } else {
        area.appendChild(h('div', { class: 'picture', role: 'img', 'aria-label': 'Tranh: ' + it.pc.v }, [it.pc.p]));
        var og = h('div', { class: 'opts' });
        shuffle(it.pc.opts.map(function (o, i) { return { o: o, ok: i === 0 }; })).forEach(function (x) {
          var b = h('button', { class: 'opt', onclick: function () {
            if (x.ok) { b.classList.add('right'); [].forEach.call(og.children, function (y) { y.disabled = true; }); ok(x.o, '“' + it.pc.v + '”'); }
            else { c.miss(b); b.disabled = true; say(x.o); }
          } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [x.o])]);
          og.appendChild(b);
        });
        area.appendChild(og);
        /* nói câu mô tả bằng micro (không bắt buộc) */
        if (!mic.off) area.appendChild(micBox([it.pc.opts[0]], function (best) { if (best.r >= 0.6 && !og.querySelector('.right')) { og.querySelectorAll('.opt').forEach(function (y) { y.disabled = true; }); ok(null, 'Em nói rất hay: “' + it.pc.v + '”'); } }, { tip: 'Hoặc bấm 🎤 và tự nói câu mô tả tranh.' }));
      }
    });
  }

  /* Viết: HanziWriter chấm từng nét */
  function writeChars(l) {
    var out = [];
    l.vocab.forEach(function (v) { v[0].split('').forEach(function (ch) { if (/[一-鿿]/.test(ch) && out.indexOf(ch) < 0) out.push(ch); }); });
    return out.slice(0, 6);
  }
  function wordOf(l, ch) { var w = null; l.vocab.forEach(function (v) { if (!w && v[0].indexOf(ch) >= 0) w = v; }); return w; }
  function tWrite(c) {
    var chars = writeChars(c.l), HW = window.HanziWriter, S = window.STROKES || {};
    series(c, chars.length, function (area, q, done) {
      var ch = chars[q], w = wordOf(c.l, ch), size = Math.min(260, window.innerWidth - 80);
      area.appendChild(h('p', { class: 'hint' }, ['Chữ ' + (q + 1) + '/' + chars.length + ': viết chữ “' + ch + '” trong từ ' + w[0] + ' (' + w[1] + ' · ' + w[2] + '). Vẽ từng nét bằng ngón tay hoặc chuột.']));
      var grid = h('div', { class: 'write-grid', style: 'width:' + size + 'px;height:' + size + 'px' });
      area.appendChild(grid);
      var info = h('p', { class: 'mic-status', 'aria-live': 'polite' }, ['']);
      area.appendChild(info);
      if (!HW || !S[ch]) {
        grid.appendChild(h('span', { class: 'zh ghost-char', lang: 'zh-CN' }, [ch]));
        info.textContent = 'Máy chưa tải được bộ tập viết. Em tô theo chữ mờ vào vở rồi chạm ✓.';
        c.dock.appendChild(btn('✓ Em đã viết xong', done, 'primary'));
        return;
      }
      var writer = HW.create(grid, ch, {
        width: size, height: size, padding: 14, showOutline: true, showCharacter: false, strokeColor: '#1D2B45', outlineColor: '#E6D9C2', highlightColor: '#D23B2E', drawingColor: '#1D2B45',
        drawingWidth: 26, showHintAfterMisses: 2, strokeAnimationSpeed: 1.2, delayBetweenStrokes: 220,
        charDataLoader: function (x, onLoad) { onLoad(S[x]); }
      });
      var mistakes = 0;
      function quiz() {
        info.textContent = 'Viết nét số 1 · chữ có ' + S[ch].strokes.length + ' nét.';
        writer.quiz({
          onCorrectStroke: function (d) { info.textContent = 'Đúng nét ' + (d.strokeNum + 1) + '/' + S[ch].strokes.length + ' ✓'; },
          onMistake: function (d) { mistakes++; info.textContent = 'Nét ' + (d.strokeNum + 1) + ' chưa đúng hướng hoặc thứ tự. Thử lại nhé.'; },
          onComplete: function (s) {
            info.textContent = s.totalMistakes ? 'Viết xong! Sai ' + s.totalMistakes + ' lần.' : 'Viết xong, không sai nét nào! 👏';
            if (s.totalMistakes > 3) c.miss();
            say(ch); cheer();
            c.dock.innerHTML = ''; c.dock.appendChild(btn('Tiếp ▸', done, 'primary'));
          }
        });
      }
      quiz();
      area.appendChild(h('div', { class: 'row wrap' }, [
        btn('👀 Xem mẫu thứ tự nét', function () { writer.cancelQuiz(); writer.showCharacter(); writer.animateCharacter({ onComplete: function () { setTimeout(function () { writer.hideCharacter(); quiz(); }, 500); } }); }, 'ghost'),
        btn('🔊 Nghe', function () { say(w[0]); }, 'ghost')
      ]));
    });
  }
  function tPyPick(c) {
    var pool = c.l.vocab, qs = shuffle(pool).slice(0, Math.min(6, pool.length));
    series(c, qs.length, function (area, q, done) {
      var t = qs[q], wrong = shuffle(pool.filter(function (v) { return v !== t; })).slice(0, 3);
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': pinyin này viết bằng chữ Hán nào?']));
      area.appendChild(h('p', { class: 'target py-big' }, [t[1] + '  ·  ' + t[2]]));
      var g = h('div', { class: 'pick-grid' });
      shuffle([t].concat(wrong)).forEach(function (v) {
        var b = h('button', { class: 'pick tzg-pick', onclick: function () {
          if (v === t) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); say(t[0]); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [v[0]])]);
        g.appendChild(b);
      });
      area.appendChild(g);
    });
  }

  /* ========== Giáo trình gốc: 汉语教程 第一册（上）========== */
  function bk(l) { return (C.book && C.book.lessons[l.id]) || null; }
  function kwLines(l) { var b = bk(l), out = []; if (b) b.kw.forEach(function (sec, si) { sec.lines.forEach(function (ln) { if (ln[1] && ln[2]) out.push({ who: ln[0], zh: ln[1], py: ln[2], vi: ln[3], sec: si }); }); }); return out; }
  /* tách câu thành từ theo từ điển của giáo trình (dài nhất trước) */
  var DICT = null;
  function dict() {
    if (DICT) return DICT;
    DICT = {};
    allLessons().forEach(function (x) { x.l.vocab.forEach(function (v) { DICT[v[0]] = 1; }); var b = bk(x.l); if (b) { (b.adv || []).forEach(function (a) { a[0].split(' / ').forEach(function (w) { DICT[w] = 1; }); }); } });
    ['麦克', '玛丽', '张东', '田芳', '李昌浩', '爱德华', '罗兰', '天安门', '北京', '中国', '美国', '韩国', '老师', '经理', '教授', '校长', '一下儿', '一会儿', '什么', '哪儿', '这儿', '那儿', '怎么样', '没关系', '不客气', '对不起', '好久', '不见', '多少', '一共', '十六', '三十四', '五十', '二百', '十八', '一百', '大公司', '小的', '外国', '全家', '有点儿', '点儿', '还是', '日用品', '鸡蛋汤', '雨伞', '香水', '词典', '光盘', '茶叶', '中药', '箱子', '自行车', '颜色', '蓝的', '新的', '旧的', '黑的', '红的'].forEach(function (w) { DICT[w] = 1; });
    return DICT;
  }
  function tokenize(zh) {
    var t = fill(zh).replace(/[，。？！、：；（）()…“”\s]/g, ''), out = [], i = 0, D = dict();
    while (i < t.length) { var n = Math.min(4, t.length - i), w = null; for (; n > 1; n--) if (D[t.substr(i, n)]) { w = t.substr(i, n); break; } w = w || t[i]; out.push(w); i += w.length; }
    return out;
  }
  function plainZh(zh) { return fill(zh).replace(/[，。？！、：；（）()…“”\s]/g, ''); }

  function practice(title, cls, l, tasks, onEnd) {
    var sh = sheet(title, cls), run = { i: 0, miss: 0 };
    function step() {
      sh.body.innerHTML = ''; sh.dock.innerHTML = ''; sh.body.scrollTop = 0;
      if (run.i >= tasks.length) {
        var st = run.miss <= 1 ? 3 : run.miss <= 4 ? 2 : 1;
        sh.sub.textContent = 'Hoàn thành'; cheer();
        sh.body.appendChild(h('div', { class: 'done' }, [h('div', { class: 'big-stars' }, [starsTxt(st)]), h('h2', null, ['Làm xong rồi!']), h('p', null, ['Số lần sai: ' + run.miss + '.'])]));
        if (onEnd) onEnd(st, sh);
        sh.dock.appendChild(h('div', { class: 'row wrap' }, [btn('📘 Về sách', function () { openTextbook(l); }), btn('Đóng', closeSheet, 'primary')]));
        return;
      }
      sh.sub.textContent = 'Phần ' + (run.i + 1) + '/' + tasks.length + ' · ' + tasks[run.i].name;
      var prog = h('div', { class: 'progress' });
      tasks.forEach(function (t, j) { prog.appendChild(h('span', { class: j < run.i ? 'd' : j === run.i ? 'c' : '' })); });
      sh.body.appendChild(prog);
      tasks[run.i].fn({ body: sh.body, dock: sh.dock, l: l, miss: function (el) { run.miss++; if (el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); } }, next: function () { run.i++; step(); } });
    }
    step();
  }

  /* cuốn sách: 7 mục theo "câu lệnh cho bài học" */
  var BOOK_TABS = [['kw', '1 · Bài khóa + pinyin'], ['vocab', '2 · Từ vựng'], ['gram', '3 · Ngữ pháp'], ['fn', '4 · Hư từ'], ['adv', '5 · Từ nâng cao'], ['ex1', '6 · Bài tập cơ bản'], ['ex2', '7 · Bài tập nâng cao']];
  function openTextbook(l, tab) {
    l = l || curLesson().l; tab = tab || 'kw';
    var b = bk(l), sh = sheet('📘 第' + l.no + '课 ' + l.zh, 'textbook');
    sh.sub.textContent = C.book.name + ' · trang ' + (b ? b.page : '?') + ' · ' + l.py;
    var tabs = h('nav', { class: 'chips book-tabs' });
    BOOK_TABS.forEach(function (t) { tabs.appendChild(h('button', { class: 'chip' + (t[0] === tab ? ' on' : ''), onclick: function () { openTextbook(l, t[0]); } }, [h('small', null, [t[1]])])); });
    sh.body.appendChild(tabs);
    var B = sh.body;
    function row(a, b2, c2, d) { return h('button', { class: 'brow', onclick: function () { say(a.split(' / ')[0]); } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [a]), h('span', { class: 'py' }, [b2 || '']), h('span', { class: 'vi' }, [c2 + (d ? ' · ' + d : '')])]); }
    if (tab === 'kw') {
      var pyOn = true, viOn = true, box = h('div', { class: 'reader' });
      function draw() {
        box.innerHTML = '';
        b.kw.forEach(function (sec) {
          if (sec.h) box.appendChild(h('h3', { class: 'kw-h', lang: 'zh-CN' }, [sec.h]));
          if (sec.note) box.appendChild(h('p', { class: 'hint' }, [sec.note]));
          sec.lines.forEach(function (ln) {
            if (!ln[2]) { box.appendChild(h('p', { class: 'hint' }, ['……'])); return; }
            box.appendChild(h('button', { class: 'rline kw', onclick: function () { say(ln[1]); } }, [
              h('span', { class: 'who zh', lang: 'zh-CN' }, [ln[0] ? ln[0] + '：' : '']),
              h('span', null, [h('span', { class: 'zh', lang: 'zh-CN' }, [ln[1]]), pyOn ? h('small', { class: 'py' }, [ln[2]]) : null, viOn ? h('small', { class: 'vi' }, [ln[3]]) : null])
            ]));
          });
        });
      }
      draw();
      B.appendChild(h('p', { class: 'hint' }, ['Nguyên văn 课文 trong sách. Chạm một dòng để nghe.']));
      B.appendChild(h('div', { class: 'row wrap' }, [
        btn('Pinyin', function () { pyOn = !pyOn; draw(); }, 'ghost'), btn('Nghĩa', function () { viOn = !viOn; draw(); }, 'ghost'),
        btn('🔊 Nghe cả bài', function () { var ls = kwLines(l), i = 0; (function nx() { if (i < ls.length && sheetEl) say(ls[i++].zh, nx); })(); }, 'ghost'),
        btn('🎭 Đóng vai bằng mic', function () { practice('🎭 Đóng vai 第' + l.no + '课', 'k-noi', l, [{ name: 'Đóng vai bài khóa gốc', fn: tRole }]); }, 'primary')
      ]));
      B.appendChild(box);
    } else if (tab === 'vocab') {
      B.appendChild(h('p', { class: 'hint' }, ['生词 · ' + l.vocab.length + ' từ mới của bài (chạm để nghe).']));
      l.vocab.forEach(function (v, i) { B.appendChild(row(v[0], v[1], (i + 1) + '. ' + v[3] + ' ' + v[2])); });
    } else if (tab === 'gram') {
      l.grammar.forEach(function (g) {
        var exs = h('div', { class: 'exs' });
        g.ex.forEach(function (e) { exs.appendChild(h('button', { class: 'ex', onclick: function () { say(e[0]); } }, [hz(e[0], e[1], e[2])])); });
        B.appendChild(h('article', { class: 'gcard' }, [h('h3', null, [g.t]), h('p', null, [fill(g.d)]), exs]));
      });
    } else if (tab === 'fn') {
      B.appendChild(h('p', { class: 'hint' }, ['Từ chức năng đặc biệt (hư từ, lượng từ, cấu trúc) xuất hiện trong bài.']));
      (b.fn || []).forEach(function (f) { B.appendChild(h('article', { class: 'gcard' }, [h('h3', { lang: 'zh-CN' }, [f[0] + (f[1] ? ' · ' + f[1] : '')]), h('p', null, [f[2]]), h('button', { class: 'ex', onclick: function () { say(f[3]); } }, [hz(f[3], null, null)])])); });
    } else if (tab === 'adv') {
      B.appendChild(h('p', { class: 'hint' }, ['Từ mở rộng: các từ phụ trong 生词 của sách và từ liên quan nên biết thêm.']));
      (b.adv || []).forEach(function (a) { B.appendChild(row(a[0], a[1], a[2])); });
    } else if (tab === 'ex1') {
      B.appendChild(h('p', { class: 'hint' }, ['Bài tập cơ bản: nghe câu trong bài khóa chọn nghĩa, chọn từ điền vào câu.']));
      B.appendChild(btn('Bắt đầu bài tập cơ bản ▸', function () { practice('6 · Bài tập cơ bản · 第' + l.no + '课', 'k-doc', l, [{ name: 'Nghe câu, chọn nghĩa', fn: tKwMeaning }, { name: 'Điền từ vào bài khóa', fn: tKwFill }], function (st) { exRec(l, 'ex1', st); }); }, 'primary'));
    } else {
      B.appendChild(h('p', { class: 'hint' }, ['Bài tập nâng cao: đọc hiểu bài khóa, dịch Việt → Trung bằng cách xếp từ, đóng vai bằng mic.']));
      B.appendChild(btn('Bắt đầu bài tập nâng cao ▸', function () { practice('7 · Bài tập nâng cao · 第' + l.no + '课', 'k-noi', l, [{ name: 'Đọc hiểu', fn: tEx2 }, { name: 'Dịch Việt → Trung', fn: tKwOrder }, { name: 'Đóng vai bài khóa', fn: tRole }], function (st) { exRec(l, 'ex2', st); }); }, 'primary'));
    }
    var ex = (state.ex || {})[l.id] || {};
    if (ex.ex1 || ex.ex2) B.appendChild(h('p', { class: 'fine' }, ['Kết quả: cơ bản ' + (ex.ex1 ? starsTxt(ex.ex1) : '—') + ' · nâng cao ' + (ex.ex2 ? starsTxt(ex.ex2) : '—')]));
  }
  function exRec(l, k, st) { state.ex = state.ex || {}; var e = state.ex[l.id] = state.ex[l.id] || {}; e[k] = Math.max(e[k] || 0, st); save(); }

  /* bài tập dựa trên bài khóa gốc */
  function tKwMeaning(c) {
    var ls = kwLines(c.l), qs = shuffle(ls).slice(0, Math.min(5, ls.length));
    series(c, qs.length, function (area, q, done) {
      var t = qs[q], wrong = shuffle(ls.filter(function (x) { return x.vi !== t.vi; })).slice(0, 2);
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': nghe câu trong bài khóa, chọn nghĩa đúng.']));
      area.appendChild(h('button', { class: 'big-speak', 'aria-label': 'Nghe câu', onclick: function () { say(t.zh); } }, ['🔊']));
      var g = h('div', { class: 'opts' });
      shuffle([t].concat(wrong)).forEach(function (s) {
        var b = h('button', { class: 'opt', onclick: function () {
          if (s === t) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); area.appendChild(hz(t.zh, t.py, null)); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [s.vi]);
        g.appendChild(b);
      });
      area.appendChild(g);
      setTimeout(function () { say(t.zh); }, 250);
    });
  }
  function tKwFill(c) {
    var vocab = c.l.vocab.map(function (v) { return v[0]; }), qs = [];
    shuffle(kwLines(c.l)).forEach(function (ln) {
      if (qs.length >= 5) return;
      var toks = tokenize(ln.zh), cand = toks.map(function (t, i) { return i; }).filter(function (i) { return vocab.indexOf(toks[i]) >= 0; });
      if (cand.length && toks.length > 1) qs.push({ ln: ln, toks: toks, k: cand[Math.floor(Math.random() * cand.length)] });
    });
    series(c, qs.length, function (area, q, done) {
      var it = qs[q], ans = it.toks[it.k], opts = [ans].concat(shuffle(vocab.filter(function (v) { return it.toks.indexOf(v) < 0; })).slice(0, 2));
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': chọn từ điền vào câu của bài khóa.']));
      area.appendChild(h('p', { class: 'target' }, ['“' + it.ln.vi + '”']));
      var line = h('div', { class: 'answer-row' });
      it.toks.forEach(function (t, i) { line.appendChild(h('span', { class: 'tile zh' + (i === it.k ? ' blank' : ''), lang: 'zh-CN' }, [i === it.k ? '？' : t])); });
      area.appendChild(line);
      var g = h('div', { class: 'opts row' });
      shuffle(opts).forEach(function (o) {
        var b = h('button', { class: 'tile zh', lang: 'zh-CN', onclick: function () {
          if (o === ans) { line.children[it.k].textContent = o; line.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); say(it.ln.zh); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [o]);
        g.appendChild(b);
      });
      area.appendChild(g);
    });
  }
  function tEx2(c) {
    var qs = (bk(c.l) || {}).ex2 || [];
    series(c, qs.length, function (area, q, done) {
      var it = qs[q];
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': đọc hiểu bài khóa (bí thì mở 📘 xem lại).']));
      area.appendChild(h('div', { class: 'say-card' }, [hz(it[0], null, null), h('button', { class: 'speak', 'aria-label': 'Nghe câu hỏi', onclick: function () { say(it[0]); } }, ['🔊'])]));
      var g = h('div', { class: 'opts' });
      shuffle([it[1]].concat(it[2])).forEach(function (o) {
        var b = h('button', { class: 'opt', onclick: function () {
          if (o === it[1]) { b.classList.add('right'); [].forEach.call(g.children, function (x) { x.disabled = true; }); say(o); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(b); b.disabled = true; }
        } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [o])]);
        g.appendChild(b);
      });
      area.appendChild(g);
      if (!mic.off) area.appendChild(micBox([it[1]], function (best) { if (best.r >= 0.6 && !g.querySelector('.right')) { [].forEach.call(g.children, function (x) { x.disabled = true; }); c.dock.innerHTML = ''; c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); } }, { tip: 'Hoặc bấm 🎤 trả lời bằng tiếng Trung.' }));
    });
  }
  function tKwOrder(c) {
    var qs = shuffle(kwLines(c.l).filter(function (ln) { var n = tokenize(ln.zh).length; return n >= 3 && n <= 8; })).slice(0, 4);
    series(c, qs.length, function (area, q, done) {
      var ln = qs[q], toks = tokenize(ln.zh), placed = [];
      var ans = h('div', { class: 'answer-row' }), bank = h('div', { class: 'bank' });
      area.appendChild(h('p', { class: 'hint' }, ['Câu ' + (q + 1) + '/' + qs.length + ': dịch sang tiếng Trung bằng cách xếp từ (câu trong bài khóa).']));
      area.appendChild(h('p', { class: 'target' }, ['“' + ln.vi + '”']));
      area.appendChild(ans); area.appendChild(bank);
      var order = shuffle(toks.map(function (t, i) { return i; }));
      if (order.every(function (v, i) { return v === i; })) order.reverse();
      order.forEach(function (i) {
        var b = h('button', { class: 'tile zh', lang: 'zh-CN', onclick: function () {
          if (b.parentNode === bank) { ans.appendChild(b); placed.push(i); } else { bank.appendChild(b); placed.splice(placed.indexOf(i), 1); }
          if (placed.length !== toks.length) return;
          if (placed.map(function (k) { return toks[k]; }).join('') === toks.join('')) { ans.classList.add('right'); [].forEach.call(ans.children, function (x) { x.disabled = true; }); say(ln.zh); area.appendChild(hz(ln.zh, ln.py, null)); c.dock.appendChild(btn('Tiếp ▸', done, 'primary')); }
          else { c.miss(ans); setTimeout(function () { [].slice.call(ans.children).forEach(function (x) { bank.appendChild(x); }); placed = []; }, 450); }
        } }, [toks[i]]);
        bank.appendChild(b);
      });
    });
  }
  /* đóng vai: máy đọc vai kia, em nói vai của mình bằng micro */
  function tRole(c) {
    var b = bk(c.l); if (!b) return c.next();
    var secs = b.kw.map(function (s) { return s.lines.filter(function (ln) { return ln[2]; }); }).filter(function (s) { return s.length >= 2; });
    var sec = secs.sort(function (a, b2) { return b2.length - a.length; })[0];
    var whos = []; sec.forEach(function (ln) { if (whos.indexOf(ln[0]) < 0) whos.push(ln[0]); });
    var me = whos[1] || whos[0];
    c.body.appendChild(h('p', { class: 'hint' }, ['Em đóng vai “' + me + '”. Máy đọc lời của ' + whos.filter(function (w) { return w !== me; }).join(', ') + '; đến lượt em thì bấm 🎤 và nói.']));
    var log = h('div', { class: 'reader' }); c.body.appendChild(log);
    var i = 0;
    (function nx() {
      c.dock.innerHTML = '';
      log.querySelectorAll('.q-area').forEach(function (e) { e.remove(); });
      if (i >= sec.length) { c.dock.appendChild(btn('Xong vai diễn ▸', c.next, 'primary')); return; }
      var ln = sec[i];
      if (ln[0] !== me) {
        log.appendChild(h('div', { class: 'rline kw' }, [h('span', { class: 'who zh' }, [ln[0] + '：']), h('span', null, [h('span', { class: 'zh', lang: 'zh-CN' }, [ln[1]]), h('small', { class: 'py' }, [ln[2]])])]));
        i++; say(ln[1]);
        c.dock.appendChild(btn('Tiếp ▸', nx, 'primary'));
      } else {
        var area = h('div', { class: 'q-area' });
        area.appendChild(h('div', { class: 'say-card mine' }, [hz(ln[1], ln[2], ln[3]), h('button', { class: 'speak', 'aria-label': 'Nghe mẫu', onclick: function () { say(ln[1]); } }, ['🔊'])]));
        log.appendChild(area);
        speakTask(area, c, ln[1], function () {
          area.remove();
          log.appendChild(h('div', { class: 'rline kw me' }, [h('span', { class: 'who zh' }, ['🧒 ' + me + '：']), h('span', null, [h('span', { class: 'zh', lang: 'zh-CN' }, [ln[1]])])]));
          i++; nx();
        });
      }
      c.body.scrollTop = c.body.scrollHeight;
    })();
  }

  /* ========== Khu phố & công viên ========== */
  var PLACES = [
    { key: 'home', label: '我家', sub: 'Nhà em', icon: '🏠', x: -5.2, z: -3.1, w: 2.6, d: 2, h: 2.2, c: '#FCE4C8', roof: '#C0392B', bg: '#E6604E', text: '我家', lessons: [1, 2, 5, 15] },
    { key: 'school', label: '学校', sub: 'Trường · 4 khoa', icon: '🏫', x: -1.3, z: -3.2, w: 4, d: 2.2, h: 2.8, c: '#F3E3CF', roof: '#D23B2E', bg: '#D23B2E', text: '北京语言大学', lessons: [4, 6, 7, 10, 11, 12, 14], khoa: true },
    { key: 'bank', label: '银行', sub: 'Ngân hàng', icon: '🏦', x: 2.6, z: -3.1, w: 2.4, d: 2, h: 2.4, c: '#E9EEF3', roof: '#2E4A7A', bg: '#C0392B', text: '中国银行', lessons: [9] },
    { key: 'post', label: '邮局', sub: 'Bưu điện · phố', icon: '🏤', x: 5.4, z: -3.1, w: 2.2, d: 2, h: 2.1, c: '#DFF3E8', roof: '#1F9D74', bg: '#1F9D74', text: '邮局', lessons: [3] },
    { key: 'market', label: '水果店', sub: 'Chợ hoa quả', icon: '🍎', x: -5, z: 3, w: 2.6, d: 1.8, h: 1.9, c: '#FFF1C9', roof: '#E6604E', bg: '#F28C28', text: '水果店', lessons: [8], r: Math.PI },
    { key: 'park', kind: 'park', label: '公园', sub: 'Công viên · ôn bài', icon: '🌳', x: -0.8, z: 3.6, d: 0.5, r: Math.PI, text: '公园' },
    { key: 'airport', label: '机场', sub: 'Sân bay', icon: '✈️', x: 4.7, z: 3, w: 3.2, d: 1.8, h: 1.8, c: '#DDE9F4', roof: '#4E8DE2', bg: '#10233F', text: '机场', lessons: [13], r: Math.PI }
  ];
  function lessonByNo(n) { var r = null; C.semesters[0].lessons.forEach(function (l) { if (l.no === n) r = l; }); return r; }
  function goTown(first) {
    closeSheet();
    G.room = 'town'; G.cast = [];
    loadRoom('town', { cast: [], places: PLACES, time: '10:00', meName: state.profile.sur + state.profile.given, pz: 0.3 }, 'Khu phố của em');
    refresh();
    clearChat('🗺️ Khu phố · 北京路');
    bubble('npc panda', 'panda', null, null, (first ? 'Chào ' + state.profile.nick + '! ' : '') + 'Đây là khu phố của em. Bấm vào tòa nhà nào thì đi tới đó và gặp bài khóa ở nơi ấy. Không có thứ tự bắt buộc, em thích đâu chơi đó.');
    dockBtns(PLACES.map(function (p) { return btn(p.icon + ' ' + p.sub, function () { onPlace(p.key); }, 'ghost'); }));
  }
  function onPlace(key) {
    if (key === 'park') return goPark();
    var p = null; PLACES.forEach(function (x) { if (x.key === key) p = x; });
    if (!p) return;
    clearChat(p.icon + ' ' + p.label + ' · ' + p.sub);
    bubble('npc panda', 'panda', null, null, 'Ở ' + p.sub.toLowerCase() + ' có ' + p.lessons.length + ' bài khóa. Em chọn bài muốn vào nhé.');
    var list = p.lessons.map(function (n) {
      var l = lessonByNo(n); if (!l) return null;
      return btn('第' + n + '课 ' + l.zh + (state.story[l.id] ? ' ✓' : ''), function () { goLesson(l.id); }, 'ghost');
    });
    if (p.khoa) list = list.concat(KHOA.map(function (k) { return btn(k.zh + ' ' + k.name, function () { goKhoa(k); }, 'primary'); }));
    dockBtns(list);
  }
  function goPark() {
    closeSheet();
    G.room = 'park'; G.cast = ['mike', 'mali', 'tianfang', 'zhangdong', 'lee', 'auntie'];
    loadRoom('park', { cast: G.cast, time: '16:30', meName: state.profile.sur + state.profile.given, spots: [[-2.4, -1.4], [0.2, -2.6], [-4.4, 1.4], [3.2, 0.2], [-1.6, 2.4], [5, -3.2]] }, 'Công viên');
    refresh();
    clearChat('🌳 公园 · Công viên');
    var n = state.park || 0;
    bubble('npc panda', 'panda', null, null, 'Ở công viên, mọi người nói một câu trong bài khóa gốc, em nói tiếp câu sau (bằng 🎤 hoặc chọn). Bấm vào bạn nào cũng được. Em đã nối được ' + n + ' câu.');
    dockBtns([btn('Nói chuyện với một bạn ngẫu nhiên ▸', function () { parkTalk(G.cast[Math.floor(Math.random() * G.cast.length)]); }, 'primary'), btn('🗺️ Khu phố', function () { goTown(); }, 'ghost')]);
  }
  function parkTalk(key) {
    /* lấy một cặp câu liền nhau trong bài khóa gốc của bài bất kỳ */
    var pairs = [];
    allLessons().forEach(function (x) { var b = bk(x.l); if (!b) return; b.kw.forEach(function (sec) { var ls = sec.lines.filter(function (ln) { return ln[2]; }); for (var i = 0; i + 1 < ls.length; i++) if (ls[i][0] !== ls[i + 1][0]) pairs.push({ l: x.l, a: ls[i], b: ls[i + 1] }); }); });
    var pr = pairs[Math.floor(Math.random() * pairs.length)];
    var others = shuffle(pairs.filter(function (q) { return q.b[1] !== pr.b[1]; })).slice(0, 2).map(function (q) { return q.b; });
    G.dock.innerHTML = '';
    bubble('npc panda', 'panda', null, null, '📘 第' + pr.l.no + '课 ' + pr.l.zh);
    bubble('npc', key, pr.a[1], pr.a[2], pr.a[3]);
    function ok(fromMic) {
      G.dock.innerHTML = '';
      bubble('me', 'me', pr.b[1], pr.b[2], pr.b[3], fromMic); talk('me', true);
      state.park = (state.park || 0) + 1; save(); if (fromMic) cheer();
      dockBtns([btn('Câu khác ▸', function () { parkTalk(G.cast[Math.floor(Math.random() * G.cast.length)]); }, 'primary'), btn('📘 Mở bài ' + pr.l.no, function () { openTextbook(pr.l); }, 'ghost'), btn('Vào phòng bài ' + pr.l.no, function () { goLesson(pr.l.id); }, 'ghost')]);
    }
    G.dock.appendChild(h('p', { class: 'prompt' }, ['Em nói tiếp câu sau trong bài khóa:']));
    var mb = micBox([pr.b[1]].concat(others.map(function (o) { return o[1]; })), function (best) { if (best.i === 0 && best.r >= 0.6) ok(true); else mb.status.textContent += ' · Chưa đúng câu tiếp theo, thử lại hoặc chọn bên dưới.'; });
    G.dock.appendChild(mb);
    var g = h('div', { class: 'opts' });
    shuffle([pr.b].concat(others)).forEach(function (o) {
      var b2 = h('button', { class: 'opt', onclick: function () { if (o === pr.b) ok(false); else { b2.disabled = true; b2.classList.add('shake'); say(o[1]); } } }, [hz(o[1], o[2], null)]);
      g.appendChild(b2);
    });
    G.dock.appendChild(g);
  }

  /* ---------- bản đồ bài học ---------- */
  var viewSem = null;
  function openMap() {
    var sh = sheet('🗺️ Hành trình lớn lên', 'map');
    var sem = viewSem || findLesson(curLesson().l.id).s;
    sh.sub.textContent = 'Chơi tự do: bài nào cũng mở · ' + C.book.name;
    var tabs = h('nav', { class: 'journey' });
    C.semesters.forEach(function (s) {
      var done = s.lessons.length && s.lessons.every(function (l) { return passed(l.id); });
      tabs.appendChild(h('button', { class: 'stage' + (s === sem ? ' on' : '') + (s.locked ? ' locked' : '') + (done ? ' done' : ''), onclick: function () { viewSem = s; openMap(); } }, [
        h('span', { class: 'stage-face', 'aria-hidden': 'true' }, [s.face]), h('b', null, [s.label]), h('small', null, [s.stage])
      ]));
    });
    sh.body.appendChild(tabs);
    sh.body.appendChild(h('div', { class: 'sem-head' }, [h('h2', null, [sem.label + ' · ' + sem.stage + ' · ' + sem.age + ' tuổi']), h('p', null, [sem.intro || '']), h('small', { lang: 'zh-CN' }, [sem.book])]));
    var list = h('ol', { class: 'days' });
    if (sem.locked) list.appendChild(h('li', { class: 'card locked-note' }, [h('p', null, [sem.book + '. Chặng này sẽ mở khi giáo trình được đưa vào game.'])]));
    sem.lessons.forEach(function (l, i) {
      var open = unlocked(sem, i), ks = kst(l.id);
      list.appendChild(h('li', null, [h('button', { class: 'day' + (open ? '' : ' shut') + (l.id === state.cur ? ' cur' : ''), disabled: open ? null : 'disabled', onclick: function () { state.cur = l.id; save(); goLesson(); } }, [
        h('div', { class: 'clock' }, [h('b', null, [l.time]), h('small', null, [l.day])]),
        h('div', { class: 'day-body' }, [h('div', { class: 'day-vi' }, [l.vi]), h('div', { class: 'day-zh', lang: 'zh-CN' }, ['第' + l.no + '课 ' + l.zh]), h('small', { class: 'day-room' }, ['📘 第' + l.no + '课 · tr. ' + ((C.book.lessons[l.id] || {}).page || '?') + ' · ' + (ROOMVI[l.room] || '') + (state.story[l.id] ? ' · đã nói xong' : '')])]),
        h('div', { class: 'kdots', 'aria-label': 'Sao 4 khoa' }, open ? KHOA.map(function (k) { return h('span', { class: ks[k.id] ? 'on' : '', lang: 'zh-CN', title: k.name + ': ' + (ks[k.id] || 0) + ' sao' }, [k.zh]); }) : ['🔒'])
      ])]));
    });
    sh.body.appendChild(list);
    var rk = h('div', { class: 'ranks' });
    KHOA.forEach(function (k) { var n = khoaTotal(k.id); rk.appendChild(h('div', { class: 'rank k-' + k.id }, [h('b', { lang: 'zh-CN' }, [k.zh]), h('span', null, [k.name]), h('small', null, [rankOf(n)[1] + ' · ★' + n])])); });
    sh.body.appendChild(h('h3', null, ['Cấp bậc ở 4 khoa']));
    sh.body.appendChild(rk);
  }

  /* ---------- giải đáp từ vựng ---------- */
  function openHelp() {
    var l = curLesson().l;
    var sh = sheet('💡 Giải đáp từ vựng', 'help-sheet');
    var input = h('input', { id: 'help-q', type: 'search', placeholder: 'Gõ chữ Hán, pinyin hoặc tiếng Việt…', autocomplete: 'off' });
    var res = h('div', { class: 'help-res' });
    function row(v, where) {
      return h('button', { class: 'brow', onclick: function () { say(v[0]); } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [v[0]]), h('span', { class: 'py' }, [v[1]]), h('span', { class: 'vi' }, [v[3] + ' ' + v[2] + (where ? ' · ' + where : '')])]);
    }
    function render() {
      var raw = input.value.trim(), q = plain(raw); res.innerHTML = '';
      if (!q) { res.appendChild(h('p', { class: 'hint' }, ['Từ mới của bài ' + l.no + ' (chạm để nghe):'])); l.vocab.forEach(function (v) { res.appendChild(row(v)); }); return; }
      var n = 0;
      allLessons().forEach(function (x) { x.l.vocab.forEach(function (v) { if (n < 30 && (v[0].indexOf(raw) >= 0 || plain(v[1]).indexOf(q) >= 0 || plain(v[2]).indexOf(q) >= 0)) { res.appendChild(row(v, x.s.label + ' bài ' + x.l.no)); n++; } }); });
      if (!n) res.appendChild(h('p', { class: 'hint' }, ['Chưa có từ này trong giáo trình đã nạp.']));
    }
    input.addEventListener('input', render);
    render();
    sh.body.appendChild(input); sh.body.appendChild(res);
    input.focus();
  }

  /* ---------- sổ từ ---------- */
  function openBook() {
    var sh = sheet('字 Sổ từ của em', 'book-sheet'), any = false;
    allLessons().forEach(function (x) {
      if (!x.l.vocab.some(function (v) { return state.learned[v[0]]; })) return;
      any = true;
      var g = h('div', { class: 'book-grid' });
      x.l.vocab.forEach(function (v) { if (state.learned[v[0]]) g.appendChild(h('button', { class: 'brow', onclick: function () { say(v[0]); } }, [h('span', { class: 'zh', lang: 'zh-CN' }, [v[0]]), h('span', { class: 'py' }, [v[1]]), h('span', { class: 'vi' }, [v[2]])])); });
      sh.body.appendChild(h('section', null, [h('h3', null, [x.s.label + ' · Bài ' + x.l.no + ' · ' + x.l.zh]), g]));
    });
    if (!any) sh.body.appendChild(h('p', { class: 'hint' }, ['Chưa có từ nào. Qua một khoa bất kỳ là sổ từ sẽ có chữ.']));
  }

  /* ---------- cài đặt ---------- */
  function openSettings() {
    var sh = sheet('⚙ Cài đặt', 'settings-sheet');
    function toggle(id, label, key) {
      var inp = h('input', { id: id, type: 'checkbox' }); inp.checked = !!state.settings[key];
      inp.addEventListener('change', function () { state.settings[key] = inp.checked; save(); });
      return h('label', { class: 'switch', for: id }, [inp, h('span', null, [label])]);
    }
    var rate = h('input', { id: 'rate', type: 'range', min: '0.5', max: '1.2', step: '0.1', value: String(state.settings.rate) });
    rate.addEventListener('change', function () { state.settings.rate = +rate.value; save(); say('你好，我是盼盼。'); });
    var micInfo = h('p', { class: 'fine' }, [mic.off ? '🎤 ' + mic.why : '🎤 Máy này có nhận giọng nói. Lần đầu bấm 🎤, trình duyệt sẽ hỏi quyền micro.']);
    var confirmBox = h('div', { class: 'confirm', hidden: 'hidden' }, [
      h('p', null, ['Xóa toàn bộ sao, cấp bậc, sổ từ và tên nhân vật trên máy này?']),
      h('div', { class: 'row' }, [btn('Giữ lại', function () { confirmBox.hidden = true; }), btn('Xóa và chơi lại', function () {
        state = { profile: null, stars: {}, learned: {}, khoa: {}, story: {}, cur: null, settings: state.settings }; save(); closeSheet(); viewSem = null; renderOnboard();
      }, 'danger')])
    ]);
    [h('div', { class: 'form' }, [
      toggle('set-py', 'Hiện phiên âm pinyin', 'py'), toggle('set-vi', 'Hiện nghĩa tiếng Việt', 'vi'),
      h('label', { for: 'rate' }, ['Tốc độ đọc']), rate,
      btn('🔊 Thử giọng đọc', function () { say('你好！汉语不太难。'); }),
      micInfo, h('hr'),
      btn('Chơi lại từ đầu', function () { confirmBox.hidden = false; }, 'danger'), confirmBox,
      h('p', { class: 'fine' }, ['Tiến độ lưu ngay trên máy này. Giáo trình: ' + C.semesters.filter(function (s) { return !s.locked; }).map(function (s) { return s.label + ' – ' + s.book; }).join('; ') + '. Dữ liệu nét chữ: hanzi-writer-data (Arphic PL).'])
    ])].forEach(function (x) { sh.body.appendChild(x); });
  }

  if (state.profile) startGame(); else renderOnboard();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !window.__ARTIFACT__) navigator.serviceWorker.register('sw.js').catch(function () {});
})();
