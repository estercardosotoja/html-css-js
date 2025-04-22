/* 
    Comparação de Números

    Crie um array com 10 valores e exiba: 
    Se há valores iguais;
    Qual é o maior;
    Qual é o menor;
    Quais são os valores pares e ímpares; 
    Use operadores relacionais, aritméticos e módulo %.
*/

// USANDO OBJETO

const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];

const repetidos = []; 
const pares = [];     
const impares = [];   

let maior = valores[0];
let menor = valores[0];
let contagem = {};

for (let valor of valores) {

    //maiores
    if (valor > maior){
        maior = valor;
    }

    //menores
    if (valor < menor) {
        menor = valor;
    }

    //impares e pares
    (valor % 2 === 0) ? pares.push(valor) : impares.push(valor);

    if (contagem[valor] === undefined) {
        contagem[valor] = 1;
    } else {
        contagem[valor] += 1;
    }
}

for (let numero in contagem) {
    if (contagem[numero] > 1) {
        repetidos.push(Number(numero));
    }
}

// Exibe os resultados no console
console.log("Array original:", valores);
console.log("Valores repetidos:", repetidos);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
console.log("Pares:", pares);
console.log("Ímpares:", impares);
