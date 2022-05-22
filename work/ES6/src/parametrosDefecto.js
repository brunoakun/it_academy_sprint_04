// Si no se pasan valores a un función, podemos darle valores por defecto

function registrarUsuario(nombre, pais, email = 'NO especificado', telefono = '0000000') {
    return (`nombre: ${nombre}, país: ${pais}, email: ${email}, telefono: ${telefono}`);
}

console.log(registrarUsuario("Bruno", "España"));