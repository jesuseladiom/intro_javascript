
var arreglo=[1,4,6,10,22,55, 46, 2, 5, 0];

let aux=0;
for(let i=0; i<arreglo.length; i++)
{
    for (let j=i; j<=arreglo.length; j++)
    {
        if (arreglo[i] > arreglo[j])
        {
            aux= arreglo[i];
            arreglo[i]= arreglo[j];
            arreglo[j]= aux;
        }
    }
}

for(let i=0; i<arreglo.length; i++)
    console.log(arreglo[i]);