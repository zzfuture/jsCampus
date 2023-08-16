// Secuencia de numeros sin necesidad de uso de strings

let numeroPadre = 9;
let numeroTemporal = 0;
for (i=0; i<numeroPadre; i++) {
    numeroTemporal = (numeroTemporal * 10) + i + 1
    console.log(numeroTemporal);
}