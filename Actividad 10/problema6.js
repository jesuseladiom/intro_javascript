/*Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

`matriz = [7,2,5,3,5,3]`

`br = [7,2,5,4,6,3,5,3]`

Los números que faltan en arr son `[4,6]`*/

const matriz = [7,2,5,3,5,3];
const br = [7,2,5,4,6,3,5,3];

let res= [];
for (let i=0; i<br.length; i++)
{
    if (! matriz.includes(br[i])) res.push(br[i]);
}

console.log(res);