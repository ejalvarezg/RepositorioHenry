function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var raiz = Math.ceil(Math.sqrt(numero))
  if (numero === 2) {
    return true;
  }
  if (numero % 2 === 0) {
    return false;
  } else {
    for (var i = 3; i < raiz + 1; i+=2) {
      if (numero % i === 0) {
        return false
      }
    }
    return true
  }
}

module.exports = esNumeroPrimo;
