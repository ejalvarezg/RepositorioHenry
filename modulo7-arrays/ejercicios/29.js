function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var cond = 0;
  var band = false;
  if (numeros.length === 0 || numeros.length === 1) {
    return null;
  } else {
    var inicio = numeros[0];
    for (i = 1; i < numeros.length; i++) {
      if (numeros[i] === inicio + 1) {
        inicio = numeros[i];
      } else {
        cond = inicio + 1;
        band = true;
      }
    }
  }
  if (band === true) {
    return cond;
  } else {
    return null;
  }
}

console.log(encontrarNumeroFaltante([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
  94, 95, 96, 97, 98, 99, 100,
]));

module.exports = encontrarNumeroFaltante;