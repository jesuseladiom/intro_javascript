//var num= Number(prompt("ingresa un numero:"));
const num=6;

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log("el factorial de " + num + " es " + factorialRecursivo(num));