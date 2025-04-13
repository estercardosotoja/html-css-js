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

