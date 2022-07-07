//imprimir una lista del 1 al 100 usando for loop exluyendo un rango
var inicio=Number(prompt("Ingresa el Numero del Rango Inicial a Excluir:"));
var fin=Number(prompt("Ingresa el Numero del Rango Final a Excluir:"));

if ( Number.isNaN(inicio) ||  Number.isNaN(fin))
    alert("Debes de capturar Numeros");
else 
{
    var contador= 0;
    for(let i=1; i<=100; i++)
    {
        if (i>=inicio && i<=fin)
        {
            contador++;
            if (contador<=10)
                continue;
        }
        console.log(i);
    }
}