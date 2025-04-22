  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCwXhqItoiPUlC6tC8glIQGJHI6B-y4pbU",
    authDomain: "projeto-test-login.firebaseapp.com",
    databaseURL: "https://projeto-test-login-default-rtdb.firebaseio.com",
    projectId: "projeto-test-login",
    storageBucket: "projeto-test-login.firebasestorage.app",
    messagingSenderId: "176878008712",
    appId: "1:176878008712:web:a4f092be5ed0e4b0d1223d",
    measurementId: "G-06P97QTH9M"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore and export it
const db = getFirestore(app);
export { db };

// Initialize Firebase Analytics and export it (se necessário)
// const analytics = getAnalytics(app);
// export { analytics };

// Você também pode exportar o app se precisar dele em outros lugares
export { app };