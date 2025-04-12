/* DEMONSTRAÇÃO DO USO DE OPERADORES ARITMÉTICOS */ 

const num1 = 4, num2 = 12;
let resultado; 

// soma
    resultado = num1 + num2;
    console.log(` Resultado de ${num1} + ${num2}: ${resultado}`);

// subtração
    resultado = num1 - num2;
    console.log(` Resultado de ${num1} - ${num2}: ${resultado}`);

// multiplicação
    resultado = num1 * num2;
    console.log(` Resultado de ${num1} * ${num2}: ${resultado}`);

// divisão
    resultado = num1 / num2;
    console.log(` Resultado de ${num1} / ${num2}: ${resultado}`);

// resto da divisão inteira
    resultado = num1 % num2;
    console.log(` Resultado de ${num1} % ${num2}: ${resultado}`);

// potência
    resultado = num1 ** num2;
    console.log(` Resultado de ${num1} ** ${num2}: ${resultado}`);


// ORDEM DE PRECEDÊNCIA

/* 
Assim como na matemática, os operadores aritméticos em JavaScript seguem uma ordem de precedência.
Isso define qual operação será realizada primeiro em uma expressão.

A ordem é a seguinte:

1º - Parênteses         ()     → expressões dentro dos parênteses são avaliadas primeiro
2º - Potenciação        **     → exponenciação (ex: 2 ** 3 = 8)
3º - Multiplicação, Divisão e Módulo    *, /, % → avaliados da esquerda para a direita
4º - Soma e Subtração   +, -   → também da esquerda para a direita
*/

// Exemplo:
    console.log(5 + 3 / 2);   // Saída: 6.5
// Aqui a divisão é feita antes da soma: 3 / 2 = 1.5 → 5 + 1.5 = 6.5

    console.log((5 + 3) / 2); // Saída: 4
// Com os parênteses, a soma é feita primeiro: 5 + 3 = 8 → 8 / 2 = 4
