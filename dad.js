const circulo=document.querySelector(".circulo");
const rectangulo=document.querySelector(".rectangulo");

// EVENTOS DEL OBJETO AGARRADO
// circulo.addEventListener("dragstart",()=> console.log("agarraste"));
// circulo.addEventListener("drag",()=> console.log("arrastraste"));
// circulo.addEventListener("dragend",()=> console.log("soltaste"));

// EVENTOS DE LA ZONA
// rectangulo.addEventListener("dragenter",()=>console.log("dragenter"));
// rectangulo.addEventListener("dragover",(e)=>{
//     e.preventDefault();
//     console.log("dragover")});
// rectangulo.addEventListener("drop",()=>console.log("drop"));
// rectangulo.addEventListener("dragleave",()=>console.log("dragleave"));

// TRANSFERENCIA DE DATA
// circulo.addEventListener("dragstart",(e)=>{
//     e.dataTransfer.setData("clase",e.target.className);
//     console.log(e.dataTransfer.getData("clase"))
// });

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