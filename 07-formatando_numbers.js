// FORMAS DE FORMATAR E EXIBIR AS NUMEROS

let preco = 1234.567;

/* 
    TOFIXED :
*/ 

    // toFixed: limita o número de casas decimais
        console.log(preco.toFixed(2));  // Saída: "1234.57" → Arredonda para 2 casas decimais (retorna string)

    // TOFIXED + REPLACE: 
    // toFixed(2).replace('.', ','): formatação no estilo brasileiro
    console.log(preco.toFixed(2).replace('.', ','));     // Saída: "1234,57" → substitui o ponto por vírgula para parecer moeda brasileira

/*
    toLocaleString:
    formato oficial de moeda por cada pais
*/

    // toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}):
    console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // Saída: "R$ 1.234,57" → formato oficial de moeda em reais (Brasil)

    //toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}):
    console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })); // Saída: "US$ 1.234,57" → moeda dólar americano com separador brasileiro

    // toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}):
    console.log(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }));  // Saída: "€ 1.234,57" → moeda euro com formatação brasileira

/* CONVERSÃO DE STRING PARA NUMBER */ 

dado = 50.012

console.log("Number (Inteiro): " + Number.parseInt(dado) + " Tipo de dado:" + typeof(dado)) //Descarta as casas decimais
console.log("Number (Float): " + Number.parseFloat(dado) + " Tipo de dado:" + typeof(dado)) //Preserva as casas decimais
console.log("Number: " + Number(dado) + " Tipo de dado:" + typeof(dado)) 

// Outras diferenças: 

    // Number + String
    dado2 = "123abc"

    console.log("Number (Inteiro): " + Number.parseInt(dado2) + " Tipo de dado:" + typeof(dado2)) // Interpreta o valor
    console.log("Number (Float): " + Number.parseFloat(dado2) + " Tipo de dado:" + typeof(dado2)) // Interpreta o valor
    console.log("Number: " + Number(dado2) + " Tipo de dado:" + typeof(dado2))  // Não converte o valor, retorna NaN

    /*
    NaN significa "Not a Number" (Não é um Número).
    É um valor especial em JavaScript que aparece quando você tenta fazer uma operação numérica inválida.
    */

    //  Boolean
    dado3 = true

    console.log("Number (Inteiro): " + Number.parseInt(dado3) + " Tipo de dado:" + typeof(dado3)) // Não converte o valor, retorna NaN
    console.log("Number (Float): " + Number.parseFloat(dado3) + " Tipo de dado:" + typeof(dado3)) // Não converte o valor, retorna NaN
    console.log("Number: " + Number(dado3) + " Tipo de dado:" + typeof(dado3)) // Converte booleanos para 0 e 1.


