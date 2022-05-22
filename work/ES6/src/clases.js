class Usuario {

    // ATRIBUTOS de la clase Usuario
    constructor(nombre = 'desconocido', email, edad) {
        this._nombre = nombre;
        this._email = email;
        this._edad = edad;

        this.SALARIO = 1500;
        this.HAB_EMPLEADO = 20;
    }

    // GETTERS Y SETTERS
    get nombre() { return this._nombre; }
    get email() { return this._email; }
    get edad() { return this._edad; }

    set nombre(val) { this._nombre = val; }
    set email(val) { this._email = val; }
    set edad(val) { this._edad = val; }


    // METODOS DE LA CLASE 

    getDescipcion() {
        let resultado = "<ul>";
        resultado += '<li><b> Nombre: ' + this.nombre + "</b></li>";
        resultado += '<li>eMail: ' + this.email + "</li>";
        resultado += '<li>edad: ' + this.edad + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

}


////////////////////////////////////////////////////////

const USUARIOS = [];

for (persona of personas) {
    const usr = new Usuario(persona.nombre, persona.email, persona.edad);
    USUARIOS.push(usr);
}


for (usuario of USUARIOS) {
    console.log(`${usuario.nombre} ${usuario.edad} ${usuario.email} \n`);
}

