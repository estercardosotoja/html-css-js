/* 

Calculando Média Escolar

Crie um algoritmo que tenha 3 alunos cada aluno tenha duas notas; 
E calcule a média e diga se foi aprovado ou reprovado (média >= 7);
Use a até a segunda casa decimal  operadores aritméticos, operadores relacionais, e operador ternário;
Exiba o nome do aluno e a nota, utilize a crase para exibir os dados;

*/

// FORMA 0

let aluno1 = "Aluno 1", aluno2 = "Aluno 2", aluno3 = "Aluno 3"; 
let aluno1_Nota1 = 1.0, aluno1_Nota2 = 5.0, aluno2_Nota1 = 3.0,  aluno2_Nota2 = 4.0, aluno3_Nota1 = 8.0, aluno3_Nota2 = 10.0;

let media1 = (aluno1_Nota1 + aluno1_Nota2) / 2,
    media2 = (aluno2_Nota1 + aluno2_Nota2) / 2,
    media3 = (aluno3_Nota1 + aluno3_Nota2) / 2;

media3 >= 7
  ? console.log(`${aluno3} Aprovado. Média: ${media3.toFixed(2)}`)
  : console.log(`${aluno3} Reprovado. Média: ${media3.toFixed(2)}`);

let situacao1 = media1 >= 7 ? "Aprovado" : "Reprovado";
let situacao2 = media2 >= 7 ? "Aprovado" : "Reprovado";
let situacao3 = media3 >= 7 ? "Aprovado" : "Reprovado";

console.log("\n--- Resultados ---");
console.log(`Aluno: ${aluno1}, Notas: ${aluno1_Nota1.toFixed(2)} e ${aluno1_Nota2.toFixed(2)}, Media: ${media1.toFixed(2)} : Situação: ${situacao1}`)
console.log(`Aluno: ${aluno2}, Notas: ${aluno2_Nota1.toFixed(2)} e ${aluno2_Nota2.toFixed(2)}, Media: ${media2.toFixed(2)} : Situação: ${situacao2}`)
console.log(`Aluno: ${aluno3}, Notas: ${aluno3_Nota1.toFixed(2)} e ${aluno3_Nota2.toFixed(2)}, Media: ${media3.toFixed(2)} : Situação: ${situacao3}`)

//FORMA 1

const alunos_1 = [
    ["Aluno 1", [1.0, 5.0]],
    ["Aluno 2", [3.0, 4.0]],
    ["Aluno 3", [8.0, 10.0]],
  ];

console.log("\n--- Resultados ---");
for (let aluno of alunos_1) {
  let nome = aluno[0];
  let notas = aluno[1];
  let nota1 = notas[0];
  let nota2 = notas[1];
  let media = (nota1 + nota2) / 2;
  let mediaFormatada = media.toFixed(2);
  let situacao = media >= 7 ? "Aprovado" : "Reprovado";
  console.log(`Aluno: ${nome}, Notas: ${nota1.toFixed(2)} e ${nota2.toFixed(2)}, Média: ${mediaFormatada}, Situação: ${situacao}`);
}



//FORMA 2

const alunos_2 = [
    { nome: "Aluno 1", notas: [1.0, 5.0] },
    { nome: "Aluno 2", notas: [3.0, 4.0] },
    { nome: "Aluno 3", notas: [8.0, 10.0] },
  ];
  
  console.log("\n--- Resultados ---");
  for (let aluno of alunos_2) {
    let nota1 = aluno.notas[0];
    let nota2 = aluno.notas[1];
    let media = (nota1 + nota2) / 2;
    let mediaFormatada = media.toFixed(2);
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";
    console.log(`Aluno: ${aluno.nome}, Notas: ${nota1.toFixed(2)} e ${nota2.toFixed(2)}, Média: ${mediaFormatada}, Situação: ${situacao}`);
  }