let personagem = "Jao"
let exp = 8000
let msgFinal = ""

switch (true) {
    case exp <= 1000:
        msgFinal = "Ferro"
        break;

    case exp <= 2000:
        msgFinal = "Bronze"
        break;

    case exp <= 5000:
        msgFinal = "Prata"
        break; 

    case exp <= 7000:
        msgFinal = "Ouro"
        break;  
    
    case exp <= 8000:
        msgFinal = "Platina"
        break;  

    case exp <= 9000:
        msgFinal = "Ascendente"
        break;  

    case exp <= 10000:
        msgFinal = "Imortal"
        break;  

    case exp >= 10001:
        msgFinal = "Imortal"
        break;  
}

console.log(`O Hério de nome ${personagem} está no nível de ${msgFinal}`);