/*

Sistema de Aprovação de Alunos:

- Solicita três notas de um aluno (simule os valores com let).
- Calcula a média final com operadores aritméticos.
- Define uma nota mínima de aprovação 6.
- Avalia se o aluno foi aprovado usando:
 - Operadores relacionais, lógicos e identidade.
 - Um operador ternário para gerar a mensagem final.

Formata:
 - A média com toFixed(2) e substituindo . por ,.
 - Ainda calcule um bonus, levando em consideração se a nota é maior ou igual a 9:
    Se maior recebe 150.75 e se for menor recebe 75.5 .
*/


// Notas do aluno
let nomeAluno = "Carlos"
let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

// Operador aritmético: média
let media = (nota1 + nota2 + nota3) / 3;

// Relacional: verifica se passou
let aprovado = media >= 6;

// Operador lógico + identidade
let frequencia = 0.85; // 85%
let temFrequencia = frequencia >= 0.75; // precisa de pelo menos 75%

// Operador de atribuição + negação
let temPendencias = false;
let estaRegular = temFrequencia && !temPendencias;

// Operador ternário + formatação de string e número
let resultado = (aprovado && estaRegular)
    ? `Aprovado com média ${media.toFixed(2).replace('.', ',')}`
    : `Reprovado com média ${media.toFixed(2).replace('.', ',')}`;

// Formatação de valor do Bonus
let bonus = media >= 9 ? 150.75 : 75.5;
let bonusFormatado = bonus.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Exibição dos dados no console com template string
console.log("Resultado Final do Aluno: " + nomeAluno);
console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Média: ${media.toFixed(2).replace('.', ',')} (${typeof media})`);
console.log('Frequência:' + frequencia * 100 + '%');
console.log("Está regular?" + estaRegular);
console.log("Status:" + resultado);
console.log('Bônus por desempenho: ' + bonusFormatado);
