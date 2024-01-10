console.log(3+5);
var nombre = 'Erik';
var saludo = 'Hola ' + nombre;
console.log(saludo);

console.log ('4 < 7', 4 < 7); 
console.log ('4 < 1', 4 < 1 );
console.log ('4 > 4', 4 > 4); 
console.log ('4 == 7', 4 == 7);

/*
    Operandos =, ==, ===
        = asignación
        == verifica coincidencia de valor
        === verifica coincidencia de valor y tipo de dato
*/

// Importante: precedencia de la igualdad cuando se tiene el mismo nivel: se ejecutra de derecha a izquierda
var a = 1;
var b = 2;
console.log('a, b =>', a, b)
var c = a = b; //ejecuta primero a = b, es decir, a = 2, y después c = a.

console.log('a, b, c =>', a, b, c)

/* 
    En otras operaciones, la precedencia es de izquierda a derecha
*/
console.log('16/4/2 =', 16/4/2);