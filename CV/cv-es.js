
const today=()=>{
    let todayDate = new Date().toLocaleDateString();
    let todayTime = new Date().toLocaleTimeString();

    document.querySelector(".bd").innerHTML=`Mi edad hoy ${todayDate} a las ${todayTime} hs:<br>`;
}
const age=()=>{

    let fecha1=new Date("7/15/1991");
    let fecha2=new Date();

    let years=Math.abs(fecha1.getFullYear()-fecha2.getFullYear());
    let months=(fecha2.getMonth()-fecha1.getMonth());
    let days=(fecha2.getDate()-fecha1.getDate());
    let meses="meses";
    let dias="días";

    if (months<0){
        years=years-1;
        months=months+12;
    }
    if (days<0){
        months=months-1;
        days=days+30;
    }
    if (months==1){
        meses="mes"
    } if (dias==1){
        dias="día"
    } 

    document.querySelector(".age").innerHTML=`${years} años, ${months} ${meses}, ${days} ${dias}`
}
setInterval(today,1000);
age(); 