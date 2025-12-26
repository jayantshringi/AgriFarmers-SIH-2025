// Enhanced Service Worker for Agrifarmers PWA
const CACHE_NAME = 'agrifarmers-v3.5';
const OFFLINE_URL = 'offline.html';

// Files to cache on install
const PRECACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './offline.html',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// External resources to cache (optional)
const RUNTIME_CACHE = {
  'font-css': [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ],
  'font-awesome': [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  ],
  'chartjs': [
    'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js'
  ]
};

// Install event - cache essential files
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(PRECACHE_FILES);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - Network first, cache fallback
self.addEventListener('fetch', event => {
  // Skip non-GET requests and chrome-extension requests
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Handle API requests differently
  if (event.request.url.includes('api.') || 
      event.request.url.includes('openweathermap')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful API responses for limited time
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached API response if available
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Return custom offline response for APIs
              return new Response(
                JSON.stringify({ 
                  offline: true, 
                  message: 'You are offline. Using cached data.' 
                }),
                { 
                  headers: { 'Content-Type': 'application/json' }
                }
              );
            });
        })
    );
    return;
  }

  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // For other resources (CSS, JS, images)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          // Update cache in background
          fetchAndUpdateCache(event.request);
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Cache the new resource
            if (response.ok) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // If it's an image, return a placeholder
            if (event.request.destination === 'image') {
              return caches.match('./icons/icon-192x192.png');
            }
            return new Response('Offline content not available', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'sync-form-data') {
    console.log('[Service Worker] Background sync for form data');
    event.waitUntil(syncFormData());
  }
});

// Push notification handler
self.addEventListener('push', event => {
  const options = {
    body: event.data?.text() || 'New update from Agrifarmers',
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/',
      dateOfArrival: Date.now()
    },
    actions: [
      {
        action: 'open',
        title: 'Open App'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Agrifarmers', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to fetch and update cache in background
function fetchAndUpdateCache(request) {
  fetch(request)
    .then(response => {
      if (response.ok) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });
      }
    })
    .catch(() => {
      // Silently fail - we already have cached version
    });
}

// Background sync for form data
async function syncFormData() {
  // In a real app, you would sync pending form submissions
  console.log('[Service Worker] Syncing form data...');
}