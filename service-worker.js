// AgriFarmers Service Worker - Optimized for PWA Installation
const CACHE_NAME = 'agrifarmers-v5';
const urlsToCache = [
    './',
    './index.html',
    './script.js',
    './manifest.json'
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

// Fetch Strategy: Network First, Cache Fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip API requests (they should always go to network)
    const url = new URL(event.request.url);
    if (url.hostname.includes('api.openweathermap.org') ||
        url.hostname.includes('nominatim.openstreetmap.org') ||
        url.hostname.includes('ipapi.co') ||
        url.hostname.includes('data.gov.in') ||
        url.hostname.includes('api.allorigins.win')) {
        
        // Network only for API requests
        event.respondWith(fetch(event.request));
        return;
    }
    
    // For app resources, try network first, then cache
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                
                // Clone the response
                const responseToCache = response.clone();
                
                // Cache the new response for future offline use
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                
                return response;
            })
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        
                        // If not in cache, return offline page for HTML requests
                        if (event.request.headers.get('accept').includes('text/html')) {
                            return caches.match('./index.html');
                        }
                        
                        return null;
                    });
            })
    );
});

// Handle Push Notifications
self.addEventListener('push', (event) => {
    if (!event.data) return;
    
    let data = {};
    try {
        data = event.data.json();
    } catch (e) {
        data = {
            title: 'AgriFarmers',
            body: event.data.text() || 'New update from AgriFarmers'
        };
    }
    
    const options = {
        body: data.body || 'New update from AgriFarmers',
        icon: './icons/icon-192x192.png',
        badge: './icons/icon-192x192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        }
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'AgriFarmers', options)
    );
});

// Handle Notification Click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Check if there's already a window/tab open
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

// Handle Sync Events
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncAppData());
    }
});

// Sync app data in background
async function syncAppData() {
    // This function can be extended to sync data when online
    console.log('Syncing app data...');
    return Promise.resolve();
}

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
