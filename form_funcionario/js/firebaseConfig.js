// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Configuração correta do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDl-9nDWzYH9YQ71Kx6eNRBdPgzNRxgjfU",
  authDomain: "teste2-ba2d6.firebaseapp.com",
  databaseURL: "https://teste2-ba2d6-default-rtdb.firebaseio.com",
  projectId: "teste2-ba2d6",
  storageBucket: "teste2-ba2d6.appspot.com", // Corrigido aqui
  messagingSenderId: "504728021083",
  appId: "1:504728021083:web:faf1e856609d7a9c0bb77e"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Firestore
const db = getFirestore(app);
export { db, app };
