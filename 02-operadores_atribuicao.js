/* DEMONSTRAÇÃO DO USO DE OPERADORES ATRIBUIÇÃO */ 

// ATRIBUIÇÃO SIMPLES
    let numero = 10;  // atribuição simples (=)
    console.log("Valor variavél:", numero);


// AUTO ATRIBUIÇÕES 

    // SOMA (+=)
    numero += 5; // equivalente resultado = numero + 5
    console.log("Auto atribuição de soma += 5:", numero);

    // SUBTRAÇÃO (-=)
    numero -= 2; // equivalente a: numero = numero - 2
    console.log("Após -= 2:", numero);

    // MULTIPLICAÇÃO (*=)
    numero *= 3; // equivalente a: numero = numero * 3
    console.log("Após *= 3:", numero);

    // DIVISÃO (/=)
    numero /= 4; // equivalente a: numero = numero / 4
    console.log("Após /= 4:", numero);

    // RESTO DA DIVISÃO (%=)
    numero %= 3; // equivalente a: numero = numero % 3
    console.log("Após %= 3:", numero);

    // POTENCIA (**=)
    numero **= 2; // equivalente a: numero = numero ** 2
    console.log("Após **= 2:", numero);


// INCREMENTO e DECREMENTO

/*
Em JavaScript, os operadores de incremento (++) e decremento (--) aumentam ou diminuem o valor de uma variável em 1.

[!IMPORTANTE] A posição do operador (antes ou depois da variável) altera o comportamento:

--> Pós-incremento (valor++): 
    - Primeiro usa o valor atual
    - Depois incrementa

--> Pré-incremento (++valor): 
    - Primeiro incrementa
    - Depois usa o novo valor

-->  O mesmo vale para o decremento (--)

Veja os exemplos abaixo:
*/

let valor = 4;

console.log(`Valor inicial: ${valor}`);           // 4

console.log(`Pós-incremento: ${valor++}`);        // Mostra 4, depois vira 5
console.log(`Pós-decremento: ${valor--}`);        // Mostra 5, depois vira 4
console.log(`Pré-incremento: ${++valor}`);        // Vira 5, depois mostra 5
console.log(`Pré-decremento: ${--valor}`);        // Vira 4, depois mostra 4
