function obtenerItem() {
    let nombre= localStorage.getItem('nombre');
    let array= json.parse(localStorage.getItem('array'));
    let asistente= json.parse(localStorage.getItem('asistentes'));
    
}

function eliminarItem(key) {
    localStorage.removeItem(key);
}

function eliminarTodosItem() {
    localStorage.clear();
}

function addItem(key, item) {
    if (typeof item== 'string')
        localStorage.setItem(key, item);
    else
        localStorage.setItem(key, JSON.stringify(item));
}

document.addEventListener('DOMContentLoaded', ()=> {
    saludo.textContent= "bato";
})

//eliminarTodosItem();

const user= document.querySelector('#usuario');
const pwd= document.querySelector('#pwd');
const boton= document.querySelector('#boton');
const saludo= document.querySelector('#saludo');

boton.addEventListener('click', ()=> {
    agregar();
    
})

function agregar() {
    addItem('usuario', user.value);
    addItem('pwd', pwd.value);


    saludo.textContent= `Bienvenido ${user.value}`;
}