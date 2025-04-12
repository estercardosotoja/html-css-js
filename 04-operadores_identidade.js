/* DEMONSTRAÇÃO DO USO DE OPERADORES DE IDENTIDADE */ 

/*  IGUALDADE SIMPLES ( == ) 

 --> verifica apenas o **valor**, não o tipo de variavel

 */

console.log("5 == 5:", 5 == 5);    // true (mesmo valor)
console.log("5 == '5':", 5 == '5'); // true (valor igual, mas tipos diferentes - número e string)



/*  IGUALDADE ESTRITA  ( === ) 

--> Verifica **valor e tipo** ao mesmo tempo

*/

console.log("5 === 5:", 5 === 5);    // true (mesmo valor e mesmo tipo - ambos números)
console.log("5 === '5':", 5 === '5'); // false (mesmo valor, mas tipos diferentes - número e string)

// Outro exemplo:
let numero = 10;
let texto = '10';

console.log(`number(${numero})  == string (${texto}):`, numero == texto);  // true (valor igual)
console.log(`number(${numero})  === string("${texto}"):`, numero === texto); // false (tipos diferentes)
