//VARIABLES
const $ = (selector) => document.querySelector(selector)






//FUNCIONES









//EVENTOS

//Filtros
//brillo
$("#brightness") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `brightness(${e.target.value})`
})

//opacidad
$("#opacity") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `opacity(${e.target.value})`
})

//Contraste
$("#contrast") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `contrast(${e.target.value}%)`
})

//blur
$("#blur") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `blur(${e.target.value}px)`
})

//escala de grises
$("#grayscale") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `grayscale(${e.target.value}%)`
})

//sepia
$("#sepia") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `sepia(${e.target.value}%)`
})

//hue
$("#hue-rotation") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `hue-rotation(${e.target.value}deg)`
})

//saturacion
$("#saturation") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `saturation(${e.target.value}%)`
})

//negativo
$("#invert") . addEventListener("input", (e) => {
    $(".image-container").style.filter = `invert(${e.target.value})`
})

