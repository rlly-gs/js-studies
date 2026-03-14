function tentarLogin(usuario, senha) {
    if(usuario === "admin" && senha === 12345) {
        return true
    }
    return false
}

let login = prompt("Digite o usuário: ")
let senha = Number(prompt("Digite a senha: "))
let sucesso = tentarLogin (login, senha)

if (sucesso) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso restrito")
}