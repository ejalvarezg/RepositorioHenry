function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var condicion = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        condicion = false;
      }
    }
  }
  return condicion;
}

module.exports = todosIguales;
