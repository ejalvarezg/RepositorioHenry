function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let meses = []
  array.forEach(element => {
    if (element === 'Enero' || element === 'Marzo' || element === 'Noviembre') {
      meses.push(element);
    }
  });
  var enero = meses.find((mes) => mes === 'Enero');
  var marzo = meses.find((mes) => mes === 'Marzo');
  var noviembre = meses.find((mes) => mes === 'Noviembre');
  if (enero === 'Enero' && marzo === 'Marzo' && noviembre === 'Noviembre') {
    return meses;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}

module.exports = mesesDelAño;
