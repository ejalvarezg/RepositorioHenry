var listaDeCompras = [];

listaDeCompras[3] = 'Tomates'; // En posiciones 0, 1, 2 se crean posiciones vacías

listaDeCompras[1] = 'Lechuga';

var elemento = listaDeCompras[1];
console.log(elemento);

// listaDeCompras = [ <1 empty item>, 'Lechuga', <1 empty item>, 'Tomates' ]
console.log(listaDeCompras.length);


/*
    Los arreglos, además de ser un tipo de dato, son un objeto.
    Por lo tanto, están asociados a una serie de métodos.
*/

var colores = ['Amarillo', 'Azul']

// Métodos de inserción
colores.push('Rojo'); // Al final
console.log(colores);

colores.unshift('Verde'); // Al comienzo
console.log(colores);

colores.pop(); // Elimina el último elemento
console.log(colores);

colores.shift(); // Elimina el primer elemento
console.log(colores);

// Ver si un arreglo tiene un elemento
console.log(colores.includes('Amarillo'));

var numeros = [1,2,3,4]
// every: recorre todos los elementos
var condicion = numeros.every((num) => {
    return num < 5;
})

console.log(condicion);

// split y join: strings y arreglos
var palabra = 'Henri';
// El argumento de split es el caracter donde se separa. Si no o hay, separa todos los caracteres
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push('y');
var palabraArreglada = palabraSeparada.join('');

console.log(palabra);
console.log(palabraSeparada);
console.log(palabraArreglada);

// Métodos de recorrido
numeros.forEach((num) => {
    console.log(num);
});

numeros.forEach((num) => {
    if (num === 3) {
        console.log(num);
    }
});

// map crea una copia del arreglo, con los cambios indicados
var masuno = numeros.map((num) => {
    return num + 1;
});
console.log(masuno);


/*
    Más métodos:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/*
    Bucles en arreglos
*/

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

function encontrarLetraP(string) {
    var letras = string.split('');

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'p') {
            console.log('Sí contiene "p"');
        }
    }
}

encontrarLetraP('JavaScript'); // 1
encontrarLetraP('Curso'); // 0

// WHILE
var arr2 = [];
while (arr2.length < 5) {
   arr2.push('BOOM');
}
console.log(arr2);