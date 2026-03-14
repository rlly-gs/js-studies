function maiorNumero (a, b) {
    if (a > b) {
        console.log("Primeiro número é maior.")
    }  else {
        console.log("Segundo número é maior")
    }
}

const number1 = Number(prompt("Digite o primeiro número: "))
const number2 = Number(prompt("Digite o segundo número: "))

maiorNumero(number1, number2)
