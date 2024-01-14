function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayusculas = array.map(function (cad) {
    return cad.toUpperCase();
  });
  return mayusculas;
}

console.log(convertirStringAMayusculas(['hola', 'mundo', 'cruel']));

module.exports = convertirStringAMayusculas;
