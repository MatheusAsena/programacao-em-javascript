let nota = 12

switch (Math.ceil(nota)) {            //Math.ceil = arredondar a nota pra mais
    case 10: case 9: case 8: case 7:  //Math.floor = arredondar pra baixo
        console.log("Parabéns")
        break  //serve para executar so um case especifico
    case 6:
    case 5:
        console.log("Recuperação!")
        break
    case 4:
    case 3:
    case 2:
        console.log("Reprovado!")
        break
    case 1:
    case 0:
        console.log('Muito Reprovado!')
        break
    default: // para definir uma nota invalida ou seja n se encaixa com os outros valores
        console.log('nota invalida!')
}

console.log("Fim!")