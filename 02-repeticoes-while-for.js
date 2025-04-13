/* 
    Repetição While  
    - Primeiro testa a condição depois executa as ações; 
*/ 

// Exiba os números de 1 a 9: 


let num = 1; 
while(num < 10){
    console.log(`While: Número: ${num}`)
    num++; 
}

/*  
    Repetiação Do ... While
    - Primeiro executa as ações depois testa a condição; 
 */ 

let senhaDigitada;
const senhaCorreta = "1234";
let tentativas = 0;

do {
    senhaDigitada = "1234"; 
    console.log("Tentando acessar com senha:", senhaDigitada);
    tentativas++;
} while (senhaDigitada !== senhaCorreta && tentativas < 3)

console.log(tentativas === 3 ? "Acesso bloqueado!" : "Acesso liberado!");


/* 
    Laço de Repetição (FOR) 
*/ 

for ( let i = 0; i < 10; i++){
    console.log(`For: Número: ${i}`)
}

/* Laço de Repetição (FOR) para Arrays */ 

let frutas = ["maçã", "banana", "laranja"];
console.log(`Laço de Repetição para Arrays`);
for (let fruta of frutas) {
  console.log(`[ARRAY] Frutas: ${fruta}`);
}

/* Laço de Repetição (FOR) para Objects */ 

let aluno = {
    nome: "Lucas",
    idade: 17,
    curso: "Informática"
  };
  console.log(`Laço de Repetição para Object`);
  for (let chave in aluno) {
    console.log(`[OBJECT] - ${chave} : ${aluno[chave]}`)
  }
  
