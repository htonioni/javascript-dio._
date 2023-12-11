let vitorias = 120
let derrotas = 20
let rank = 0
let patente = ""

function calculaRank(victories, defeats) {
    return rank = victories - defeats
}

calculaRank(vitorias, derrotas)
 
console.log(rank);

switch (true) {
    case rank <= 10:
        patente = "Ferro"
        break;

    case rank <= 20:
        patente = "Bronze"
        break;

    case rank <= 50:
        patente = "Prata"
        break; 

    case rank <= 80:
        patente = "Ouro"
        break;  
    
    case rank <= 90:
        patente = "Platina"
        break;  

    case rank <= 100:
        patente = "Ascendente"
        break;  

    case rank >= 101:
        patente = "Imortal"
        break;  
}

console.log(`O heroi tem rank: ${rank} e está no nivel ${patente}`);