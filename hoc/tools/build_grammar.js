/* Sinh phần ngữ pháp từng bài cho 3 môn thương mại từ tools/ngu-phap/<môn>.js, ghi vào cuối data/<môn>.js (giữa hai dấu @ngu-phap).
   Chạy: node hoc/tools/build_grammar.js   (thêm --report để xem điểm nào không tìm thấy câu trong bài)
   Nguồn mỗi môn: module.exports = { prefix, lessons: { n: [điểm, ...] } }
   Một điểm giảng đầy đủ: { id, lv (1 cơ bản, 2 trung cấp, 3 nâng cao), h (mẫu), g (nghĩa ngắn), s (cấu trúc), m (ý nghĩa & cách dùng),
     u (dùng trong thương mại), f (regex tìm câu trong bài), k (từ khóa để đục lỗ bài điền), e [[câu, dịch]], x [[sai, đúng, lý do]], c (phân biệt) }
   Điểm đã giảng ở bài khác: chỉ ghi chuỗi id (hoặc { ref: id, lv }) → app hiện tóm tắt + câu trong bài này + link tới nơi giảng. */
const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..'), SUBS = ['hntm', 'dtm', 'tmns'];
const report = process.argv.includes('--report');
const DB = {};
global.HOC = { add: s => { DB[s.id] = s; }, gram: () => {} };
const BEGIN = '/* @ngu-phap-begin */', END = '/* @ngu-phap-end */';
function strip(src) { const a = src.indexOf(BEGIN); return a < 0 ? src : src.slice(0, a).replace(/\s+$/, '\n'); }
for (const id of SUBS) eval(strip(fs.readFileSync(path.join(D, 'data', id + '.js'), 'utf8')));
const SRC = {}; for (const id of SUBS) SRC[id] = require('./ngu-phap/' + id + '.js');
const NAME = { hntm: 'HNTM viết', dtm: 'Đọc thương mại', tmns: 'HNTM nghe nói' };

function sentencesOf(l) {
  const out = [];
  for (const t of l.texts) {
    if (t.kind === '语法') continue;
    const src = t.zh ? t.zh : t.p;
    for (let p of src) {
      p = p.replace(/^[\^>|]/, '').replace(/^## .*/, '').replace(/\{\d+\}/g, '……');
      for (let s of (p.match(/[^。！？；\n]+[。！？；」”]*/g) || [])) {
        s = s.trim().replace(/^[^\s：:，。！？“”]{1,8}[：:]/, '').replace(/^(\d+[．.、]|（\d+）|\(\d+\))\s*/, '').trim();
        if (/[\u4e00-\u9fff]/.test(s) && !/[a-zàáảãạăâđêôơư]{3,}/i.test(s.replace(/[A-Z]{2,}/g, ''))) out.push(s);
      }
    }
  }
  return [...new Set(out)];
}
function findIn(l, re, n) {
  if (!re) return [];
  const ok = sentencesOf(l).filter(s => re.test(s) && s.length >= 6 && s.length <= 80);
  ok.sort((a, b) => Math.abs(a.length - 30) - Math.abs(b.length - 30));
  return ok.slice(0, n);
}
/* lượt 1: chỗ giảng đầy đủ */
const DEF = {}, ALSO = {};
for (const id of SUBS) for (const [n, pts] of Object.entries(SRC[id].lessons)) for (const p of pts) if (typeof p === 'object' && p.id) {
  if (DEF[p.id]) throw new Error('trùng id ' + p.id);
  DEF[p.id] = { p, home: { s: id, t: SRC[id].prefix + n + '-np', n: +n, name: NAME[id] } };
}
for (const id of SUBS) for (const [n, pts] of Object.entries(SRC[id].lessons)) for (const p of pts) {
  const r = typeof p === 'string' ? p : p.ref; if (!r) continue;
  if (!DEF[r]) throw new Error('không có điểm ' + r + ' (' + id + ' bài ' + n + ')');
  (ALSO[r] = ALSO[r] || []).push({ s: id, t: SRC[id].prefix + n + '-np', n: +n, name: NAME[id] });
}
const miss = [];
for (const id of SUBS) {
  const sub = DB[id], out = [];
  for (const l of sub.lessons) {
    const pts = SRC[id].lessons[l.n]; if (!pts) continue;
    const gp = [], zh = [], mc = [], fill = [], g = [];
    for (const raw of pts) {
      const isRef = typeof raw === 'string' || raw.ref;
      const d = isRef ? DEF[typeof raw === 'string' ? raw : raw.ref] : { p: raw };
      const p = d.p, re = p.f ? (p.f instanceof RegExp ? p.f : new RegExp(p.f)) : null;
      const b = findIn(l, re, isRef ? 2 : 3);
      if (!b.length) miss.push(id + ' bài ' + l.n + ' · ' + p.h + (isRef ? ' (link)' : ''));
      if (isRef) {
        gp.push({ ref: p.id, lv: raw.lv || p.lv, h: p.h, g: p.g, s: p.s.replace(/\*\*/g, ''), b, home: d.home });
      } else {
        const o = { id: p.id, lv: p.lv, h: p.h, g: p.g, s: p.s, m: p.m };
        for (const k of ['u', 'e', 'x', 'c']) if (p[k]) o[k] = p[k];
        if (b.length) o.b = b;
        if (ALSO[p.id]) o.also = ALSO[p.id];
        gp.push(o);
        (p.e || []).forEach(e => zh.push(e[0]));
        (p.x || []).forEach((x, i) => mc.push(['（' + p.h + '）', (mc.length % 2 ? [x[1], x[0]] : [x[0], x[1]]), mc.length % 2 ? 0 : 1]));
        (p.e || []).forEach(e => { if (p.k && e[0].includes(p.k) && fill.filter(f => f[2] === p.id).length < 1) fill.push([e[0].replace(p.k, '___'), p.k, p.id]); });
      }
      b.forEach(s => zh.push(s));
      if (isRef && p.k) { const s = b.find(s => s.includes(p.k)); if (s) fill.push([s.replace(p.k, '___'), p.k, p.id]); }
    }
    gp.sort((a, b) => a.lv - b.lv);
    g.length = 0; gp.forEach(p => g.push([p.h, p.g, (p.b && p.b[0]) || (p.e && p.e[0] && p.e[0][0]) || '']));
    const words = [...new Set(fill.map(f => f[1]))].join(' · ');
    const ex = [];
    if (fill.length) ex.push({ t: 'fill', q: 'Điền từ còn thiếu (' + words + ')', items: fill.map(f => [f[0], f[1]]) });
    if (mc.length) ex.push({ t: 'mc', q: 'Chọn câu đúng (mỗi câu một điểm ngữ pháp trong bài)', items: mc.map(m => ['Câu nào đúng? ' + m[0], m[1], m[2]]) });
    const heads = gp.map(p => p.h.replace(/（[^）]*）|\([^)]*\)/g, '').replace(/^[^：:]*[a-zà-ỹ][^：:]*[：:]\s*/i, '').split(/\s*\/\s*/)[0].replace(/^[…，、\s]+|[…，、：:\s]+$/g, '') || p.h);
    const t = { id: SRC[id].prefix + l.n + '-np', title: '语法 · ' + heads.slice(0, 4).join(' · ') + (heads.length > 4 ? ' …' : ''), kind: '语法',
      intro: (SRC[id].intro || {})[l.n], gp, zh: [...new Set(zh)],
      p: gp.map(p => '## ' + p.h + ' — ' + p.g), notes: [], ex, adv: { g } };
    if (!t.intro) delete t.intro;
    let i = l.texts.length;
    if (id === 'hntm') { const k = l.texts.findIndex(x => x.kind === '范文'); if (k >= 0) i = k; }
    else if (id === 'dtm') { const k = l.texts.findIndex(x => x.kind === '语言点'); if (k >= 0) i = k + 1; }
    else i = 1;
    out.push({ n: l.n, i, t });
  }
  const file = path.join(D, 'data', id + '.js');
  const body = strip(fs.readFileSync(file, 'utf8'));
  fs.writeFileSync(file, body + BEGIN + '\n/* Ngữ pháp từng bài (cơ bản → nâng cao), sinh từ hoc/tools/ngu-phap/' + id + '.js bằng hoc/tools/build_grammar.js — sửa ở file nguồn rồi chạy lại. */\nHOC.gram(\'' + id + '\', ' + JSON.stringify(out) + ');\n' + END + '\n');
  console.log(id + ': ' + out.length + ' bài, ' + out.reduce((a, o) => a + o.t.gp.length, 0) + ' điểm (' + out.reduce((a, o) => a + o.t.gp.filter(p => !p.ref).length, 0) + ' giảng đầy đủ)');
}
if (report) console.log('Không tìm thấy câu trong bài:\n  ' + miss.join('\n  '));
