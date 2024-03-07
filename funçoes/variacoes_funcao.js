// #1: função com parametro e com retorno 
function somar(a, b) {
    return a + b
}

let resultado = somar(30, 56)
console.log(`o resultado final é: ${resultado}`)
console.log(`o resultado final é: ${somar(30, 56)}`)

// #2: função com parametro e sem retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b)
}

exibirMultiplicacao(10, 21)
exibirMultiplicacao(7, 9)

// #3: função sem parametro e com retorno
function retornarDataAtual() {
    return new Date()
}

console.log(retornarDataAtual())

// #4: função sem parametro e sem retorno
function exibirHoraAtual() {
    console.log(new Date().getHours())
}

exibirHoraAtual()