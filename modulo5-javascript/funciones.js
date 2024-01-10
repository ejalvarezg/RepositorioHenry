/*
    Sintaxis para escribir funciones
*/

function sumaTres(x) {
    return x + 3;
}

var sumarTres = function (x) {
    return x + 3;
}


//Función flecha
var sumarleTres = (x) => {
    return x + 3;
}

console.log(sumaTres(5));
console.log(sumarTres(5));
console.log(sumarleTres(5));