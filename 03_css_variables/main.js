const headline = document.querySelector(".user-color");
const colorPicker = document.querySelector("#color-picker");
const spacing = document.querySelector("#space-range");
const opacity = document.querySelector("#blur-range");
const imgBox = document.querySelector(".img-container");
const img = document.querySelector(".img-scene");

colorPicker.addEventListener("change",updateColor);
spacing.addEventListener("change",updateBorderSpace);
opacity.addEventListener("change",updateImageOpacity);

function updateColor(e){
    console.log(e.target.value);
    headline.style.setProperty("color",e.target.value);
    imgBox.style.setProperty("border-color",e.target.value);
}

function updateBorderSpace(e){
imgBox.style.setProperty("border-width",`${e.target.value}rem`);
}

function updateImageOpacity(e){      
    img.style.setProperty("filter",`blur(${e.target.value}px`);
}


 