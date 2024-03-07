//break = eçe vai sair do contexto "for" e vai pro proximo codigo dps do for

for(let i = 1; i <= 3; i++) {
    if(i === 3) {
        break
    }
    console.log(i)
}
//continue = ele interrompe apenas a repetiçao q gera verdadeira e exibe o restante

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue
    }
    console.log(i)
}