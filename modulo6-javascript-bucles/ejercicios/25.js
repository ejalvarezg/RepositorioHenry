function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  // Elimina los espacios y convierte a minúsculas
  var cadenaSinEspacios = string.replace(/\s/g, '').toLowerCase();

  // Convierte la cadena sin espacios en un array de caracteres
  var caracteres = cadenaSinEspacios.split('');

  // Invierte el array de caracteres
  var caracteresInvertidos = caracteres.reverse();

  // Convierte el array invertido de nuevo a un string
  var cadenaInvertida = caracteresInvertidos.join('');

  // Compara la cadena original con la invertida
  return cadenaSinEspacios === cadenaInvertida;
}

module.exports = esPalindromo;
