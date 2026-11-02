/* Lưu app để học offline. Lấy bản mới từ mạng trước, mất mạng mới dùng bản đã lưu. */
var CACHE = 'van-hoc-tq-v1';
var FILES = ['./', './index.html', './data/index.js', './data/vhtq.js', './manifest.webmanifest', '../hoc/style.css', '../hoc/app.js', '../hoc/icon.svg'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('van-hoc-tq') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(function (res) {
    if (res && res.ok && new URL(e.request.url).origin === location.origin) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
    return res;
  }).catch(function () { return caches.match(e.request); }));
});
