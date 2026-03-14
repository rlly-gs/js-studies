function analisaStatus(n1, n2, n3, n4) {
    const media = (n1 + n2 + n3 + n4) / 4

    if (media > 7.0) {
        console.log(`Aprovado, média = ${media}`)
    } else if (media >= 5.0 && media <= 6.9) {
        console.log(`Recuperação, média = ${media}`)
    } else {
        console.log(`Reprovado, média = ${media}`)
    }
}

const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))
const nota3 = Number(prompt("Digite a terceira nota: "))
const nota4 = Number(prompt("Digite a quarta nota: "))

analisaStatus(nota1,nota2,nota3,nota4)