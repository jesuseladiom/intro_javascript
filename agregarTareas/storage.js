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