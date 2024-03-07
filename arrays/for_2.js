const notas = [7, 8, 3, 5, 10, 9, 8, 8]
let valores = ''

// foreach

for(let nota of notas) {     // of = acessar valores do array
    valores += nota + ' '
}

console.log(valores)

let indices = ''

for(let indice in notas) {   // in = acessar indices do array
    indices += indice + ' '
}

console.log(indices)