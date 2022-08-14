

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
let cambiar=()=>{
    let titulo=document.querySelector("h1");
    if(titulo.innerHTML=="Bienvenido"){
        titulo.innerHTML="Adios";
    } else {
        titulo.innerHTML="Bienvenido";
    }
}

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

document.addEventListener("DOMContentLoaded", ()=> {document.querySelector(".cambiar").onclick=cambiar});
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

// TASKS
document.addEventListener("DOMContentLoaded", ()=> {

    document.querySelector(".form2").onsubmit=()=>{
        let task = document.querySelector("#task").value;
        
        let li=document.createElement("LI");
        li.innerHTML=task;

        document.querySelector("#tasks").appendChild(li);
        document.querySelector("#task").value="";


        return false;
    };

});


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
                document.querySelector("#resultFiat").innerHTML=`1 USD son ${rate} ${fiat}.`;
                }else {
                 document.querySelector("#resultFiat").innerHTML=`Moneda invalida.`;
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

