// const slidesContainer = document.getElementById("slides");
// const slides = slidesContainer.children;
// const slideArray = Array.from(slides);

// const leftBtn = document.getElementById("slide-left");
// const rightBtn = document.getElementById("slide-right");

// let unhidden = slideArray[0];

// slideArray.map(slide => {
//     if(slide !== unhidden){
//         slide.classList.add("hidden")
//     }
// });

// rightBtn.addEventListener("click", ()=>{
//     let indexOfUnhidden = slideArray.indexOf(unhidden);
//     if(indexOfUnhidden === slideArray.length-1){
//         indexOfUnhidden = 0;
//     }else{
//         indexOfUnhidden += 1;
//     }
//     slideArray.map(slide => {
//     if(slide !== slideArray[indexOfUnhidden]){
//         slide.classList.add("hidden")
//     }else{
//         slide.classList.remove("hidden")
//     }
// });
// });


const object = document.getElementById("object");
const spin = document.getElementById("spin");
const ping = document.getElementById("ping");
const pulse = document.getElementById("pulse");
const bounce = document.getElementById("bounce");
const stop = document.getElementById("stop");

spin.addEventListener("click", ()=>{
    object.classList.toggle("animate-spin")
});

ping.addEventListener("click", ()=>{
    object.classList.toggle("animate-ping")
});

pulse.addEventListener("click", ()=>{
    object.classList.toggle("animate-pulse")
});

bounce.addEventListener("click", ()=>{
    object.classList.toggle("animate-bounce")
});

stop.addEventListener("click", ()=>{
    let arr = ["animate-spin", "animate-bounce", "animate-pulse", "animate-ping"];

    object.classList.remove(...arr);
});




