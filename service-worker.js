const CACHE_NAME = 'agrifarmers-v2.0';
const STATIC_CACHE_NAME = 'agrifarmers-static-v2.0';
const DYNAMIC_CACHE_NAME = 'agrifarmers-dynamic-v2.0';

// ABSOLUTE URLs for GitHub Pages
const STATIC_ASSETS = [
  'https://jayantshringi.github.io/AgriFarmers-SIH-2025/',
  'https://jayantshringi.github.io/AgriFarmers-SIH-2025/index.html',
  'https://jayantshringi.github.io/AgriFarmers-SIH-2025/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.tailwindcss.com'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing v2.0...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating v2.0...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  
  // For same-origin requests, use cache-first
  if (requestUrl.origin === location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              // Don't cache if not a valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone the response for cache
              const responseToCache = response.clone();
              caches.open(DYNAMIC_CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return response;
            })
            .catch(() => {
              // For offline page fallback
              if (event.request.headers.get('accept').includes('text/html')) {
                return caches.match('https://jayantshringi.github.io/AgriFarmers-SIH-2025/');
              }
            });
        })
    );
    return;
  }

  // For API calls, use network-first
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response for cache
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseClone);
          });
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request);
      })
  );
});

// Message event for updating cache
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
