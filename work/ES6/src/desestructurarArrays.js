const persona = ['Bruno', 23, 'España'];
const persona2 = ['Bruno', 23];


// Podemos descomponer un array en variables con cada uno de sus elementos
/*
const nombre = persona[0];
const edad = persona[1];
const pais = persona[2];
 */

// Podemos descomponer un array en variables con cada uno de sus elementos con EC6 y añadir valores por defectos
const [nombre, edad, pais = 'No especificado'] = persona;
const [nombre2, edad2, pais2 = 'No especificado'] = persona2;


console.log(persona);
console.log(nombre);
console.log(pais);

console.log(persona2);
console.log(nombre2);
console.log(pais2);


const monstarInfo = (persona) => {
    console.log(persona[0]);
}

monstarInfo(persona);