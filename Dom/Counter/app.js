let contador=0;

let valueSpan= document.getElementById('contador');

const buttonIncrement= document.getElementById('btn-incremento');

buttonIncrement.addEventListener('click', function() {
    contador++;
    valueSpan.textContent= contador;
});

function incrementa2()
{
    contador++;
    valueSpan.textContent= contador;
}

function decrementa()
{
    contador--;
    valueSpan.textContent= contador;
}