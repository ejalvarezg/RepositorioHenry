function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Objeto para realizar un seguimiento de los elementos vistos
  var elementosVistos = {};

  // Recorremos el array
  for (var i = 0; i < numeros.length; i++) {
    // Verificamos si el elemento ya ha sido visto
    if (elementosVistos[numeros[i]] !== undefined) {
      // Si es así, devolvemos el primer elemento repetido
      return numeros[i];
    }

    // Marcamos el elemento como visto
    elementosVistos[numeros[i]] = true;
  }
}

module.exports = encontrarElementoRepetido;