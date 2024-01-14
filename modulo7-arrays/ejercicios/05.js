function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var stringLargo = undefined;
  var indice = 0;
  while (indice < array.length && stringLargo === undefined) {
    if (array[indice].length >= 5) {
      stringLargo = array[indice];
    }
    indice++;
  }
  return stringLargo;
}

module.exports = obtenerPrimerStringLargo;
