// variables
//const formBusqueda= document.querySelector('#form-busqueda');
const inputSearch= document.querySelector('#inputSearch');
const inputAll= document.querySelector('#all');
const inputEstufa= document.querySelector('#estufa');
const inputSala= document.querySelector('#sala');
const inputBoiler= document.querySelector('#boiler');
const inputRefri= document.querySelector('#refri');

const boxArticulos= document.querySelector('#box-articulos');

//crear un objeto con la seleccion del usuario
const datoBusqueda= {
    nombre:''
}

document.addEventListener('DOMContentLoaded', ()=> {
    mostrarHTML(articulos);
})

inputAll.addEventListener('click', ()=> {
    mostrarHTML(articulos);
})

inputEstufa.addEventListener('click', ()=> {
    const result = articulos.filter(articulo => articulo.categoria=='ESTUFA');

    mostrarHTML(result);

    /* if (boxArticulos.parentElement.lastChild.classList.contains('bg-danger') ) {
        boxArticulos.parentElement.lastChild.remove();
    } */
})



inputSala.addEventListener('click', ()=> {
    
    const result = articulos.filter(articulo => articulo.categoria=='SALA');

    mostrarHTML(result);
})

inputBoiler.addEventListener('click', ()=> {
    
    const result = articulos.filter(articulo => articulo.categoria=='BOILER');

    mostrarHTML(result);
})

inputRefri.addEventListener('click', ()=> {
    
    const result = articulos.filter(articulo => articulo.categoria=='REFRIGERADOR');

    mostrarHTML(result);
})

inputSearch.oninput = function() {
    // console.log(inputSearch.value);

    const result = articulos.filter(articulo => articulo.modelo.indexOf(inputSearch.value)!=-1);

    if (result.length) {
        mostrarHTML(result);

    
    } else {
        sinResultado();
    }

  };





//crear funcion que recorre array
function mostrarHTML(articulos) {

    limpiarHTML();

    articulos.forEach( articulo => {
        const {id, categoria, modelo, descripcion, precio, imagen}= articulo;

        const cardArticulo= document.createElement('div');
        cardArticulo.classList.add('col', 'mb-3');
        cardArticulo.innerHTML= `
        <div class="card bg-white flex-column">
        <div class="w-100">
            <img src="${imagen}" class="img-fluid object-fit" alt="">
        </div>
        <div class="card-body">
            <p class="text-center">${modelo}</p>
            <h6 class="card-title text-center">${precio}</h6>
        </div>
        </div>
            `;

        boxArticulos.appendChild(cardArticulo);

    })



}

//crear el envio del formulario
/*
formBusqueda.addEventListener('submit', (e)=> {
    e.preventDefault();

    datoBusqueda.nombre= inputName.value;
    datoBusqueda.genero= inputGenero.value;
    datoBusqueda.year= inputYear.value;

    filtrarPeliculas(datoBusqueda);

    formBusqueda.reset();


})
*/
//filtrar peliculas
function filtrarArticulos() {
    //const resultado= peliculas.filter(filtrarName).filter(filtrarGenero).filter(filtrarYear);

    const resultado= articulos;

    if (resultado.length) {
        mostrarHTML(resultado);
    } else {
        sinResultado();
    }

    //cuando se envie el formulario y no haya opciones seleccionadas
    /*
    const hayResultado= Object.values(datoBusqueda).filter( e => e);
    
    if (hayResultado.length) {
        mostrarHTML(resultado);
        if (boxPeliculas.parentElement.lastChild.classList.contains('bg-danger') ) {
            boxPeliculas.parentElement.lastChild.remove();
        }
    } else {
        sinResultado();
    }
    */

}
/*
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
*/
//funcion para limpiar tarjetas
function limpiarHTML() {
    while (boxArticulos.firstChild) {
        boxArticulos.firstChild.remove();
    }
}

function sinResultado() {
    limpiarHTML();
    const sinResultad= document.createElement('div');
    sinResultad.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultad.textContent= 'No Hay Resultados';

    boxArticulos.parentElement.appendChild(sinResultad);
}