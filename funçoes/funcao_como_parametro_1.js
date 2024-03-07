function executar(funcao) {
    if(typeof funcao === "function") {
        console.log(funcao()) // <--- central da aula 
    }
}

function bomDia() {
    return "Bom Dia"
}

executar(3)
executar(bomDia)

const x = bomDia
const y = bomDia() // <--- central da aula

console.log(x())
console.log(y)