// Service Worker Registration Helper
(function() {
    'use strict';
    
    // Check for service worker support
    if (!('serviceWorker' in navigator)) {
        console.log('Service workers are not supported');
        return;
    }
    
    // Wait for window load
    window.addEventListener('load', function() {
        // Register service worker with timeout
        const registrationTimeout = setTimeout(() => {
            console.log('Service worker registration timeout');
        }, 5000);
        
        navigator.serviceWorker.register('service-worker.js', {
            scope: './'
        })
        .then(function(registration) {
            clearTimeout(registrationTimeout);
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                console.log('ServiceWorker update found');
                
                newWorker.addEventListener('statechange', () => {
                    switch (newWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                console.log('New or updated content is available, please refresh.');
                                // Optional: Show update notification to user
                                if ('showToast' in window) {
                                    showToast('New version available! Refresh for updates.', 'info');
                                }
                            }
                            break;
                    }
                });
            });
        })
        .catch(function(err) {
            clearTimeout(registrationTimeout);
            console.log('ServiceWorker registration failed: ', err);
        });
        
        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', event => {
            console.log('Message from Service Worker:', event.data);
        });
    });
    
    // Handle offline/online events
    window.addEventListener('online', () => {
        console.log('App is online');
        // Sync any pending data
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'SYNC_DATA'
            });
        }
    });
    
    window.addEventListener('offline', () => {
        console.log('App is offline');
    });
})();