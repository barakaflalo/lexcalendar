var CACHE = 'lexcalendar-v2';
var ASSETS = [
  '/lexcalendar/',
  '/lexcalendar/index.html',
  '/lexcalendar/manifest.json',
  '/lexcalendar/icon-192.png',
  '/lexcalendar/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(ASSETS.filter(function(url){
        return !url.startsWith('https://fonts');
      }));
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  var url = e.request.url;
  if(url.includes('googleapis.com') || url.includes('gsi/client') || url.includes('accounts.google.com')){
    e.respondWith(fetch(e.request).catch(function(){ return new Response('', {status: 503}); }));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached) return cached;
      return fetch(e.request).then(function(response){
        if(response && response.status === 200 && response.type !== 'opaque'){
          var clone = response.clone();
          caches.open(CACHE).then(function(cache){ cache.put(e.request, clone); });
        }
        return response;
      }).catch(function(){
        if(e.request.destination === 'document'){
          return caches.match('/lexcalendar/index.html');
        }
        return new Response('', {status: 503});
      });
    })
  );
});
