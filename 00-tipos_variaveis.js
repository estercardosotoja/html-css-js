/* Number */

let numero1 = 5;  // posso declara uma váriavel; 
console.log("[NUMBER] - Atribuição Simples: numero1 = " + numero1)

let numero2 = 6, numero3 = 8; //posso declara duas variaveis do mesmo tipo separa por virgula;
console.log("[NUMBER] - Atribuição Multipla: numero2 = " + numero2 + " numero3= " + numero3)

let custo = 1.0; // Número com virgula
console.log("[NUMBER] - Atribuição de Número com virgula ("+ custo.toFixed(1) +")" + ": o tipo da váriavel: " + typeof(custo))

let despezas = -500; // Número negativo; 
console.log("[NUMBER] - Atribuição de Número negativo ("+ despezas +")" + ": o tipo da váriavel: " + typeof(despezas))


/* String */

let nomeJogo = "Mario Bross"// posso declara uma váriavel; 
console.log( "[STRING] - Atribuição Simples: " + nomeJogo)

let nomeLutador = "Anderson", sobrenomeLutador = "Silva"; //posso declara duas variaveis do mesmo tipo separa por virgula;
console.log( "[STRING] - Atribuição Multipla: nomeLutador = " + nomeLutador + " sobrenomeLutador: " + sobrenomeLutador)

/* Boolean */

let statusDis = false // posso declara uma váriavel; 
console.log( "[BOOLEAN] - Atribuição Simples: status = " + statusDis)

let computador = true, geladeira = false; //posso declara duas variaveis do mesmo tipo separa por virgula;
console.log( "[BOOLEAN] - Atribuição Multipla: computador = " + computador + " geladeira: " + geladeira)

/* Array */

// Declarando -> Strings: 
let frutas = ["maçã", "banana", "mamão"];
console.log( "[ARRAY] - [strings] : frutas = [" + frutas + "]")


// Declarando -> Number: 
let listaNumeros = [10, 20, 30, 40];
console.log( "[ARRAY] - [number] = [" + listaNumeros +"]")

console.log( "[ARRAY] - [number] = Retorna o valor do index [0]: " + listaNumeros[0]); // 10 (primeiro valor)
console.log( "[ARRAY] - [number] = Retorna o valor do index [3]: " + listaNumeros[3]); // 40 (quarto valor)
console.log( "[ARRAY] - Quantidade de elementos do Array: " + listaNumeros.length); // 4 (quantidade de elementos)



/* Object */

// Declarando Objeto
let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Programador"
  };


// Acessar o dado:
console.log("[OBJECT] - Nome: " + pessoa.nome); // João
console.log("[OBJECT] - Idade: " + pessoa["idade"]); // 25

// Modificando os dados:
pessoa.cidade = "São Paulo"; // adiciona nova
console.log("[OBJECT] - Cidade: " + pessoa["cidade"]); // São Paulo


pessoa.idade = 30; // altera
console.log("[OBJECT] - Idade: " + pessoa['idade']); 
