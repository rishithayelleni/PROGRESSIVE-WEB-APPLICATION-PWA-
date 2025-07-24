importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSy...xyz",
  authDomain: "codtechshop.firebaseapp.com",
  projectId: "codtechshop",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Background Message', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'images/icon-192.png'
  });
});
