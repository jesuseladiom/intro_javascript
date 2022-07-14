/* Problema 7

**Objetos-Recursividad:**

Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`

*/
const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};

function propiedad(objeto){
    
    Object.keys(objeto).forEach(key => {
        let value = objeto[key];
        if (typeof(value)=='object') 
            propiedad(value);
        else if (key=="id") veces++;
            //console.log(`${key}: ${value}`);
        //console.log(typeof(value));
        //console.log(`${key}: ${value}`);
    });
    return veces;
}
let veces= 0;
console.log("Numero de veces encontrados la Propiedad Id: " + propiedad(root2));