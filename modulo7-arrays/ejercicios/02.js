function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    // array.length - 1 - i: considera que el último elemento ya está ordenado, es el mayor
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambio de elementos
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } 
    }
  }
  return array;
}


module.exports = ordenarArray;
