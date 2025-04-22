/* 
    Comparação de Números

    Crie um array com 10 valores e exiba: 
    Se há valores iguais;
    Qual é o maior;
    Qual é o menor;
    Quais são os valores pares e ímpares; 
    Use operadores relacionais, aritméticos e módulo %.
*/

// USANDO ARRAY

const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];
const repetidos = [];
const pares = [];
const impares = [];

let maior = valores[0];
let menor = valores[0];

for (let valor of valores) {

    // maiores
    if (valor > maior) {
        maior = valor;
    }

    // menores
    if (valor < menor) {
        menor = valor;
    }

    // pares e impares
    (valor % 2 === 0) ? pares.push(valor) : impares.push(valor);
}

    // repetidos
    for (let i = 0; i < valores.length; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            if (valores[i] === valores[j]) {
                repetidos.push(valores[i]);
                break; 
            }
        }
    }

console.log("Array original:", valores);
console.log("Valores repetidos:", repetidos);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
console.log("Pares:", pares);
console.log("Ímpares:", impares);
