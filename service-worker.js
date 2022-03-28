
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');


workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst({
    cacheName: 'google-fonts'
  })
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
    }),
  );
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
