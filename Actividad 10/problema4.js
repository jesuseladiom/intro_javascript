/*Escriba una función de JavaScript que tomará una serie de números almacenados

y encontrará el segundo número más bajos y segundos más altos, respectivamente

del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]
*/
const arr = [3,4,6,1,5,2,9,10,23,12];


function alto_bajo(arreglo){
    let ordenado= arreglo.sort((a,b)=>{return a-b});
    console.log(ordenado);
    console.log(`El segundo numero mas bajo es: ${ordenado[1]}, y el segundo mas alto es ${ordenado[ordenado.length-2]}`);
}

alto_bajo(arr);