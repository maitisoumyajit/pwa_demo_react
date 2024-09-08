self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/main.js',
          // Add other assets to cache as needed
        ]);
      })
    );
  });