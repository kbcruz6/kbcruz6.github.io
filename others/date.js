const fecha=new Date();

console.log(fecha.getDate());
// nos devuelve el numero de dia

console.log(fecha.getDay());
// nos devuelve la ubicacion del dia:
// Domingo: 0
// Lunes: 1
// Martes: 2
// Miercoles: 3
// Jueves: 4
// Viernes: 5
// Sabado: 6

console.log(fecha.getMonth());
// nos devuelve la ubicacion del mes (o numero de mes -1)
// enero: 0
// febrero: 1, etc

console.log(fecha.getFullYear());
// te devuelve el año

console.log(fecha.getHours());
// te devuelve la hora

console.log(fecha.getMinutes());
// te devuelve minutos

console.log(fecha.getSeconds());
// te devuelve segundos



document.querySelector(".fecha").innerHTML=`Hoy es: ${fecha.getDate()} del ${fecha.getMonth()+1} del ${fecha.getFullYear()} y son las:`;


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


