/*
Simulador de Conversão de Moedas

Informe um valor em reais e mostre:
O valor em dólar (cotação: R$ 5.20)
O valor em euro (cotação: R$ 5.70)
Formate os valores com toLocaleString() para exibir como moeda. Use const para definir as cotações.

 */

// FORMA 01

const cotacaoDolar = 5.20;
const cotacaoEuro = 5.70;
const valorReais = 100.00;

let valorDolar = valorReais / cotacaoDolar;
let valorEuro = valorReais / cotacaoEuro;

console.log("Valor informado em Reais: ", valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Valor em Dólar (USD): ", valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log("Valor em Euro (EUR): ", valorEuro.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }));
