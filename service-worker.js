const CACHE_NAME = 'agrifarmers-v1.0';
const STATIC_CACHE_NAME = 'agrifarmers-static-v1.0';
const DYNAMIC_CACHE_NAME = 'agrifarmers-dynamic-v1.0';

// Files to cache immediately on install
const STATIC_ASSETS = [
  '/AgriFarmers-SIH-2025/',
  '/AgriFarmers-SIH-2025/index.html',
  '/AgriFarmers-SIH-2025/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
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

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
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

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // For API calls, use network-first strategy
  if (event.request.url.includes('api.openweathermap.org')) {
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
    return;
  }

  // For static assets, use cache-first strategy
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
              return caches.match('/AgriFarmers-SIH-2025/');
            }
          });
      })
  );
});