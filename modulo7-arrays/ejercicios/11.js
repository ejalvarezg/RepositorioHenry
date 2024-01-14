function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var arreglo = [];
  for (let i = 0; i < array.length; i++) {
    arreglo.push(i*array[i]);
  }
  return arreglo;
}

module.exports = multiplicarElementosPorIndice;
