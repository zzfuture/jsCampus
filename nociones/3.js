// Acorde con la edad de una persona, imprime el año en que nació.
function añoNacimiento(edad) {
    añoActual = 2023;
    aNacimiento = añoActual - edad;
    console.log(`Nacio el año ${aNacimiento}`);
}
añoNacimiento(19);

// Crear una función que tome un valor de grados Celsius y la pase a grados Farenheit (ºF = 32 + (9 * ºC / 5)).
function cAf(celcius) {
    farenheit = 32 + (9 * celcius / 5);
    resultado = `${celcius}ºC == ${farenheit}ºF`;
    return resultado;
}
console.log(cAf(2));