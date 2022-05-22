// Función que devuelve un objeto:

const creaObjeto = (nombre, edad) => {
    return ({
        nombre: nombre,
        edad: edad,
        mostrarInfo() {
            // Esto es un método del objeto
            return (`${nombre} tiene ${edad} años`);
        }
    })
}


// Función (Acortada) que devuelve un objeto:

const creaObjeto2 = (nombre, edad) => {
    return ({
        nombre,
        edad
    })
}

let persona = creaObjeto('Bruno', 52);
console.log(persona);
console.log(persona.mostrarInfo());

let persona2 = creaObjeto('Manolo', 78);
console.log(persona2);
