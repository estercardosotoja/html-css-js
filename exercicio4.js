/*
    Calculadora de Compras

    Um produto custa R$ 89,90. O cliente deseja comprar 3 unidades.
    Calcule:
    O valor total;
    Um desconto de 10%;
    Mostre o valor final em formato de moeda brasileira;
    Utilize operadores aritméticos, formatação com toLocaleString() e toFixed();
*/ 

const precoProduto = 89.90;
const quantidade = 3;
const descontoPercentual = 10;

// Calcula o valor total sem desconto
let valorTotal = precoProduto * quantidade;

// Calcula o valor do desconto
let valorDesconto = valorTotal * (descontoPercentual / 100);

// Calcula o valor final com desconto
let valorFinal = valorTotal - valorDesconto;

// Formata o valor final para moeda brasileira usando toLocaleString()
let valorFinalFormatado = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Exibe os resultados no console
console.log(`Preço do produto: R$ ${precoProduto.toFixed(2)}`);
console.log(`Quantidade desejada: ${quantidade}`);
console.log(`Valor total sem desconto: R$ ${valorTotal.toFixed(2)}`);
console.log(`Desconto aplicado: ${descontoPercentual}% (R$ ${valorDesconto.toFixed(2)})`);
console.log(`Valor final com desconto: ${valorFinalFormatado}`);