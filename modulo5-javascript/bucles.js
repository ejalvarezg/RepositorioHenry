var suma = 0;

// Ciclo for
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
console.log('Variable suma: ', suma);

// Ciclo while
suma = 0;
while(suma < 3) {
    suma = suma + 1;
    console.log(suma);
};

/* 

    DO... WHILE

La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada,
hasta que la condición de comprobación se evalúa como falsa.
La condición se evalúa después de ejecutar la sentencia,
dando como resultado que la sentencia especificada se ejecute al menos una vez.

*/

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
