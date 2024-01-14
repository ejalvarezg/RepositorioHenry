function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  arreglo = [];
  for (let i = 0; i < 61; i++) {
    arreglo.push(i*6);
  }
  return arreglo;
}

module.exports = tablaDelSeis;
