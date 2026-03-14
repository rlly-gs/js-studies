function verificarEntrada (idade) {
    if (idade >= 18) {
        return "Liberado"
    }
    
    return "Menor de idade"
}

const idade = Number(prompt("Idade = "))
const permissao = verificarEntrada(idade)

console.log(permissao)