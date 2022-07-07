//punto 2
var jugador1= prompt("Piedra / Papel / Tijera del JUGADOR1:");
var jugador2= prompt("Piedra / Papel / Tijera del JUGADOR2:");

if (jugador1==jugador2)
    alert("EMPATADOS");
else
    switch(jugador1)
    {
        case 'PIEDRA':
            if (jugador2=="PAPEL") alert("Jugador2 Ganó");
            else alert("Jugador1 Ganó");
            break;
        case 'PAPEL':
            if (jugador2=="TIJERA") alert("Jugador2 Ganó");
            else alert("Jugador1 Ganó");
            break;
       case 'TIJERA':  
            if (jugador2=="PAPEL") alert("Jugador2 Ganó");
            else alert("Jugador1 Ganó");
            break;
}
