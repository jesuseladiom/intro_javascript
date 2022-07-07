//ejercicio 2
var numero=Number(prompt("Ingresa un Numero:"));
if (! Number.isNaN(numero))
{
    //ciclo
    let i=1;
    while (i<=numero)
    {
        if (i % 5 == 0) //multuplo de 5
            console.log("el numero " + i + " es multiplo de 5");
        i++;
    }
}
else
    console.log("Debes de Capturar un Numero");