let res= document.getElementById('res');
let numero1=0;
let numero=0;
let operador='';
let borrar=false;

const button1= document.getElementById('uno');
const button2= document.getElementById('dos');
const button3= document.getElementById('tres');
const button4= document.getElementById('cuatro');
const button5= document.getElementById('cinco');
const button6= document.getElementById('seis');
const button7= document.getElementById('siete');
const button8= document.getElementById('ocho');
const button9= document.getElementById('nueve');
const button0= document.getElementById('cero');

const buttonSumar= document.getElementById('sumar');
const buttonRestar= document.getElementById('restar');
const buttonAc= document.getElementById('ac');
const buttonDividir= document.getElementById('dividir');
const buttonMultip= document.getElementById('multiplicar');
const buttonEnter= document.getElementById('enter');
const buttonPunto= document.getElementById('punto');

button1.addEventListener('click', function() {
    numeros(1); });
button2.addEventListener('click', function() {
    numeros(2); });
button3.addEventListener('click', function() {
    numeros(3); });
button4.addEventListener('click', function() {
    numeros(4); });
button5.addEventListener('click', function() {
    numeros(5); });
button6.addEventListener('click', function() {
    numeros(6); });
button7.addEventListener('click', function() {
    numeros(7); });
button8.addEventListener('click', function() {
    numeros(8); });
button9.addEventListener('click', function() {
    numeros(9); });
button0.addEventListener('click', function() {
    numeros(0); });

buttonSumar.addEventListener('click', function() {
        operacion('+'); });
buttonRestar.addEventListener('click', function() {
        operacion('-'); });
buttonDividir.addEventListener('click', function() {
        operacion('/'); });
buttonMultip.addEventListener('click', function() {
        operacion('x'); });
buttonPunto.addEventListener('click', function() {
        numeros('.'); });
buttonAc.addEventListener('click', function() {
        operacion('ac'); });
buttonEnter.addEventListener('click', function() {
        operacion('='); });


function numeros(num)
{
    let valor= document.getElementById('res').value;
    let cadena= res.value+'';

    if (borrar)
    {
        res.value= num;
        operador='';
    }
    if (num=='.' && cadena.indexOf('.')!=-1)
        res.value= valor + '';
    else
        res.value= valor + '' + num;

    borrar= false;
}

function operacion(opcion)
{
    switch(opcion)
    {
        case '+':
            if (operador=='')
                numero1=Number(res.value);
            res.value= "";
            operador=opcion;
            break;
        case '-':
            if (operador=='')
                numero1=Number(res.value);
            res.value= "";
            operador=opcion;
            break;
        case '/':
            if (operador=='')
                numero1=Number(res.value);
            res.value= "";
            operador=opcion;
            break;
        case 'x':
            if (operador=='')
                numero1=Number(res.value);
            res.value= "";
            operador=opcion;
            break;
        case '=':
            //operacion
            switch(operador)
            {
                case '+':
                    res.value= numero1 + Number(res.value);
                    break;
                case '-':
                    res.value= numero1 - Number(res.value);
                    break;
                case 'x':
                    res.value= numero1 * Number(res.value);
                    break;
                case '/':
                    if (Number(res.value)==0)
                        res.value= 'Error';
                    else
                        res.value= numero1 / Number(res.value);
                    break;
            }
            numero1= 0;  //se borra para la siguiente operacion
            //operador='';
            borrar= true;
            break;
        case 'ac':
            res.value= "";
            numero1=0;
            operador='';
            break;
        case '.':
            if (res.value.indexof('.')!=-1)
                res.value+= opcion;
            break;
    }
}