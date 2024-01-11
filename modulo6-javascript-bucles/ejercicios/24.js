function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // Convierte el string en un array de caracteres
  var caracteres = texto.split('');

  // Invierte el array de caracteres
  var caracteresInvertidos = caracteres.reverse();

  // Convierte el array invertido de nuevo a un string
  var stringInvertido = caracteresInvertidos.join('');

  return stringInvertido;
}

module.exports = invertirTexto;