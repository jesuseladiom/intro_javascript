let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda);
// → 1
delete unObjeto.izquierda;
console.log(unObjeto.izquierda);
// → undefined
console.log("izquierda" in unObjeto);
// → false
console.log("derecha" in unObjeto);
// → true
console.log(unObjeto);


//otro ejemplo
let diario = [
    {eventos: ["trabajo", "toque un arbol", "pizza",
              "sali a correr", "television"],
     ardilla: false},
    {eventos: ["trabajo", "helado", "coliflor",
              "lasaña", "toque un arbol", "me cepille los dientes"],
     ardilla: false},
    {eventos: ["fin de semana", "monte la bicicleta", "descanso", "nueces",
              "cerveza"],
     ardilla: true},
    /* y asi sucesivamente... */
  ];
