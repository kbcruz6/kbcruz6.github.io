
// // BOTONES ELECCION

// function showPage(page){
//     document.querySelectorAll("div").forEach(div=>{

//     div.style.display= "none";
//     })
//     document.querySelector(`#${page}`).style.display="block";
// }
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelectorAll("button").forEach(button=>{
//         button.onclick=function(){
//             showPage(this.dataset.page); 
//         }
//     });
// });

// CRONOMETRO TIEMPO EN WEB
document.addEventListener("DOMContentLoaded",()=>{
    let valor=0;
    let crono=()=>{
        valor++;
        document.querySelector(".cronometro").innerHTML=`Tiempo en la web:    ${valor}   segundos`;
    }
    setInterval(crono,1000);

})


// BOTON CAMBIAR TITULO

// let cambiar=()=>{
//     let titulo=document.querySelector("h1");
//     if(titulo.innerHTML=="Bienvenido"){
//         titulo.innerHTML="Adios";
//     } else {
//         titulo.innerHTML="Bienvenido";
//     }
// }

document.addEventListener("DOMContentLoaded", function(){
    const h1=document.querySelector(".cuadrado");
    h1.style.animationPlayState="paused";

    document.querySelector(".cambiar").onclick=()=>{
        if (h1.style.animationPlayState=== "paused"){
            h1.style.animationPlayState="running";
        } else {
            h1.style.animationPlayState="paused";
        }
    }
});



// CONTADOR
let contar=0;

let cont=()=>{
    contar++;
    document.querySelector(".contador").innerHTML=contar;
    if (contar%10===0){
        alert(`Llegaste a ${contar}`)
    }
}
// VOLVER A CERO
let zero=()=>{
    contar=0;
    document.querySelector(".contador").innerHTML=contar;
}

// con este addEventListener se esta diciendo que se cargue todo el documento y dsp ejecute la funcion. La otra variante es poner <script> abajo del todo y listo, asi carga primero el doc y dsp ejecuta, porque siempre lee para arriba

document.querySelector(".contar").onclick=cont;
document.querySelector(".cero").onclick=zero


// FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
  
    // document.querySelector("#name").onkeyup=()=>{
    //     if (document.querySelector("#name").value.length >0){
    //         document.querySelector(".enviar").disabled=false;
    //     }else{
    //         document.querySelector(".enviar").disabled=true;
    //     }
    // }

    document.querySelector(".form1").onsubmit= ()=> {
        let name = document.querySelector("#name").value;
        let apellido = document.querySelector("#apellido").value;
        alert(`Gracias por tus datos ${name} ${apellido}`);

        // document.querySelector("#name").value="";
        // document.querySelector("#apellido").value="";
        // document.querySelector("#mail").value="";
        // document.querySelector("#password").value="";

        document.querySelectorAll(".fo1").forEach((input)=>{
            input.value="";})
        return false;
    }

    }
);


//BOTONES PARA CAMBIAR COLOR FONDO

// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector("#red").onclick=()=> {
//         document.querySelector("body").style.backgroundColor="red";
//     }
// }
// // )

document.addEventListener("DOMContentLoaded", ()=> {

    document.querySelectorAll(".color").forEach((button)=>{
        button.onclick=()=> {
            document.querySelector("body").style.backgroundColor=button.dataset.color;
        }
    })

});

// APARTE DE ONCLICK ESTAN:
// onmouseover, onkeydown, onkeyup, onload, onblur


// OPCION LISTA PARA EL COLOR FONDO

document.addEventListener("DOMContentLoaded", ()=> {
    
    document.querySelector("select").onchange=function (){
        console.log("hola",this.value);
        document.querySelector("body").style.backgroundColor=this.value;
    }
});

// LISTA SUPER
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".form2").onsubmit=()=>{
        document.querySelectorAll("#task").forEach((task)=>{
         task = document.querySelector("#task").value; 
         let li=document.createElement("LI");
         li.innerHTML=task;
         li.className="listita";
         let borrar=document.createElement("BUTTON");
         borrar.innerHTML=(`x`);
         borrar.className="borrame";
         borrar.style.marginLeft="10px";
         document.querySelector("#tasks").appendChild(li);
         document.querySelector("#task").value="";
         document.querySelector(".listita").appendChild(borrar);
         li.className="";   
         return false;
         });
        return false;
    };
});
// document.querySelector(".cambiar").onclick=()=>{
//     if (borrar.parentElement.style.animationPlayState=== "paused"){
//         borrar.parentElement.style.animationPlayState="running";
//     } else {
//         borrar.parentElement.style.animationPlayState="paused";
//     }
// }

// // BRIAN YU
document.addEventListener("click", event=>{
    const element = event.target;
    if (element.className === "borrame"){

        element.parentElement.style.animationPlayState="running";
        element.parentElement.addEventListener("animationend",()=>{
            element.parentElement.remove();
        })
    }   
    return false;
});


// document.addEventListener("DOMContentLoaded",function(){

//     document.querySelector(".borrame").onclick=()=>{
//         if (borrar.parentElement.style.animationPlayState=== "paused"){
//             borrar.parentElement.style.animationPlayState="running";
//         } else {
//             borrar.parentElement.style.animationPlayState="paused";
//         }
//     };
// });


// COTIZACION CRYPTO
// document.addEventListener("DOMContentLoaded", function(){

//     document.querySelector(".formCurrency").onsubmit= function(){

    
//         fetch("http://api.coinlayer.com/api/live?access_key=d9d0204688e6313ef596dcb1c7baccaf")
//         .then(response => response.json())
//         .then(data=>{
//             const currency = document.querySelector("#currency").value.toUpperCase();
//             const rate=data.rates[currency];
//             // document.querySelector("#valor").innerHTML=`el ${rate}`;

//             if (rate  !== undefined){
//                 document.querySelector("#result").innerHTML=`La cotización de hoy es de: ${rate.toFixed(3)} ${currency}/USD`;
//                 }else {
//                  document.querySelector("#result").innerHTML=`Crypto invalida.`;
//                 }

//             console.log(data);
//             document.querySelector("#currency").value="";
//          })
//           .catch(error =>{
//             console.log("Error",error);
//          });
//     return false;
//     };    
// });

// COTIZACION FIAT

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".formFiat").onsubmit= function(){

    
        fetch("https://api.currencyfreaks.com/latest?apikey=7baca61f4a374730860a40de70723582")
        .then(response => response.json())
        .then(data=>{
            const fiat = document.querySelector("#fiat").value.toUpperCase();
            const rate=data.rates[fiat];
            // document.querySelector("#valor").innerHTML=`el ${rate}`;

            if (rate !== undefined){
                document.querySelector("#resultFiat").innerHTML=`1 USD son ${Number(rate).toFixed(2)} ${fiat}.`;
                }else {
                 document.querySelector("#resultFiat").innerHTML=`Moneda inválida.`;
                }

            console.log(data);
            document.querySelector("#fiat").value="";
        })
        .catch(error =>{
            console.log("Error",error);
        });
    return false;
    };    
});

// SCROLL BACKGROUND 
// no funca

    // window.onscroll=()=>{
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    //         document.querySelector("body").style.background="green";
    //     } else {
    //         document.querySelector("body").style.background="white";
    //     }
    // }

// TEXTURAS

const zona=document.querySelector(".main");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
zona.addEventListener("drop",(e)=>{
    let n=e.dataTransfer.getData("textura");
    zona.style.background=`url("textura${n}.jpg")`;
});

for (let i=1; i < document.querySelector(".texturas").children.length + 1; i++){
   document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e));
};

const transferirTextura=(n,e)=>{
    e.dataTransfer.setData("textura",n)
};

// RELOJ

const addZeros=n=>{
    if (n.toString().length<2) return "0".concat(n);
    return n; 
}

const actualizarHora=()=>{
    const time= new Date();
    let hora=addZeros(time.getHours());
    let min=addZeros(time.getMinutes());
    let seg=addZeros(time.getSeconds());

    document.querySelector(".hora").textContent=hora;
    document.querySelector(".min").textContent=min;
    document.querySelector(".seg").textContent=seg;

}
actualizarHora();
setInterval(actualizarHora,1000);


// GEOLOCATION
// const geolocation=navigator.geolocation;

// const posicion=(pos)=>{
//     console.log(`Longitud: ${pos.coords.longitude}`);
//     console.log(`Latitud: ${pos.coords.latitude}`);
//     console.log(pos)
// }

// geolocation.getCurrentPosition(posicion);


// LEER ARCHIVO DE TEXTO Y MOSTRAR EN CONSOLA EL CONTENIDO

// const archivo=document.getElementById("archivo");
// archivo.addEventListener("change",(e)=>{
//     leerArchivo(archivo.files[0]);
// });

// const leerArchivo=ar=>{
//     const reader= new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load",(e)=>{
//         let resultado=(e.currentTarget.result);
//         console.log(JSON.parse(resultado));
//     })
// };