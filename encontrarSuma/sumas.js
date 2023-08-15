function encontrarSuma(numero) {
    lista = [2,4,3,6,9,8]
    parejas = []
    for(i = 0; i < lista.length; i++) {
        a = lista[i]
        for(p = 0; p < lista.length; p++) {
            b = lista[p]
            if (a != b) {
                if ((a + b) == numero) {
                    // console.log(`${a} + ${b} = ${numero}`)
                    lista.splice(lista.indexOf(a), 1)
                    lista.splice(lista.indexOf(b), 1)
                    parejas.push([a,b])
                }
            }
        }
    }
    console.log(parejas)
}

encontrarSuma(10)