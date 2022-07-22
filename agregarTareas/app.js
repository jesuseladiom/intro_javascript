const boton= document.querySelector('#boton');
const tarea= document.querySelector('#tarea');

const boxListado= document.querySelector('#listado');

let tareas= [];

boton.addEventListener('click', () => {
    agregarTarea();
})

function agregarTarea() {
    tareas.push(tarea.value);

    console.log(tareas);

    addItem('tareas', tareas);

    agregarListado(tarea.value);

    tarea.value= '';  //resetea

}

function agregarListado(item) {
    console.log(`el item es ${item}`);
    const element= document.createElement('div');
        element.classList.add('list-group');
        element.innerHTML= `
        <li class="list-group-item">${item}</li>
        </ul>
            `;

    boxListado.appendChild(element);
}