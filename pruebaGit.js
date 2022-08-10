

let cambiar=()=>{
    let titulo=document.querySelector("h1");
    if(titulo.innerHTML=="Bienvenido"){
        titulo.innerHTML="Adios";
    } else {
        titulo.innerHTML="Bienvenido";
    }
}

let contar=0;

let cont=()=>{
    contar++;
    document.querySelector(".contador").innerHTML=contar;
    if (contar%10===0){
        alert(`Llegaste a ${contar}`)
    }
}

let zero=()=>{
    contar=0;
    document.querySelector(".contador").innerHTML=contar;
}

document.addEventListener("DOMContentLoaded", function (){document.querySelector(".cambiar").onclick=cambiar});
// con este addEventListener se esta diciendo que se cargue todo el documento y dsp ejecute la funcion. La otra variante es poner <script> abajo del todo y listo, asi carga primero el doc y dsp ejecuta, porque siempre lee para arriba

document.querySelector(".contar").onclick=cont;
document.querySelector(".cero").onclick=zero


document.addEventListener("DOMContentLoaded", function (){
  
    document.querySelector("form").onsubmit= function(){
        let name = document.querySelector("#name").value;
        alert(`Gracias por tus datos ${name}`);
    }

    }
);



