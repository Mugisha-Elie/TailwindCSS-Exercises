const slidesContainer = document.getElementById("slides");
const slides = slidesContainer.children;
const slideArray = Array.from(slides);

const leftBtn = document.getElementById("slide-left");
const rightBtn = document.getElementById("slide-right");

let unhidden = slideArray[0];

slideArray.map(slide => {
    if(slide !== unhidden){
        slide.classList.add("hidden")
    }
});

rightBtn.addEventListener("click", ()=>{
    let indexOfUnhidden = slideArray.indexOf(unhidden);
    if(indexOfUnhidden === slideArray.length-1){
        indexOfUnhidden = 0;
    }else{
        indexOfUnhidden += 1;
    }
    slideArray.map(slide => {
    if(slide !== slideArray[indexOfUnhidden]){
        slide.classList.add("hidden")
    }else{
        slide.classList.remove("hidden")
    }
});
});