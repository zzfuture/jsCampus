function encontrarSuma(numero) {
    lista = [2,4,3,6,9,8] // Lista de numeros a iterar buscando la pareja que sumando ambos miembros de igual a la suma
    parejas = [] // Lista de parejas, previamente vacia
    for(i = 0; i < lista.length; i++) { // bucle que inicia desde 0 hasta la longitud de la lista* aumentando la iteracion de 1 en 1
        a = lista[i] // candidato numero i para la suma
        for(p = 0; p < lista.length; p++) { // bucle que inicia desde 0 hasta la longitud de la lista* aumentando la iteracion de 1 en 1
            b = lista[p] // candidato numero p para la suma
            if (a != b) { // Siempre que la pareja no se conforme de iguales
                if ((a + b) == numero) { // Si la suma de la pareja es igual a suma
                    // console.log(`${a} + ${b} = ${numero}`) (Output mas bonito pero no requerido por el ejercicio)
                    lista.splice(lista.indexOf(a), 1) // Se elimina a de la lista
                    lista.splice(lista.indexOf(b), 1) // Se elimina b de la lista
                    parejas.push([a,b]) // Se agrega a y b como arreglo a la lista parejas*
                }
            }
        }
    }
    console.log(parejas) // Se imprime la lista parejas*
}

encontrarSuma(10) // Funcion(suma)