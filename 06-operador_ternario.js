// OPERADOR TERNÁRIO EM JAVASCRIPT
/* 

É uma forma simplificada de escrever uma estrutura condicional (if...else)

Sintaxe:

    condição ? valor_se_verdadeiro : valor_se_falso;

*/

let idade = 17;

// Exemplo: Verificando se a pessoa é maior de idade
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // Saída: Menor de idade

/*
Explicação:
idade >= 18 → false (porque idade é 17)
Como a condição é falsa, o valor atribuído à variável mensagem será "Menor de idade"
*/


/* OUTRO EXEMPLO 

Considere que a média do curso é 7. 
E deseja realizar uma validação para saber se o aluno está aprovado ou reprovado? 

*/

let media= 7, nota1 = 5, nota2 = 10; 

console.log(`${nota1 > media ? 'Aluno1: Aprovado!': 'Aluno1: Reprovado!'}`)
console.log(`${nota2 > media ? 'Aluno2: Aprovado!': 'Aluno2: Reprovado!'}`)