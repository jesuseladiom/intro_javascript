let titulo= document.querySelector("#paragraph");
let pantalla= document.querySelector("#bigImage");
let contMiniaturas= document.querySelector("#imgsContainer");

contMiniaturas.addEventListener('click', (e)=>{
    //console.log()
    if (e.target.src){
        pantalla.src= e.target.src;
        titulo.innerText= e.target.name;
    }
})