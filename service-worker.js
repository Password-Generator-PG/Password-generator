
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');


workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)')
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts'
  })
);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
