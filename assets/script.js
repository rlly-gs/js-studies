
        //função
function bhaskara (a, b, c) {

    let delta = Math.pow(b, 2.0) - (4 * a * c);

    if (delta < 0) {
        console.log("Delta menor que zero.")
    }else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)      //estrutura da função
        let x2 = (-b - Math.sqrt(delta)) / (2 * a )
        console.log(`Delta: ${delta}`)
        console.log(`x1: ${x1}`)
        console.log(`x2 ${x2}`)
    }
}

bhaskara(1, -2, 5); //chama função
