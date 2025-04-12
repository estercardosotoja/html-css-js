// FORMAS DE FORMATAR E EXIBIR AS TEXTOS

/* 
    Podemos exibir um texto usando aspas duplas, simples e crase: 
*/ 
    console.log("Eu estou aprendendo JS, usando aspas duplas");
    console.log('Eu estou aprendendo JS, usando aspas simples');
    console.log(`Eu estou aprendendo JS, usando crase`); 

/*
    Para adicionar uma variavél,
    Concatenando o texto: 
*/
    let linguagem = 'JavaScript'

    console.log("Eu estou aprendendo "+ linguagem+", usando aspas duplas");
    console.log('Eu estou aprendendo '+ linguagem+', usando aspas simples');
    console.log(`Eu estou aprendendo ${linguagem}, usando crase`);


/* 
    Configurando a exibição do texto: 
*/
    let nome = 'João'; 

    console.log(`Quantidade de Caracteres do nome ${nome}: ${nome.length}`);
    console.log(`O ${nome} em letras maisculas: ${nome.toLocaleUpperCase()}`);
    console.log(`O ${nome} em letras minusculas: ${nome.toLocaleLowerCase()}`);

/* CONVERSÃO DE NUMBER PARA STRING */ 

dado = "Texto demonstrativo!"

console.log("Number (Inteiro): " + Number.parseInt(dado) + " Tipo de dado:" + typeof(dado)) //Descarta as casas decimais
console.log("Number (Float): " + Number.parseFloat(dado) + " Tipo de dado:" + typeof(dado)) //Preserva as casas decimais
console.log("Number: " + Number(dado) + " Tipo de dado:" + typeof(dado)) 