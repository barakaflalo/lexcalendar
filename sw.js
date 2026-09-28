/* LexCalendar Service Worker — network-first למעטפת, בלי התערבות בבקשות ממקור אחר.
   בכל עדכון: להעלות את VERSION (אחרת משתמשים יקבלו גרסה ישנה מהמטמון). */
var VERSION = '3.2.0';
var CACHE = 'lexcalendar-app-' + VERSION;
var SHELL = ['./', './index.html', './appnest-assistant.js?v=3.2.0', './lex-laws.js?v=3.2.0', './lex-help.js?v=3.2.0', './manifest.json', './icon-192.png', './icon-512.png', './privacy_policy.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(SHELL.map(function (u) { return c.add(new Request(u, { cache: 'no-cache' })).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf('lexcalendar') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // ממקור אחר (ספקי AI, גוגל, פונטים, CDN) — לא נוגעים, תמיד ישר לרשת
  if (url.origin !== self.location.origin) return;
  // מעטפת האפליקציה: קודם רשת (בדיקת עדכון מול השרת), נפילה למטמון באופליין
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || (req.mode === 'navigate' ? caches.match('./index.html') : new Response('', { status: 503 }));
      });
    })
  );
});
