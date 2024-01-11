function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  if (a > b) {
    for (let i = b; i < a + 1; i++) {
      producto = producto * i;
    }
  } else {
    for (let i = a; i < b + 1; i++) {
      producto = producto * i;
    }
  }
  if (producto === -0) {
    return 0;
  } else {
    return producto;
  }
}

module.exports = productoEntreNúmeros;