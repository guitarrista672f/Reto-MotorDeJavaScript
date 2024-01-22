
//Accesando datos del archivo autos.json
const response= await fetch("./autos.json")
const  autos=await response.json();
  
//contador
let contador=1;


 // Consultas
 let d=document;
 let titulo=d.getElementById("title");
 let pelicula=d.getElementById("movie");
 let picture=d.getElementById("foto");
 let descripcion=d.getElementById("description");
 const btn=d.getElementById("btn");
 let rayo=d.getElementById("rayo");

 //Escuchar eventos
 btn.addEventListener('click',handler);


 function handler(){
    if(contador>10){contador=1;}//reseteo para continuar en modulo 10
    let q=contador % 10;
    console.log('handler' + q);
    //desestructurar objeto
    const{name:autoTitulo,pelicula:autoPelicula,ruta,description}=autos[q];

    //Asignar datos
    titulo.innerText=autoTitulo;
    pelicula.innerText=autoPelicula; 
    picture.setAttribute("src",ruta);
    descripcion.innerText=description;

    //Transisiones
    setTimeout(()=>{
      rayo.classList.remove("rayo-transition");
      btn.classList.remove("btn-transition");
    },800);
    setTimeout(()=>{
      picture.classList.remove("img-transition");
    },2000);
    picture.classList.add("img-transition");
    btn.classList.add("btn-transition");
    rayo.classList.add("rayo-transition");
   
    contador++;

 }


 




    




