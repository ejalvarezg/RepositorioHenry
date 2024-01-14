function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var encontrado = -1;
  array.forEach(element => {
    if (element === elemento) {
      encontrado = 1;
    }
  });
  return encontrado;
}

module.exports = encontrarElemento;
