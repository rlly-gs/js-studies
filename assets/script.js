
/*
let n = Number(prompt("Digite um número: "))

if (n % 2 === 0) {
    console.log("par")
} else {
    console.log("impar")
}
*/

/*
let anoN = Number(prompt("Qual a sua idade: "))

if (2026 - anoN > 18) {
    console.log("Maior, " + `${ + 2026 - anoN + " anos de idade"}`)
}
else{
    console.log("Menor, " + `${2026 - anoN + " anos de idade"}`)
}
*/


/*
let n = Number(prompt("Digite um número: "))

if (n > 0) {
    console.log("Positivo")
} else if ( n === 0) {
    console.log("Zero")
} else {
    console.log("Negativo")
}
*/

/*
let n1 = Number(prompt("Nota 1: "))
let n2 = Number(prompt("Nota 2: "))
let n3 = Number(prompt("Nota 3: "))

let media = (n1 + n2 + n3) / 3;

if (media >= 7.0) {
    console.log("Aprovado, média: " + media)
} else if (media >= 5 && media <= 6.9) {
    console.log("Recuperação, média: " + media)
} else {
    console.log("Reprovado, média: " + media)
}
*/

/*
let ladoA = Number(prompt("Digite o primeiro lado: "))
let ladoB = Number(prompt("Digite o segundo lado: "))
let ladoC = Number(prompt("Digite o terceiro lado: "))

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Equilátero")
} else if (ladoA === ladoC || ladoB === ladoA || ladoC === ladoB){
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}
*/


/*
let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura * 2.0)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso ideal")
} else {
    console.log("Sobrepeso " + imc )
}
*/

/*
let salario = Number(prompt("Digite seu salário: "))


if (salario <= 1500.00) {
    salario = salario + (salario * 0.20)
    console.log ("Novo Salário: R$" + salario)
} else if (salario >= 1500.01 && salario <= 3000.00) {
    salario = salario + (salario * 0.15)
    console.log("Novo Salário: R$" + salario)  
} else {
    salario = salario + (salario * 0.10)
    console.log("Novo Salário: R$" + salario)
}

*/

let carrinho = 0
let valorTotal = 0
const item = 90.0
let valorFinal = 0

let qtdItem = Number(prompt("Quantos 'item' você vai querer?"))
let cartao = prompt("Vai pagar com cartão da loja?")
carrinho += qtdItem
valorTotal = item * qtdItem
let desconto = 0.00

if (qtdItem > 5) {
    desconto += 0.05
}
if (valorTotal > 500.00) {
    desconto += 0.10
}
if (cartao === "sim"){
    desconto += 0.02
}

const totalDesconto = valorTotal * desconto;
const DescontoRounded = totalDesconto.toFixed(2);
valorFinal = valorTotal - totalDesconto
console.log("Valor total = " + valorTotal + "R$" + ". Desconto de " + DescontoRounded + "R$" +", VALOR A PAGAR: " + valorFinal + "R$");

