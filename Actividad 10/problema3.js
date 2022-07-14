const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

  let conteo = input.reduce((conteoActual, item)=>{
    for (let i=0; i<item.length; i++){
      conteoActual[item[i]] = (conteoActual[item[i]] || 0) + 1;
    }
    return conteoActual;
  }, {});
   
  console.log(conteo);
