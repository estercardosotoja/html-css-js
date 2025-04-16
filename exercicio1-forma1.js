/* 
Comparação de Números
Crie um array com 10 valores e exiba: 
Se há valores iguais;
Qual é o maior;
Qual é o menor;
Quais são os valores pares e ímpares; 
Use operadores relacionais, aritméticos e módulo %.
*/

// Array com 10 números
const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];

// Arrays para armazenar os resultados
const repetidos = [];  // Números que se repetem
const pares = [];      // Números pares
const impares = [];    // Números ímpares

// Assume-se inicialmente que o primeiro número é o maior e o menor
let maior = valores[0];
let menor = valores[0];

// Objeto para contar quantas vezes cada número aparece
const contagem = {};

// Percorre todos os valores do array
for (let valor of valores) {

    // Verifica se o valor atual é maior que o "maior" atual
    if (valor > maior){
        maior = valor;
    }

    // Verifica se o valor atual é menor que o "menor" atual
    if (valor < menor) {
        menor = valor;  // ⚠️ Corrigido: estava maior = valor antes
    }

    // Usa operador ternário para separar pares e ímpares
    (valor % 2 === 0) ? pares.push(valor) : impares.push(valor);

    // Conta quantas vezes o número aparece usando objeto
    // Se já existe, soma 1; se não, começa de 0 e soma 1
    if (contagem[valor] === undefined) {
        contagem[valor] = 1;
    } else {
        contagem[valor] += 1;
    }
}

// Percorre o objeto "contagem" para identificar números repetidos
for (let numero in contagem) {
    if (contagem[numero] > 1) {
        repetidos.push(Number(numero)); // Converte para número (era string)
    }
}

// Exibe os resultados no console
console.log("Array original:", valores);
console.log("Valores repetidos:", repetidos);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);
console.log("Pares:", pares);
console.log("Ímpares:", impares);
