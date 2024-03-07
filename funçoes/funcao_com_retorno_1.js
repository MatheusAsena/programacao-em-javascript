function sempreRetornaUm() {
    return 1 
}

function textoOuNumero(retornartexto) {
    if (retornartexto) {
        return "sou um texto!"
    }
    return 123
}

let valor = sempreRetornaUm() + 999
console.log(valor)

let texto = textoOuNumero(true)
console.log(texto)

console.log(textoOuNumero(false))