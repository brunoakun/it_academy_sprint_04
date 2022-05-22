/**
 * Curso de ES6 11.- Parametros Rest y Spread
 */


// Función con parámetros normales
const mostrarDatos = (nombre, edad, pais) => {
    return (`${nombre} tiene ${edad} años `);
}


// Función con parámetros acortados
const mostrarDatos2 = (...data) => {
    return (data);
}


console.log(mostrarDatos('bruno', 34, 'España'));
console.log(mostrarDatos2('Pepe', 54, 'España'));