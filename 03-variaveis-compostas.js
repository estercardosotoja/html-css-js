/* Variavéis Compostas */ 

let num = [ 10, 5, 7]

console.log(`Tamanho do array: ${num.length}`); // Retorna a quantidade de elementos no array
console.log(`Primeiro valor do array: ${num[0]}`); // Retorna o valor presente na posição 0 do array
console.log(`Valor 7 adicionado ao final do array. Nova posição: ${num.push(7)}`); // Adiciona o valor 7 ao final do array e retorna a nova quantidade de elementos
console.log(`Posição do valor 5 no array: ${num.indexOf(5)}`); // Retorna a posição onde o valor 5 está localizado
console.log(`Posição do valor 9 no array (não existe): ${num.indexOf(9)}`); // Retorna -1 quando o valor não é encontrado no array

// Exemplo com palavras

let frutas = [ "maça", "banana", "mamão", "abacate"]

frutas.sort()   // Ordena as palavras em ordem alfabetica; 
console.log(frutas)


// Percorrendo o Array com for 
for(let i=0; i < frutas.length; i++){
    console.log(`Posição: ${i} : ${frutas[i]}`)
}
