function parOuImpar (a) {
    if (a % 0) {
        console.log("par")
    } else {
        console.log("impar")
    }
}

const number = Number(prompt("Digite um número: "))
parOuImpar(number)