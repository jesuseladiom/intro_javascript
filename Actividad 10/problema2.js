const numbers = [ 1, -4, 12, 0, -3, 29, -150];

let suma=0;
for (let i=0; i<numbers.length; i++)
{
    if (numbers[i]>0) suma+= numbers[i];

}

console.log("la suma es: " + suma);