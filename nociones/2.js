// Funcion que no retorna ni recibe parametros
function mensaje() {
    console.log("Hello World!");
}
mensaje();
console.log(mensaje());
// Funcion que retorna pero no recibe paramentros

function r() {
    return "Hola";
}
r();
console.log(typeof r());
console.log(r());

// Funcion que no retorna pero recibe paramentros

function areaRectangulo(b,h) {
    resultado = b * h;
    console.log(resultado);
}
areaRectangulo(2,3);

// Funcion que retorna y recibe paramentros
function areaRectangulo(b,h) {
    return b * h;
}
console.log(areaRectangulo(2,3));