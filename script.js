// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("SW Registered"))
    .catch(err => console.log("SW registration failed", err));
}

// Add to cart logic
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Show cart
window.onload = function () {
  if (document.getElementById('cart-list')) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const list = document.getElementById("cart-list");
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
};

// Firebase config from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSy...xyz",
  authDomain: "codtechshop.firebaseapp.com",
  projectId: "codtechshop",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Ask permission to send notifications
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    messaging.getToken({ vapidKey: "YOUR_PUBLIC_VAPID_KEY" })
      .then(token => {
        console.log("✅ FCM Token:", token);
        // You can send this token to your backend if needed
      })
      .catch(err => {
        console.log("❌ Token error:", err);
      });
  } else {
    console.log("❌ Notification permission denied");
});
