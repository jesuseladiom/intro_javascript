//declara un arreglo vacio, con un ciclo while que se ejecute 5 veces
//agrega los elementos al array

var arreglo= [];
let contador=0;

while(contador<5)
{
    arreglo[contador]= contador;
    contador++;
}

for (var i=0;i<5;i++)
    console.log(arreglo[i]);