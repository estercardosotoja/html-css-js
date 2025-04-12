/* DEMONSTRAÇÃO DO USO DE OPERADORES DE LÓGICOS */ 

let idade = 20;
let temCarteira = true;
let temMulta = false;


/* NEGAÇÃO ( ! )
    Inverte o valor lógico 
    ex. !falso = verdadeiro 
        !verdadeiro = falso
*/

    console.log("!temCarteira:", !temCarteira); // false (porque temCarteira é true)
    console.log("!temMulta:", !temMulta);       // true (porque temMulta é false)


/* CONJUNÇÃO ( && )
    SÓ retorna true se **ambas** as condições forem VERDADEIRAS: 
    Podemos dizer que precisa de uma condição ( E ) outra condição para ser verdade. 
*/

    /*
        Na condição abaixo, temos:
        idade = 20 (ou seja, é maior ou igual a 18) → true
        temCarteira = true
        Como ambas as condições são verdadeiras, o resultado final também será true
    */
    console.log("idade >= 18 && temCarteira:", idade >= 18 && temCarteira);

    /*
        Na condição abaixo, temos:
        idade = 20 (ou seja, é maior ou igual a 18) → true
        temMulta = false
        Como uma condição sendo verdadeira e a outra falsa, o resultado final será false
    */
    console.log("idade >= 18 && temMulta:", idade >= 18 && temMulta);       // false


/* DISJUNÇÃO ( || )
    SÓ retorna true se **ambas** as condições forem FALSAS: 
    Podemos dizer que precisa de uma condição ( OU ) outra condição para ser verdade. 
*/

    /*
        Na condição abaixo, temos:
        temCarteira = false
        temCarteira = true
        Como uma das condições é true, o resultado final também será true
    */
    console.log("temCarteira || temMulta:", temCarteira || temMulta); // true

    /*
        Na condição abaixo, temos:
        idade = 20 (ou seja, é menor a 18) → false
        temMulta = false
        Como ambas as condições é false, o resultado final também será false
    */
    console.log("idade < 18 || temMulta:", idade < 18 || temMulta);   // false

/*
Exemplo mais completo: pode dirigir?

Verificação usando operadores lógicos:
Para poder dirigir, a pessoa precisa:
1. Ser maior ou igual a 18 anos
2. E se tem carteira de motorista
3. E NÃO ter multas (por isso usamos !temMulta, que verifica se temMulta é false)
*/

let podeDirigir = idade >= 18 && temCarteira && !temMulta;
console.log("Pode dirigir:", podeDirigir); // true (porque é maior de idade, tem carteira e não tem multa)

/*
idade >= 18 → true (porque 20 >= 18)
temCarteira → true
!temMulta → true (porque temMulta é false, e !false = true)
Como todas as condições são verdadeiras, o resultado final é true
*/