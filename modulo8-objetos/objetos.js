var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking']
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

 console.log(persona.edad);

 /*
    TRABAJAR CON OBJETOS:
    
    Dot notation: .
        nombreObjeto.propiedad
    Bracket notation: []

 */

// Modificar valores
persona.nombre = 'Martin';
persona.edad = 32;

console.log(persona.nombre, persona.edad);

// Crear propiedades
var autos = {}

autos.marcas = ['Ford', 'Audi', 'Ferrari'];

console.log(autos.marcas);

// Eliminar propiedades
delete(autos.marcas);
console.log(autos);


// Guardar funciones en objetos
var misFunciones = {
    saludar: function() {console.log('Hola');}
}

misFunciones.saludar();

// Bracket notation
var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes']
}

console.log(atuendos["manos"]); // Importante: escribir la propiedad como string

atuendos["piernas"] = ['Bermudas', 'Pantalones'];

console.log(atuendos);


// Una diferencia entre ambas notaciones: asignar nombres a las propiedades:
// Con dot notation no se puede asginar como clave un parámetro/variable. Debe usarse bracket notation, sin comillas

var comidas = {}
var diferenciasDeNotaciones = function(propUno, propDos) {
    comidas.propUno = ['Frutas', 'Verduras'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
}

diferenciasDeNotaciones('saludable', 'noSaludable'); // Se crean las propiedades propUno y 'noSaludable'
console.log(comidas);


/*
    MÉTODOS DEL OBJETO GLOBAL {https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object}
    
    ITERACIONES Y CONTEXTO

    .hasOwnProperty(), .keys()

    for (let propiedad in objeto) {https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in}
    this. {https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this}
*/

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);


// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var propiedades = Object.keys(libro);
console.log(propiedades);

// FOR-IN
var mundo = {
    'contienente': 7,
    'paises': 195,
    'oceanos': 5
}

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
}


//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
        console.log('Mi perro es un  ' + this.raza);
    },
 };

 mascota.info();


/*
    FUNCIONES CALLBACK:

    Son funciones que pasan por parámetro a otras funciones.
    Supongamos que tenemos una función 1 que recibe por parámetro a una función 2.
    Cuando la función 1 ejecuta a la función 2 en su interior,
    se produce un proceso llamado “callback”.

    Los callbacks son muy útiles en el mundo de la programación,
    nos aseguran que una función no se va a ejecutar antes de que se complete una tarea,
    sino que se ejecutará justo después de que la tarea se haya completado.
*/

function devuelvoUsuario() {
    return 'Camilo';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }

 // Función que recibe dos callbacks
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);


 // OTRO EJEMPLO:

var devuelvoFrase = function(comida) {
    return 'Hoy quiero comer ' + comida;
}

var hablar = function(comida, cb) {
    return cb(comida);
}

var fraseFinal = hablar('fideos', devuelvoFrase);

console.log(fraseFinal);