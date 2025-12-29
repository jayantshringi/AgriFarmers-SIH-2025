// Simple service worker that won't cause errors
const CACHE_NAME = 'agrifarmers-v1';

self.addEventListener('install', event => {
  console.log('✅ Service Worker installing');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Skip non-GET requests and chrome-extension
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://') ||
      event.request.url.includes('extension')) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return new Response('Network error', { 
          status: 408, 
          statusText: 'Network error' 
        });
      })
  );
});
