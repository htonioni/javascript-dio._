let eu = 'Hugo Sant Marrocos'
let primeiroNome = getFirstName(eu, " ")
console.log(primeiroNome);

function getFirstName (entrada, caracter){
    // quebra a variavel em " " e seleciona o indice 0 
    return entrada.split(caracter)[0]
}
