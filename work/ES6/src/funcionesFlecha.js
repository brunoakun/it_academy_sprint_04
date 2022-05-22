const nombres = ["Bruno", "Silvia", "Eva"];

// map ejecuta una función para cada elemento de un array, pasandole cada elemento del array a la función

/*
// Funciones tradicional:
const numeroCaracteres = nombres.map(function (nombre) {
    return (`${nombre} tiene ${nombre.length} letras`);
});
*/


const numeroCaracteres = nombres.map((nombre) => {
    return (`${nombre} tiene ${nombre.length} letras`);
});


/*
// Funciones flecha:
(parametro) => {
    // código a ejecutar
    return(valor)
}
*/

console.log(numeroCaracteres);