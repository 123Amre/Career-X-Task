let image = document.querySelector(".image-slider");
let translate = 0;

setInterval(()=>{
    if(translate >= 0 && translate < 500){
        translate +=100
    }
    else {
        translate=0
    }
    // console.log("hii")
    image.style.transition = "0.5s"
    image.style.transform = `translateX(${-translate}%)`

},4000)

function right(){
    if(translate < 500){
        translate +=100
    image.style.transition = "0.5s"
    image.style.transform = `translateX(${-translate}%)`
    }
}
function left(){
    if(translate > 0){
        translate -=100
    image.style.transition = "0.5s"
    image.style.transform = `translateX(${-translate}%)`
    }
}