const addZeros=n=>{
    if (n.toString().length<2) return "0".concat(n);
    return n; 
}

const dates=()=>{
    const time= new Date();
    let hora=addZeros(time.getHours());
    let min=addZeros(time.getMinutes());
    let seg=addZeros(time.getSeconds());
    let todayDate = new Date().toLocaleDateString();


    document.querySelector(".bd").innerHTML=`My Age today ${todayDate} at ${hora}:${min}:${seg} hs is:<br>`;
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

    document.querySelector(".age").innerHTML=`${years} years, ${months} ${meses}, ${days} ${dias}`
}
setInterval(dates,1000);
age(); 