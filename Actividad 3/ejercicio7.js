//punto 7
var numero1= Number(prompt("numero1:"));
var numero2= Number(prompt("numero2:"));
var numero3= Number(prompt("numero3:"));

//encuentro el mayor
let mayor= numero1>=numero2 ? numero1 : numero2;
mayor= mayor>=numero3 ? mayor : numero3;

//informar si hay mas de 1 numero ganador
let contador=0;
if (numero1==mayor) contador++;
if (numero2==mayor) contador++;
if (numero3==mayor) contador++;

contador==1 ? alert("el numero mayor es: " + mayor) : alert("Hay mas de 1 ganador con el numero: " + mayor);