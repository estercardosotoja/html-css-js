/* 
Comparação de Números
Crie um array com 10 valores e exiba: 
Se há valores iguais;
Qual é o maior;
Qual é o menor;
Quais são os valores pares e ímpares; 
Use operadores relacionais, aritméticos e módulo %.
*/

const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];
const repetidos = [];
const pares = [];
const impares = [];

let maior = valores[0];
let menor = valores[0];

const contagem = {};

for (let valor of valores) {


    if (valor > maior){
         maior = valor;
    }

    if (valor < menor) {
         maior = valor;
    }

    (valor % 2 === 0) ? pares.push(valor) : impares.push(valor);

    contagem[valor] = (contagem[valor] || 0) + 1;
}
s
for (let numero in contagem) {
    if (contagem[numero] > 1) {
        repetidos.push(Number(numero));
    }
}

console.log("Array original:", valores);
console.log("Valores repetidos:", repetidos);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
console.log("Pares:", pares);
console.log("Ímpares:", impares);
