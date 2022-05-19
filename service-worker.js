
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

self.addEventListener('notificationclick', function(eb) {
  var notification = eb.notification;
  var primaryKey = notification.data.primaryKey;
  var action = eb.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://github.com/Password-Generator-PG/Password-generator/releases/latest/');
    notification.close();
  }
});

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
new RegExp('https://password-generator.netlify.app/(.*)'),
new RegExp(' https://d33wubrfki0l68.cloudfront.net/(.*)'))
  new workbox.strategies.NetworkFirst({
    cacheName: 'google-fonts',
    cacheName: 'PG',
    cacheName: 'cloudfront'
  });
  // Register the new route
//registerRoute(imageRoute);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
