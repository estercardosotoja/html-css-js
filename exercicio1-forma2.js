// Array com 10 números
const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];

// Arrays para armazenar os resultados
const repetidos = [];
const pares = [];
const impares = [];

// Assume-se inicialmente que o primeiro número é o maior e o menor
let maior = valores[0];
let menor = valores[0];

// Verifica maior, menor, par/ímpar
for (let valor of valores) {
    if (valor > maior) {
        maior = valor;
    }

    if (valor < menor) {
        menor = valor;
    }

    (valor % 2 === 0) ? pares.push(valor) : impares.push(valor);
}


    for (let i = 0; i < valores.length; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            if (valores[i] === valores[j]) {
                repetidos.push(valores[i]);
                break; 
            }
        }
    }

// Exibe os resultados
console.log("Array original:", valores);
console.log("Valores repetidos:", repetidos);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
console.log("Pares:", pares);
console.log("Ímpares:", impares);
