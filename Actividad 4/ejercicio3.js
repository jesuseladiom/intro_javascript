//ejercicio 3
var numero=Number(prompt("Ingresa un Numero:"));
if (! Number.isNaN(numero))
{
    //ciclo
    let i=1;
    
    do {
        if (i % 5 == 0) //multuplo de 5
            console.log("el numero " + i + " es multiplo de 5");
        i++;
    } while (i<numero);
}
else
    console.log("Debes de Capturar un Numero");