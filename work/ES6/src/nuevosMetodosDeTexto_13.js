/**
 * Curso de ES6 13.- Nuevos Métodos para Cadenas de Texto y Arreglos
 */


// Comprobar si empieza, acaba o contiene un string en otro:

const texto = 'Hola Mundo';
console.log(texto + ' Empieza con la h: ' + texto.toUpperCase().startsWith('H'));
console.log(texto + ' Acaba con la a: ' + texto.endsWith('a'));
console.log(texto + ' incluye bruno: ' + texto.toLowerCase().includes('bruno'));


// Comprobar si un array contiene un string:

const amigos = ['Manolo', 'Pepe', 'Maria'];
console.log(amigos + ' incluye Pepe: ' + amigos.includes('Pepe'));