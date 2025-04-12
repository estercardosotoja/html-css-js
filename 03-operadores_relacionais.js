/* DEMONSTRAÇÃO DO USO DE OPERADORES DE RELACIONAIS */ 

let num1 = 10 , num2 = 5 , num3 = 10;

// >  Maior que
console.log(`${num1} > ${num2}`, num1 > num2);   // true (10 é maior que 5)

// <  Menor que
console.log(`${num1} < ${num2}`, num1 < num2);  // false (10 não é menor que 5)

// >= Maior ou igual
console.log(`${num1} >= ${num2}`, num1 >= num2); // true (10 é igual a 10)
console.log(`${num1} >= ${num2}`, num1 >= num2); // false

// <= Menor ou igual

console.log(`${num1} <= ${num2}`, num1 <= num2); // true (5 é menor que 10)
console.log(`${num1} <= ${num2}`, num1 <= num2); // true (10 é igual a 10)

// == Igual (compara apenas o valor)
console.log(`${num1} == ${num3}`, num1 == num3); // true (mesmo valor)
console.log(`${num1} == 10`, num1 == 10);  // true (valor igual, tipos diferentes)

// != Diferente (valor diferente)
console.log(`${num1} != ${num2}`, num1 != num2); // true (10 é diferente de 5)
console.log(`${num1} != ${num3}`, num1 != num3); // false (mesmo valor)
