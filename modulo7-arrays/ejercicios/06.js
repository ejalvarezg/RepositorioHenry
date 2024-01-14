function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arreglo = array.map(function (num) {
    return num * 2;
  });
  return arreglo;
}

console.log(duplicarElementos([1,2,3,4]));

module.exports = duplicarElementos;
