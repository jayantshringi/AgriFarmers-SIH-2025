// Simple Service Worker - No blocking
const CACHE_NAME = 'agrifarmers-v1';

self.addEventListener('install', (event) => {
    // Skip waiting to activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Claim clients immediately
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Network-first strategy
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request);
            })
    );
});
