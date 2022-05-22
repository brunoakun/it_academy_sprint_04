/**
 * Curso de ES6 12.- Promesas
 */

// Las promesas ejecutan un código si una llamada es correcta y otro código si es incorrecta (resolve, reject)

const promesa = new Promise((resolve, reject) => {
    // Aquí hacemos una llamada Ajax, si no responde llamamos a reject() y si responde llamamos a resolve()
    resolve();
});


promesa.then(() => {
    // Esto se ejecuta cuando llamamos a resolve();
    alert("Exito");
});

promesa.catch(() => {
    // Y esto cuando llamamos a reject();
    alert("No ha funcionado");
});