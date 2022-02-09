// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
  import { getPerformance } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-performance.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqTJCEkyxM4g00FjuCrsQEAwiyH9xSwe0",
    authDomain: "k-plus69.firebaseapp.com",
    databaseURL: "https://k-plus69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "k-plus69",
    storageBucket: "k-plus69.appspot.com",
    messagingSenderId: "344009833878",
    appId: "1:344009833878:web:ffcde4ce75960ff7bc71b7",
    measurementId: "G-L7TSLESHTH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const perf = getPerformance(app);
