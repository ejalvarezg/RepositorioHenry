function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

    // Elimina los espacios y convierte a minúsculas
    var cadena1 = str1.replace(/\s/g, '').toLowerCase();
    var cadena2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Convierte las cadenas en arrays de caracteres
    var caracteres1 = cadena1.split('');
    var caracteres2 = cadena2.split('');
  
    // Ordena los arrays de caracteres
    var caracteresOrdenados1 = caracteres1.sort();
    var caracteresOrdenados2 = caracteres2.sort();
  
    // Convierte los arrays ordenados de nuevo a strings
    var cadenaOrdenada1 = caracteresOrdenados1.join('');
    var cadenaOrdenada2 = caracteresOrdenados2.join('');
  
    // Compara las cadenas ordenadas para determinar si son anagramas
    return cadenaOrdenada1 === cadenaOrdenada2;
}

module.exports = esAnagrama;
