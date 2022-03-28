importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.NetworkFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        })
      ],
    }),
  );

workbox.precaching.precacheAndRoute([]);
