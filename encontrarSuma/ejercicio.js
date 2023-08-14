function encontrarSuma(numero) {
    lista = [2,4,3,6,9,8]
    for(i = 0; i < lista.length; i++) {
        a = lista[i]
        for(p = 0; p < lista.length; p++) {
            b = lista[p]
            if (a != b) {
                if ((a + b) == numero) {
                    console.log(`${a} + ${b} = ${numero}`)
                    lista.splice(lista.indexOf(a), 1)
                    lista.splice(lista.indexOf(b), 1)
                }
            }
        }
    }
}

encontrarSuma(10)