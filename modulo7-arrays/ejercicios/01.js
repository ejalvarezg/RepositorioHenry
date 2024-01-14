function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var arreglo = []
  array.forEach(element => {
    arreglo.unshift(element);
  });
  return arreglo;
}

module.exports = invertirArray;
