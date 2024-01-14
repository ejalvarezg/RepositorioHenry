function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var conteo = 0;
  array.forEach(element => {
    if (element > 10) conteo++;
  });
  return conteo;
}

module.exports = contarElementosMayoresA10;
