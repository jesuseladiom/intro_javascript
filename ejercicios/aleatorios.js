


do {
    var num1= Math.floor(Math.random() * 9);
    var num2= Math.floor(Math.random() * 999);

    var res= Number(prompt("Cual es el resultado de la multiplicion de: " + num1 + " x " + num2));

    if (res==num1*num2)
        alert("Ganaste");
} while (res!==num1*num2);

