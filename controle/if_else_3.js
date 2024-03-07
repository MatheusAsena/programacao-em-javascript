const hora = 22
let saudacao

if (hora < 12) {
    saudacao = "Bom dia!"
} else { 
    if (hora < 18) {
        saudacao = "Boa tarde!"  // pode ter um if/else dentro de 
    } else {                     // um outro if/else
        saudacao = "Boa noite!"
    }
}

console.log(saudacao)