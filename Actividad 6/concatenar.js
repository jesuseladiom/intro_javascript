// concatenar
var animals= ['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];

console.log(animals.concat(comingSoonAnimals));

// ordenar el arreglo
var arr=[4,6,1,0,8,2,45,11,5,33,50,101];
console.log(arr.sort(function(a,b){return a-b}));

//agregar un nuevo elemento cow
arr.push('cow');
console.log(arr.sort(function(a,b){return a-b}));

//retira el elemento eagle del arreglo animals
animals.shift();
console.log(animals);

//encuentra el index del animal parrot
console.log("el indice es: " + animals.indexOf('parrot'));