
let paleta=document.getElementById("toggle1b");
let paleta2=document.getElementById("toggle2");

let mont1=document.querySelector(".mountain-1");
let mont1b=document.querySelector(".mont1b-cont");

let mont2=document.querySelector(".mont2-cont");
let mont2b=document.querySelector(".mountain-2b");

let rect1=document.querySelector(".rect-m1");
let rect2=document.querySelector(".rect-m2");

let tab1=document.querySelector(".tab-1");
let tab2=document.querySelector(".tab-2");

paleta.addEventListener("click",function(event){
    mont1.classList.toggle("hidden");
    mont1b.classList.toggle("hidden");
    mont2.classList.toggle("hidden");
    mont2b.classList.toggle("hidden");
    rect1.classList.toggle("hidden");
    rect2.classList.toggle("hidden");
    tab1.classList.toggle("hidden");
    tab2.classList.toggle("hidden");
    event.preventDefault();
});

paleta2.addEventListener("click",function(event){
    mont1.classList.toggle("hidden");
    mont1b.classList.toggle("hidden");
    mont2.classList.toggle("hidden");
    mont2b.classList.toggle("hidden");
    rect1.classList.toggle("hidden");
    rect2.classList.toggle("hidden");
    tab1.classList.toggle("hidden");
    tab2.classList.toggle("hidden");
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