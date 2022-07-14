/* Problema 2:

Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

`const input = [12, 46, 32, 64];`

Resultado esperado:

  `{ mean: 38.5, median: 32 }`*/

  const input = [12, 46, 32, 64];
  const res= {mean: 0, median: 0};
  var sumatoria = input.reduce(function(acumulador, siguienteValor){
    return acumulador + siguienteValor;
  }, 0);
  
  res.mean= sumatoria/input.length;

  // mediana
  const array= input.sort();
  res.median= array[(array.length/2)-1];

  console.log(res);
