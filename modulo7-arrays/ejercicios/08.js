function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var pares = [];
  array.forEach(element => {
    if (element % 2 === 0) pares.push(element);
  });
  return pares;
}

module.exports = filtrarNumerosPares;
