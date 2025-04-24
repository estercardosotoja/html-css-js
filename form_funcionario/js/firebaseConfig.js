// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuração correta do Firebase
const firebaseConfig = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: " ",
  storageBucket: " ", 
  messagingSenderId: " ",
  appId: " "
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Firestore
const db = getFirestore(app);
export { db, app };
