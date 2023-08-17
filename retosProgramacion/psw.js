function esAsciiEntreAyZ(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        const valorAscii = cadena.charCodeAt(i); // Se verifica que numero en la codificacion ascii es el caracter actual
        if (valorAscii < 97 || valorAscii > 122) {  // Si valorAscii actual esta entre 97 y 122 es valido
            return false; // De lo contrario se devuelve un false
        }
    }
    return true;
}

function psw(a,b){
    let stringA = a;
    let stringB = b;
    if (!(esAsciiEntreAyZ(stringA))) { // Si el string tiene algun caracter que no este entre a - z se devuelve false, pero lo invertimos para poder hacer una accion dentro del condicional
        console.log('El valor ingresado en A no se encuentra entre el parametro ascii (a - z)');
        return
    }
    if (!(esAsciiEntreAyZ(stringB))) { // Si el string tiene algun caracter que no este entre a - z se devuelve false, pero lo invertimos para poder hacer una accion dentro del condicional
        console.log('El valor ingresado en B no se encuentra entre el parametro ascii (a - z)');
        return
    }
    if (stringA.length > 25000) {
        console.log('A Supera el maximo de caracteres permitidos');
        return
    }
    else if (stringB.length > 25000) {
        console.log('B Supera el maximo de caracteres permitidos');
        return
    }
    if (stringA.length < 1) {
        console.log('A no cumple con el minimo de numero caracteres requeridos');
        return
    }
    else if (stringB.length < 1) {
        console.log('B no cumple con el minimo de numero caracteres requeridos');
        return
    }
    let psw = '';
    let stringAStatus = true; // El estado de los string se declara positivo desde un inicio para poder concatenarlos
    let stringBStatus = true; // El estado de los string se declara positivo desde un inicio para poder concatenarlos
    for (i=0; i<((stringA.length)+(stringB.length)); i++) { // El for sera igual de largo a la suma de la longitud de ambos strings
        if (stringA.length == i) {// Si el string ya ha terminado de concatenarse, su status cambia a falso para no intentar nuevamente
            stringAStatus = false;
        }
        else if (stringB.length == i) {// Si el string ya ha terminado de concatenarse, su status cambia a falso para no intentar nuevamente
            stringBStatus = false;
        }
        if (stringAStatus) { 
            psw += stringA[i]
        }
        if (stringBStatus) {
            psw += stringB[i]
        }
        if (!stringAStatus && !stringBStatus) {  // Si ambas han terminado de concatenarse se acaba el ciclo for
            break;
        }
    }
    console.log(psw)
}
psw('hackerrank','mountain')
// hackerrank
// mountain
// psw : hmaocuknetrariannk

// Iker Fernando Acevedo Silva