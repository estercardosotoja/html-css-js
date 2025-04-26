import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// SALVANDO DADOS NO BANCO 
function getInputs() {
    return {
        nome: document.getElementById('nome'),
        idade: document.getElementById('idade'),
        cargo: document.getElementById('cargo')
    };
}

function getValores({ nome, idade, cargo }) {
    return {
        nome: nome.value.trim(),
        idade: parseInt(idade.value),
        cargo: cargo.value.trim()
    };
}

function limpar({nome, idade, cargo}){
    nome.value = ''
    idade.value = ''
    cargo.value = ''
}

document.getElementById("btnEnviar").addEventListener('click', async function(){
    const Inputs = getInputs(); 
    const dados =getValores(Inputs)

    console.log("Inputs:", Inputs)
    console.log("Dados", dados)

    if (!dados.idade || !dados.nome || !dados.cargo){
        alert("Preencha todos os campos.");
        return
    } 
    try{
        const ref = await addDoc(collection(db, "funcionarios"), dados);
        console.log("ID do documento", ref.id); 
        limpar(Inputs)
        alert("Funcionário cadastrado com sucesso: ")
    }catch (e){
        console.log("Erro: ", e)
    }
});

// CONSULTAR (LISTAR) OS DADOS DO BANCO

async function buscarFuncionarios() {
    const dadosBanco = await getDocs(collection(db, "funcionarios"));
    console.log(dadosBanco)
    const funcionarios = []; 
    for (let funcionario of dadosBanco.docs){
        funcionarios.push({id: funcionario.id, ...funcionario.data() });
    }
    console.log(funcionarios)
    return funcionarios
}

const listaFuncionariosDiv = document.getElementById("listar-funcionarios")

async function carregarListaDeFuncionarios() {
    listaFuncionariosDiv.innerHTML = '<p> Carregando lista de Funcionarios... </p>';
    try {
        let funcionario = await buscarFuncionarios();
        console.log(funcionario)
        renderizarListaDeFuncionarios(funcionario);
    } catch (error) {
        console.log("Erro ao carregar a lista de funcionarios: ", error);
        listaFuncionariosDiv.innerHTML = '<p> Erro ao carregar a lista de funcionários... </p>';
    }
}

function renderizarListaDeFuncionarios(funcionarios){
    listaFuncionariosDiv.innerHTML= '';

    if (funcionarios.length === 0){
        listaFuncionariosDiv.innerHTML = '<p> Nenhum Funcionário cadastrado ainda ;( </p> ';
        return 
    }
    for (let funcionario of funcionarios) {
        const funcionarioDiv = document.createElement('div');
        funcionarioDiv.innerHTML = `
            <strong> Nome: </strong> ${funcionario.nome} <br>
            <strong> Idade: </strong> ${funcionario.idade} <br>
            <strong> Cargo: </strong> ${funcionario.cargo} <br>
            <button class="btn-Excluir" data-id="${funcionario.id}"> Excluir </button> 
            <button class="btn-Editar" data-id="${funcionario.id}"> Editar </button>
            <hr>
        `
        listaFuncionariosDiv.appendChild(funcionarioDiv);
    }
}

document.addEventListener("DOMContentLoaded", carregarListaDeFuncionarios);

// EXCLUIR DADOS DO BANCO DE DADOS

async function excluirFuncionario(idFuncionario) {
    try{
        const documentoDeletar = doc(db, "funcionarios", idFuncionario);
        await deleteDoc(documentoDeletar);
        console.log("Funcionario com ID" + idFuncionario + "foi excluído.");
        return true;
    }catch (erro){
        console.log("Erro ao excluir o funcionario", erro);
        alert("Ocorreu um erro ao excluir funcionario. Tente novamente");
        return false;
    }
}

async function lidarClique(eventoDeClique) {
    const btnExcluir = eventoDeClique.target.closest('.btn-Excluir');
    
    if(btnExcluir){
        const certeza = confirm("Tem certeza que deseja fazer essa exclusão?")
        if(certeza){
            if (btnExcluir){
                const idFuncionario = btnExcluir.dataset.id;
                const exclusaoBemSucedida = await excluirFuncionario(idFuncionario);
        
                if(exclusaoBemSucedida){
                    carregarListaDeFuncionarios();
                    alert('Funcionário excluído com sucesso!');
                }
            }
        }else {
            alert("Exclusão cancelada");
        }
    }

    const btnEditar = eventoDeClique.target.closest(".btn-Editar");
    
    if (btnEditar){
        const idFuncionario = btnEditar.dataset.id; 
        const funcionario = await buscarFuncionario(idFuncionario);
        
        if (!funcionario){
            alert("Funcionário não encontrado.");
            return;
        }
        
        const edicao = getValoresEditar(); 
        
        edicao.editarNome.value = funcionario.nome;
        edicao.editarIdade.value = funcionario.idade;
        edicao.editarCargo.value = funcionario.cargo;
        edicao.editarId.value = funcionario.id;

        edicao.formularioEdicao.style.display = 'block'

    }
}

function getValoresEditar(){
    return {
        editarNome: document.getElementById("editar-nome"),
        editarIdade: document.getElementById("editar-idade"),
        editarCargo: document.getElementById("editar-cargo"),
        editarId: document.getElementById("editar-id"),
        formularioEdicao: document.getElementById("formulario-edicao")
    }
}

let listarFucionarioDiv; 

document.addEventListener("DOMContentLoaded", function(){
    listarFucionarioDiv = document.getElementById("listar-funcionarios");
    listarFucionarioDiv.addEventListener("click", lidarClique);
    carregarListaDeFuncionarios();
});

async function buscarFuncionario(id) {
    try{
        const funcionarioDoc = doc(db, "funcionarios", id);
        const dadosBanco = await getDoc(funcionarioDoc);
        
        if(dadosBanco.exists()){
            return {id:dadosBanco.id, ...dadosBanco.data() };
        }else{
            console.log("Funcionario não encontrado com ID: " + id);
            return null; 
        }
    }catch (erro){
        console.log("Erro ao buscar funcionario ID: ", erro);
        alert("Erro ao buscar o funcionario para edição!");
        return null; 
    }
}

document.getElementById('btn-salvar-edicao').addEventListener('click', async function () {
    const edicao = getValoresEditar();

    const id = edicao.editarId.value;
    const novosDados = {
        nome: edicao.editarNome.value.trim(),
        idade: parseInt(edicao.editarIdade.value),
        cargo: edicao.editarCargo.value.trim()
    };

    try{
        const ref = doc(db, "funcionarios", id);
        await setDoc(ref, novosDados);
        alert("Funcionario atualizado com sucesso!");
        edicao.formularioEdicao.style.display = 'none';
        carregarListaDeFuncionarios();
    }catch(erro){
        console.log("Erro ao salvar edição: ", erro);
        alert("Erro ao atualizar funcionario.");
    }
});

// Botão de Cancelar Edição 
document.getElementById("btn-cancelar-edicao").addEventListener('click', function(){
    document.getElementById("formulario-edicao").style.display="none";
})

function adicionarListenersDeAcao() {
    listaFuncionariosDiv.addEventListener('click', lidarClique);
}

document.addEventListener("DOMContentLoaded", carregarListaDeFuncionarios); 