function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  potencia = 1;
  exp = 0;
  while (potencia <= numero) {
    potencia = Math.pow(2, exp);
    if (potencia === numero) {
      return true;
    } else {
      exp += 1;
    }
  }
  return false;
}

module.exports = esPotenciaDeDos;
