function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  // Verificar si la fecha de nacimiento es válida
  if (!(fechaNacimiento instanceof Date) || isNaN(fechaNacimiento)) {
    console.error('La fecha de nacimiento ingresada no es válida.');
    return false;
  }

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Calcular la edad restando el año de nacimiento al año actual
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Verificar si la persona es mayor de edad (18 años o más)
  return edad >= 18;
}

module.exports = esMayorDeEdad;