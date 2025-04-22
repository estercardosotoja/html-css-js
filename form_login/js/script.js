import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const cmpNome = document.getElementById('nome');
const cmpEmail = document.getElementById('email');
const cmpCargo = document.getElementById('cargo');
const btnEnviar = document.getElementById('btnEnviar');

async function adicionarNovoAluno(nome, email, cargo) {
  try {
    const docRef = await addDoc(collection(db, "funcionario"), {
      nome: nome,
      cargo: email,
      turma: cargo,
      timestamp: new Date()
    });
    console.log("Aluno cadastrado com ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Erro ao adicionar aluno: ", error);
    alert('Erro ao cadastrar o aluno. Tente novamente.');
    return false;
  }
}

// Função para lidar com o envio do formulário de cadastro
async function lidarSubmissaoFormulario(event) {
  event.preventDefault();

  let nome = cmpNome.value.trim();
  let email = cmpEmail.value.trim();
  let cargo = cmpCargo.value.trim();

  if (nome && cargo && email) {
    desabilitarBotao(btnEnviar, 'Cadastrando...');
    const sucesso = await adicionarNovoAluno(nome, email, cargo);
    habilitarBotao(btnEnviar, 'Cadastrar');

    if (sucesso) {
      nome.value = '';
      email.value = '';
      cargo.value = '';
      carregarListaDeAlunos(); // Atualiza a lista após o cadastro
      alert('Aluno cadastrado com sucesso!');
    }
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

