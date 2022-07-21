// variables
const formBusqueda= document.querySelector('#form-busqueda');
const inputName= document.querySelector('#inputName');
const inputGenero= document.querySelector('#inputGenre');
const inputYear= document.querySelector('#inputYear');
const boxPeliculas= document.querySelector('#box-peliculas');

//crear un objeto con la seleccion del usuario
const datoBusqueda= {
    nombre:'',
    genero:'',
    year:''
}

document.addEventListener('DOMContentLoaded', ()=> {
    mostrarHTML(peliculas);
})

//crear funcion que recorre array
function mostrarHTML(peliculas) {

    limpiarHTML();

    peliculas.forEach( pelicula => {
        const {nombre, year, genero, descripcion, imagen}= pelicula;

        const cardPelicula= document.createElement('div');
        cardPelicula.classList.add('col', 'mb-3');
        cardPelicula.innerHTML= `
        <div class="card bg-secondary flex-row">
        <div class="w-50">
            <img src="./201.jpg" class="img-fluid object-fit" alt="">
        </div>
        <div class="card-body w-50">
            <h2 class="card-title">Optimus Prime</h2>
            <p>Optimus Prime</p>
            <p>Primera Aparicion: Transformers</p>
            <p>Descripcion:</p>
            <p>Es el nombre lider de los Autobots.</p>

        </div>
    </div>  
        `;

        boxPeliculas.appendChild(cardPelicula);

    })
}

//crear el envio del formulario
formBusqueda.addEventListener('submit', (e)=> {
    e.preventDefault();

    datoBusqueda.nombre= inputName.value;
    datoBusqueda.genero= inputGenero.value;
    datoBusqueda.year= inputYear.value;

    filtrarPeliculas(datoBusqueda);

    formBusqueda.reset();


})

//filtrar peliculas
function filtrarPeliculas() {
    const resultado= peliculas.filter(filtrarName).filter(filtrarGenero).filter(filtrarYear);

    if (resultado.length) {
        mostrarHTML(resultado);
    } else {
        sinResultado();
    }

    //cuando se envie el formulario y no haya opciones seleccionadas
    const hayResultado= Object.values(datoBusqueda).filter( e => e);
    
    if (hayResultado.length) {
        mostrarHTML(resultado);
        if (boxPeliculas.parentElement.lastChild.classList.contains('bg-danger') ) {
            boxPeliculas.parentElement.lastChild.remove();
        }
    } else {
        sinResultado();
    }

}

function filtrarName(pelicula) {
    const {nombre}= datoBusqueda;

    if (nombre) {
        return pelicula.nombre == nombre;
    }

    return peliculas;
}

function filtrarGenero(pelicula) {
    const {genero}= datoBusqueda;

    if (genero) {
        return pelicula.genero == genero;
    }

    return peliculas;
}

function filtrarYear(pelicula) {
    const {year}= datoBusqueda;

    if (year) {
        return pelicula.year == year;
    }

    return peliculas;
}

//funcion para limpiar tarjetas
function limpiarHTML() {
    while (boxPeliculas.firstChild) {
        boxPeliculas.firstChild.remove();
    }
}

function sinResultado() {
    limpiarHTML();
    const sinResultad= document.createElement('div');
    sinResultad.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultad.textContent= 'No Hay Resultados';

    boxPeliculas.parentElement.appendChild(sinResultad);
}