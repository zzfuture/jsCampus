function esAsciiEntreAyZ(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        const valorAscii = cadena.charCodeAt(i);
        if (valorAscii < 97 || valorAscii > 122) {
            return false;
        }
    }
    return true;
}

function psw(a,b){
    let stringA = a;
    let stringB = b;
    if (!(esAsciiEntreAyZ(stringA))) {
        console.log('El valor ingresado en A no se encuentra entre el parametro ascii (a - z)');
        return
    }
    if (!(esAsciiEntreAyZ(stringB))) {
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
    let stringAStatus = true;
    let stringBStatus = true;
    for (i=0; i<((stringA.length)+(stringB.length)); i++) {
        if (stringA.length == i) {
            stringAStatus = false;
        }
        else if (stringB.length == i) {
            stringBStatus = false;
        }
        if (stringAStatus) {
            psw += stringA[i]
        }
        if (stringBStatus) {
            psw += stringB[i]
        }
        if (!stringAStatus && !stringBStatus) {
            break;
        }
    }
    console.log(psw)
}
psw('hackerrank','mountain')
// hackerrank
// mountain
// psw : hmaocuknetrariannk