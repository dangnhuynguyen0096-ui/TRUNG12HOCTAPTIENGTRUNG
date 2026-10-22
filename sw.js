/* Lưu game vào máy để chơi offline. Đổi số phiên bản khi cập nhật nội dung. */
var CACHE = 'lon-len-tieng-trung-v4';
var FILES = ['./', './index.html', './style.css', './app.js', './world.js', './content-hk1.js', './content-hk1b.js', './content-hk1-book.js', './content-hk1c.js', './strokes-hk1.js', './vendor/three.min.js', './vendor/OrbitControls.js', './vendor/hanzi-writer.min.js', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(function (hit) {
    var net = fetch(e.request).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
      return res;
    }).catch(function () { return hit; });
    return hit || net;
  }));
});
