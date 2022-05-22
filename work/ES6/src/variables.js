//Con var, es posible volver a declarar una variable 
/*
var nombre = "Manolo";
var nombre = "Pepe";
*/

// Con let no deja redeclarar variables

let nombre2 = "Manolo";
// let nombre="Pepe";       // Esto daría error


function saludo() {
    let nombre2 = "María";
    return (nombre2);
}

console.log('HOLA ' + nombre2);
console.log(saludo());