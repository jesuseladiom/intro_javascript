
var edad= Number(prompt("Ingresa la Edad"));
var anioNacimiento= Number(prompt("Año de Nacimiento"));
var municipio= prompt("Vives en un municipio de la frontera del Norte del pais (S/N)?");
var semanas= Number(prompt("Ingresa la cantidad de semanas de Gestacion si estas embarazada (0=Sin Embarazo)"));

//checa a que grupo pertenece
if (edad >= 18 && (municipio=='s' || municipio=='S') )
    document.write("Soy Mayor de edad y vivo en la frontera norte del pais");
else if (edad>=18 && semanas>9)
    document.write("Embarazadas mayores de 18 años con mas de 9 semanas de gestacion");
else if (2022 - anioNacimiento >= 30)
    document.write("Personas que cumplen 30 años o mas Este año");
else
    document.write("No Pertenece a ningun grupo");
