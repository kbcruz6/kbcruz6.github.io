
let paleta=document.getElementById("toggle1");
let paleta2=document.getElementById("toggle2");

let mont1=document.querySelector(".mountain-1");
let mont2=document.querySelector(".mountain-2");

let mont1Cont=document.querySelector(".mont1-cont");
let mont2Cont=document.querySelector(".mont2-cont");

let pag2a=document.querySelector(".pag2a");
let pag2b=document.querySelector(".pag2b");

paleta.addEventListener("click",function(event){
    mont1.classList.toggle("colour1");
    mont2.classList.toggle("colour2");

    mont1Cont.classList.toggle("colour1c");
    mont2Cont.classList.toggle("colour2c");

    pag2a.classList.toggle("hidden");
    pag2b.classList.toggle("hidden");
    event.preventDefault();
});

paleta2.addEventListener("click",function(event){
    mont1.classList.toggle("colour1");
    mont2.classList.toggle("colour2");

    mont1Cont.classList.toggle("colour1c");
    mont2Cont.classList.toggle("colour2c");

    pag2a.classList.toggle("hidden");
    pag2b.classList.toggle("hidden");
    event.preventDefault();
});

// $('html, body').css({
//     overflow: 'hidden',
//     height: '100%'
// });

// To restore:

// $('html, body').css({
//     overflow: 'auto',
//     height: 'auto'
// });

//     --color1:rgb(65, 79, 107);
// --color2:rgb(176, 180, 190);