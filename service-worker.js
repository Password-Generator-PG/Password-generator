
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'))
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts'
  });
  const imageRoute = new Route(({ request, sameOrigin }) => {
  return sameOrigin && request.destination === 'image'
}, new CacheFirst());

// Register the new route
registerRoute(imageRoute);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
