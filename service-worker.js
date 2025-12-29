// AgriFarmers Service Worker
const CACHE_NAME = 'agrifarmers-v3.0';
const APP_STATIC_ASSETS = [
  '/AgriFarmers-SIH-2025/',
  '/AgriFarmers-SIH-2025/index.html',
  '/AgriFarmers-SIH-2025/manifest.json',
  '/AgriFarmers-SIH-2025/script.js',
  '/AgriFarmers-SIH-2025/icons/icon-144x144.png',
  '/AgriFarmers-SIH-2025/icons/icon-192x192.png',
  '/AgriFarmers-SIH-2025/icons/icon-512x512.png'
];

// Install event - cache all static assets
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Caching app shell');
        return cache.addAll(APP_STATIC_ASSETS);
      })
      .then(() => {
        console.log('🎯 Service Worker installed and ready');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🔄 Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        // Fetch from network
        return fetch(fetchRequest)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the new response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // If network fails, show offline page or fallback
            if (event.request.url.includes('.html')) {
              return caches.match('/AgriFarmers-SIH-2025/index.html');
            }
            
            // For API requests, return empty response
            return new Response(JSON.stringify({
              error: 'Network error',
              message: 'You are offline'
            }), {
              headers: { 'Content-Type': 'application/json' }
            });
          });
      })
  );
});

// Handle push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'New update from AgriFarmers',
    icon: '/AgriFarmers-SIH-2025/icons/icon-192x192.png',
    badge: '/AgriFarmers-SIH-2025/icons/icon-72x72.png',
    tag: 'agrifarmers-notification',
    data: {
      url: data.url || '/AgriFarmers-SIH-2025/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'AgriFarmers', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        // If a window is already open, focus it
        for (const client of clientList) {
          if (client.url === event.notification.data.url && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Otherwise open a new window
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data.url);
        }
      })
  );
});
