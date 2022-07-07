//punto 1
/*var nombre= prompt("Nombre:");
var edad= Number(prompt("Edad:"));

edad >=18 ? document.write("Puedes ingresar a la discoteca"+"<br>") : document.write("No puede ingresar a la discoteca"+"<br>")

if (nombre=="Carlos" || nombre=="Mario") 
    document.write("Puedes ingresar a VIP"+"<br>")
*/

//punto 2
/*var jugador1= prompt("Piedra / Papel / Tijera:");
var jugador2= prompt("Piedra / Papel / Tijera:");

if (jugador1=="PIEDRA" && jugador2=="TIJERA")
    document.write("Gana Jugador1"+"<br>");
else if (jugador1=="PIEDRA" && jugador2=="PAPEL")
    document.write("Gana Jugador2"+"<br>");
else if (jugador1=="PIEDRA" && jugador2=="PIEDRA")
    document.write("EMPATADOS"+"<br>");
else if (jugador1=="PAPEL" && jugador2=="PIEDRA")
    document.write("Gana Jugador1"+"<br>");
else if (jugador1=="PAPEL" && jugador2=="PAPEL")
    document.write("EMPATADOS"+"<br>");
else if (jugador1=="PAPEL" && jugador2=="TIJERA")
    document.write("Gana Jugador2"+"<br>");
else if (jugador1=="TIJERA" && jugador2=="PIEDRA")
    document.write("Gana Jugador2"+"<br>");
else if (jugador1=="TIJERA" && jugador2=="PAPEL")
    document.write("GANA JUGADOR1"+"<br>");
else if (jugador1=="TIJERA" && jugador2=="TIJERA")
    document.write("EMPATADOS"+"<br>");*/

//punto 3
/*var numero= Number(prompt("numero:"));
numero % 2 > 0 ? alert(numero + " No es Divisible entre 2") :  alert(numero + " SI es Divisible entre 2");
*/

// punto 4
/*
var numero= Number(prompt("numero:"));
numero % 2 > 0 ? alert(numero + " No es Par") :  alert(numero + " SI es Par");
*/

// punto 5
/*
var numero= Number(prompt("numero:"));
numero==1000 ? document.write("Ganaste un premio") : document.write("Lo Sentimos Sigue Participando");
*/

//punto 6
/*
var numero1= Number(prompt("numero:"));
var numero2= Number(prompt("numero:"));
numero1 > numero2 ? document.write("El numero " + numero1 + " es mayor") : document.write("El numero " + numero2 + " es mayor")
*/

//punto 7
var numero1= Number(prompt("numero:"));
var numero2= Number(prompt("numero:"));
var numero3= Number(prompt("numero:"));

if (numero1 >= numero2)
    if (numero1 > numero3)
        document.write("el numero1 " + numero1 + " es el mayor");
    else
        document.write("el numero3 " + numero3 + " es el mayor");

else if (numero2 > numero1)
        if (numero2 > numero3)
            document.write("el numero2 " + numero2 + " es el mayor");
        else
            document.write("el numero3 " + numero3 + " es el mayor");
