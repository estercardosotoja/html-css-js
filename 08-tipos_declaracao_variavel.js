/* 
Em JS temos três tipos declarações de váriaveis: 
*/

/* 
    VAR 
    Mais antiga e não mais recomendada para ser usada. 
    [!] Evite var no código moderno, pois pode causar confusões com escopo.

*/

    function exemploVar() {
        var x = 10;
        if (true) {
            var x = 20; // mesmo x da função
            console.log("VAR: "+ x); // 20
        }
        console.log("VAR: "+ x); // 20
    }

    exemploVar()

/* 
    LET 
    
    Forma moderna e recomendada para variáveis que mudam; 
    Não pode ser usada antes da declaração
*/

    function exemploLet() {
        let y = 10;
        if (true) {
            let y = 20; // outro y, só existe dentro do bloco
            console.log("LET: " + y); // 20
        }
        console.log("LET: " + y); // 10
    }
    exemploLet()

/* 
    CONST 
    
    Usada para constantes ou valores que não mudam, , valores que não podem ser reatribuídos depois de declarados;
    IMPORTANTE: Se a constante for um objeto ou array, você pode alterar os valores internos, mas não pode reatribuir o objeto em si.
    Não pode ser usada antes da declaração;
    É obrigatório declarar com valor;
*/

const pi = 3.14;
// pi = 3.1416; // Não pode mudar uma constante;

    function exemploConst() {
        if (true) {
            //pi = 3.1416; // Não pode mudar uma constante;
            console.log("CONST: " + pi);
        }
        console.log("CONST: " + pi);
    }
    exemploConst()


// Com array o funcionamento é diferente: 

const frutas = ['maçã', 'banana'];
//frutas = ['abacate']; // Dessa forma não funcionará;
console.log(`Array antes de ser adicionado: [${frutas}]`)
frutas.push('mamão'); // Adicionando o mamão no final do array; 
console.log(`Adicionando o mamão no array: [${frutas}] `)

