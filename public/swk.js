// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
   console.log('installed');
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    console.log('activated');
});

// The fetch handler serves responses for same-origin resources from a cache.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    console.log('fetched');
});