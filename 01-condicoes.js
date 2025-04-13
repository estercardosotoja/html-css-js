/* 
    Condições Simples - IF
*/ 

let idade = 15

if (idade <= 18){
    console.log("Condição Simples: Menor de idade!")
}

/* 
    Condições COMPOSTAS - IF ... ELSE
*/ 

if (idade <= 18){
    console.log("Condição Composta: Menor de idade!")
} else {
    console.log("Condição Composta: Maior de Idade!")
}

/* 
    Condições ALINHADAS - IF ... ELSEIF .. ELSE
*/ 

if (idade <= 16){
    console.log("Condição Alinhada: Menor de idade não pode votar!")
} else {
    if (idade <= 16 && idade >=18){
        console.log("Condição Alinhada: Menor de idade é opcional votar! ")
    } else {
        console.log("Condicional Alinhado: É maior de idade é obrigatório votar!")
    }
}


/* 
    Condições MÚLTIPLAS - SWITCH .. CASE
*/ 

let dia = 1; 
switch (dia){
    case 0: 
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;     
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
    default: 
        console.log('Erro: Dia de semana não esperado!')
}