/* 
    Funções sem Parametros
*/ 

function numPar(){
    let num = 10; 
    if (num % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}

console.log("Função sem Parâmetro: " + numPar())


/* 
    Funções com Parametros 
*/ 

function numPar(valor){ 
    if (valor % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}

console.log("Função com Parâmetro: " + numPar(8))
console.log("Função com Parâmetro: " + numPar(1))

// Chamando função com interação: 

i = 10; 
while(i>0){
    console.log(` Número ${i}: ${numPar(i)}`)
    --i;
}


/*
    Função dentro de uma váriavél 
*/ 

let dobro = function(n){
    return n*2
}
console.log("Função dentro de uma váriavel: " + dobro(5))