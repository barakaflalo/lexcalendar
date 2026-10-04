/* ── AppNest · Cloudflare Pages fix (Oct 2026) ──
   Cloudflare redirects *.html to clean URLs (/index.html -> /). Chrome refuses a
   "redirected" response that a Service Worker hands to a page load (ERR_FAILED).
   This strips the redirect flag from every response the SW fetches or reads from cache. */
(function(){
  var NB={101:1,204:1,205:1,304:1};
  function clean(r){
    if(!r||!r.redirected||NB[r.status])return r;
    return r.blob().then(function(b){return new Response(b,{status:r.status,statusText:r.statusText,headers:r.headers});});
  }
  var _fetch=self.fetch.bind(self);
  self.fetch=function(input,init){
    if(input&&typeof input==='object'&&input.mode==='navigate')input=input.url;
    return _fetch(input,init).then(clean);
  };
  var cm=Cache.prototype.match;
  Cache.prototype.match=function(){return cm.apply(this,arguments).then(clean);};
  var sm=CacheStorage.prototype.match;
  CacheStorage.prototype.match=function(){return sm.apply(this,arguments).then(clean);};
})();

/* LexCalendar Service Worker — network-first למעטפת, בלי התערבות בבקשות ממקור אחר.
   בכל עדכון: להעלות את VERSION (אחרת משתמשים יקבלו גרסה ישנה מהמטמון). */
var VERSION = '3.3.0';
var CACHE = 'lexcalendar-app-' + VERSION;
var SHELL = ['./', './index.html', './appnest-assistant.js?v=3.3.0', './lex-laws.js?v=3.3.0', './lex-help.js?v=3.3.0', './manifest.json', './icon-192.png', './icon-512.png', './privacy_policy.html'];

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
