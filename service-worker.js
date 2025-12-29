// AgriFarmers Service Worker
const CACHE_NAME = 'agrifarmers-v4';
const urlsToCache = [
    './',
    './index.html',
    './script.js',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.tailwindcss.com'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    console.log('🔄 Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('✅ Service Worker: Caching app shell');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('✅ Service Worker: Installation complete');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Installation failed:', error);
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    console.log('🔄 Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            console.log('✅ Service Worker: Activation complete');
            return self.clients.claim();
        })
        .catch(error => {
            console.error('❌ Service Worker: Activation failed:', error);
        })
    );
});

// Fetch Strategy: Cache First, Network Fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and external API requests
    if (event.request.method !== 'GET') return;
    
    // Skip API requests (they should always go to network)
    if (event.request.url.includes('api.openweathermap.org') ||
        event.request.url.includes('nominatim.openstreetmap.org') ||
        event.request.url.includes('ipapi.co')) {
        event.respondWith(fetch(event.request));
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Otherwise fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Check if we received a valid response
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
                        // If both cache and network fail, return offline fallback
                        if (event.request.headers.get('accept').includes('text/html')) {
                            return caches.match('./index.html');
                        }
                        // For other file types, return null
                        return null;
                    });
            })
    );
});

// Handle Push Notifications (Optional)
self.addEventListener('push', (event) => {
    if (!event.data) return;
    
    const data = event.data.json();
    const options = {
        body: data.body || 'New update from AgriFarmers',
        icon: './icons/icon-192x192.png',
        badge: './icons/icon-192x192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Open App'
            },
            {
                action: 'close',
                title: 'Close'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'AgriFarmers', options)
    );
});

// Handle Notification Click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'close') {
        return;
    }
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Check if there's already a window/tab open with the target URL
                for (const client of clientList) {
                    if (client.url.includes('./') && 'focus' in client) {
                        return client.focus();
                    }
                }
                // If not, open a new window/tab
                if (clients.openWindow) {
                    return clients.openWindow('./');
                }
            })
    );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Periodic background sync (if supported)
if (self.registration.periodicSync) {
    self.registration.periodicSync.register('update-content', {
        minInterval: 24 * 60 * 60 * 1000 // 1 day
    }).catch(error => {
        console.log('Periodic background sync failed:', error);
    });
}

// Background sync for offline data
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-weather-data') {
        event.waitUntil(syncWeatherData());
    }
});

// Sync weather data in background
function syncWeatherData() {
    // Implement background sync logic here
    return Promise.resolve();
}
