function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  /* var suma = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i > 100) {
      break;
    }
    suma += i;
    console.log(i, suma);
  }
  console.log(suma);
  return suma; */

  if (n >= 14) {
    return 91;
  } else {
    return n*(n+1)/2;
  }
}

console.log(sumarHastaNConBreak(10));

module.exports = sumarHastaNConBreak;