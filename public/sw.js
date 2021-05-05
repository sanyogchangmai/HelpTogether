// const staticCacheName = 'site-static';
// const offlineAssets = [
//     '/',
//     '/request',
//     '/register',
//     '/find',
//     '/about',
//     '/fallback',
//     '/css/basic.css',
//     '/css/index.css',
//     '/css/request.css',
//     '/css/register.css',
//     '/css/find.css',
//     '/css/fallback.css',
//     '/css/about.css',
//     '/assets/thelogo.png',
//     '/assets/nodata.png',
//     '/assets/volunteers.png',
//     'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
//     'https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap',
//     'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap',
//     'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
//     'https://code.jquery.com/jquery-3.5.1.slim.min.js',
//     'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
//     'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js'
//   ];

// ! Install service worker
self.addEventListener('install', evt => {
    console.log('service worker installed');
    // evt.waitUntil(
    //   caches.open(staticCacheName).then((cache) => {
    //     console.log('caching shell assets');
    //     cache.addAll(offlineAssets);
    //   })
    // );
  });


// ! activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
    // evt.waitUntil(
    //   caches.keys().then(keys => {
        //console.log(keys);
    //     return Promise.all(keys
    //       .filter(key => key !== staticCacheName)
    //       .map(key => caches.delete(key))
    //     );
    //   })
    // );
  });


// ! fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    // evt.respondWith(
    //   caches.match(evt.request).then(cacheRes => {
    //     return cacheRes || fetch(evt.request);
    //   }).catch(() => caches.match('/fallback'))
    // );
  });