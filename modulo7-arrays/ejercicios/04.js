function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var posicionAleatoria = Math.floor(Math.random() * array.length);
  return array[posicionAleatoria];
}

module.exports = obtenerElementoAleatorio;
