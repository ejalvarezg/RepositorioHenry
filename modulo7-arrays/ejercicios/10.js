function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indice = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        if (array[i] > array[indice]) {
          indice = i;
        }
      }
    }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;
