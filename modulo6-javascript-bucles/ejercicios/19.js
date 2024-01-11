function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // return (n*(n+1)/2)
  // Usando el ciclo:
  var suma = 0;
  for (let i = 1; i < n + 1; i++) {
    suma += i;
  }
  return suma;
}

module.exports = sumarHastaN;
