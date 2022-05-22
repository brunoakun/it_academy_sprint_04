// Podemos desestructurar un objeto en todos sus elementos

const usuario = {
    nombre: 'Manolo',
    email: 'bruno@email.com',
    edad: 22,
    pais: 'España'
}

const { nombre, pais } = usuario;

console.log(usuario);
console.log(nombre);