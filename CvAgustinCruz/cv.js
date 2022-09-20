
// CHANGE LANGUAGE

let enEs=document.querySelector(".enEs");
let esEn=document.querySelector(".esEn");
let idioma1=document.querySelector(".eng");
let idioma2=document.querySelector(".spani");

enEs.addEventListener("click",function(){
    idioma1.classList.toggle("invisible");
    idioma2.classList.toggle("invisible");
});

esEn.addEventListener("click",function(){
    idioma1.classList.toggle("invisible");
    idioma2.classList.toggle("invisible");
});

// PALETA DE COLORES

let paleta=document.getElementById("toggle");
let body=document.body;

paleta.addEventListener("click",function(){
    body.classList.toggle("dark");
});

let paleta2=document.getElementById("toggle2");


paleta2.addEventListener("click",function(){
    body.classList.toggle("dark");
});

// EDAD
const today=()=>{
    let todayDate = new Date().toLocaleDateString();
    let todayTime = new Date().toLocaleTimeString();

    document.querySelector(".bd1").innerHTML=`My Age today ${todayDate} at ${todayTime} hs:<br>`;
    document.querySelector(".bd2").innerHTML=`My Age today ${todayDate} at ${todayTime} hs:<br>`;

}
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

    document.querySelector(".age1").innerHTML=`${years} years, ${months} ${meses}, ${days} ${dias}`;
    document.querySelector(".age2").innerHTML=`${years} years, ${months} ${meses}, ${days} ${dias}`;

}
setInterval(today,1000);
age(); 