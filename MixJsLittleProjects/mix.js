

// CRONOMETER WEB TIME
document.addEventListener("DOMContentLoaded",()=>{
    let valor=0;
    let crono=()=>{
        valor++;
        document.querySelector(".cronometro").innerHTML=`Tiempo en la web:    ${valor}   segundos`;
    }
    setInterval(crono,1000);

})


// CHANGE HEADER BUTTON


document.addEventListener("DOMContentLoaded", function(){
    const h1=document.querySelector(".header");
    h1.style.animationPlayState="paused";

    document.querySelector(".cambiar").onclick=()=>{
        if (h1.style.animationPlayState=== "paused"){
            h1.style.animationPlayState="running";
        } else {
            h1.style.animationPlayState="paused";
        }
    }
});



// COUNTER
let contar=0;

let cont=()=>{
    contar++;
    document.querySelector(".contador").innerHTML=contar;
    if (contar%10===0){
        alert(`Congratulations! You reach ${contar}!`)
    }
}
// BACK TO ZERO
let zero=()=>{
    contar=0;
    document.querySelector(".contador").innerHTML=contar;
}

// con este addEventListener se esta diciendo que se cargue todo el documento y dsp ejecute la funcion. La otra variante es poner <script> abajo del todo y listo, asi carga primero el doc y dsp ejecuta, porque siempre lee para arriba

document.querySelector(".contar").onclick=cont;
document.querySelector(".cero").onclick=zero


// CLOCKs

const addZeros=n=>{
    if (n.toString().length<2) return "0".concat(n);
    return n; 
}

const actualizarHora=()=>{
    const time= new Date();
    let hora=addZeros(time.getHours());
    let min=addZeros(time.getMinutes());
    let seg=addZeros(time.getSeconds());
    let todayDate = new Date().toLocaleDateString();


    document.querySelector(".hora").textContent=`${hora}: `;
    document.querySelector(".min").textContent=`${min}: `;
    document.querySelector(".seg").textContent=`${seg} hs `;
    document.querySelector(".reloj2").innerHTML=`GMT-3 Time v2 (dif JS code): <br>${hora}:${min}:${seg} hs`;
    document.querySelector(".bd").innerHTML=`My Age today ${todayDate} at ${hora}:${min}:${seg} hs:`;

}
actualizarHora();
setInterval(actualizarHora,1000);


const age=()=>{

    let fecha1=new Date("7/15/1991");
    let fecha2=new Date();

    let years=Math.abs(fecha1.getFullYear()-fecha2.getFullYear());
    let months=(fecha2.getMonth()-fecha1.getMonth());
    let days=(fecha2.getDate()-fecha1.getDate());
    let meses="months";
    let dias="days";

    if (months<0){
        years=years-1;
        months=months+12;
    }
    if (days<0){
        months=months-1;
        days=days+30;
    }
    if (months==1){
        meses="month"
    } if (dias==1){
        dias="day"
    } 

    document.querySelector(".age").innerHTML=`${years} years, ${months} ${meses}, ${days} ${dias}`
}
age();





// FORM
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


//COLOURS

// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector("#red").onclick=()=> {
//         document.querySelector("body").style.backgroundColor="red";
//     }
// }


document.addEventListener("DOMContentLoaded", ()=> {

    document.querySelectorAll(".color").forEach((button)=>{
        button.onclick=()=> {
            document.querySelector("body").style.backgroundColor=button.dataset.color;
        }
    })

});

// APARTE DE ONCLICK ESTAN:
// onmouseover, onkeydown, onkeyup, onload, onblur


// COLOUR LIST

document.addEventListener("DOMContentLoaded", ()=> {
    
    document.querySelector("select").onchange=function (){
        console.log("hola",this.value);
        document.querySelector("body").style.backgroundColor=this.value;
    }
});

// SUPER LIST

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

// FIAT COTIZATION 

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".formFiat").onsubmit= function(){

    
        fetch("https://api.currencyfreaks.com/latest?apikey=7baca61f4a374730860a40de70723582")
        .then(response => response.json())
        .then(data=>{
            const fiat = document.querySelector("#fiat").value.toUpperCase();
            const rate=data.rates[fiat];
            // document.querySelector("#valor").innerHTML=`el ${rate}`;

            if (rate !== undefined){
                document.querySelector("#resultFiat").innerHTML=`1 USD are ${Number(rate).toFixed(2)} ${fiat}.`;
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

const zona=document.querySelector(".zona");
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



// JUST

const $imagen = document.querySelector("#codigo"),
		    $boton = document.querySelector("#btnDescargar");
		new QRious({
			element: $imagen,
			value: "https://www.instagram.com/mariamartaw/", // La URL o el texto
			size: 150,
			backgroundAlpha: "#fff", // 0 para fondo transparente
			foreground: "#000", // Color del QR
			level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
		});
		$boton.onclick = () => {
			const enlace = document.createElement("a");
			enlace.href = $imagen.src;
			enlace.download = "Código QR instagram MMW.png";
			enlace.click();
		}