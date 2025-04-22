// Importa SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCwXhqItoiPUlC6tC8glIQGJHI6B-y4pbU",
  authDomain: "projeto-test-login.firebaseapp.com",
  projectId: "projeto-test-login",
  storageBucket: "projeto-test-login.firebasestorage.app",
  messagingSenderId: "176878008712",
  appId: "1:176878008712:web:df9c98c8263ebec9d1223d",
  measurementId: "G-61BVYN8LDR"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Elementos HTML
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const id = document.getElementById("id");
const resultado = document.getElementById("resultado");

// Função CREATE
document.getElementById("btnCreate").onclick = () => {
  set(ref(db, "usuarios/" + id.value), {
    nome: nome.value,
    email: email.value
  }).then(() => {
    alert("Usuário cadastrado!");
  }).catch((err) => {
    alert("Erro: " + err);
  });
};

// Função READ
document.getElementById("btnRead").onclick = () => {
  const dbRef = ref(db);
  get(child(dbRef, "usuarios/" + id.value)).then((snapshot) => {
    if (snapshot.exists()) {
      resultado.innerText = JSON.stringify(snapshot.val(), null, 2);
    } else {
      resultado.innerText = "Usuário não encontrado.";
    }
  }).catch((error) => {
    resultado.innerText = "Erro ao buscar: " + error;
  });
};

// Função UPDATE
document.getElementById("btnUpdate").onclick = () => {
  update(ref(db, "usuarios/" + id.value), {
    nome: nome.value,
    email: email.value
  }).then(() => {
    alert("Atualizado com sucesso!");
  }).catch((err) => {
    alert("Erro ao atualizar: " + err);
  });
};

// Função DELETE
document.getElementById("btnDelete").onclick = () => {
  remove(ref(db, "usuarios/" + id.value)).then(() => {
    alert("Removido com sucesso!");
  }).catch((err) => {
    alert("Erro ao remover: " + err);
  });
};
