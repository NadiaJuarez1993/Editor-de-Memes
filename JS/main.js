//VARIABLES
const $ = (selector) => document.querySelector(selector)






//FUNCIONES

//filter
const allFiltersMeme = () =>{
    $(".image-container").style.filter = `brightness(${$("#brightness")}.value ) opacity(${$("#opacity")}.value) contrast(${$("#contrast")}.value %) blur(${$("blur")}.value px)  grayscale(${$("#grayscale")}.value %)  sepia(${$("#sepia")}.value %) hue-rotation(${$("#hue-rotation")}.value deg) saturation(${$("#saturation")}%) invert(${$("#invert")}) `
}








//EVENTOS

//url image
$("#url-image") .addEventListener("input", (e) => {
    $(".url-image-container").style.backgroundImage = `url(${e.target.value}})`
})

//Filter
//brillo
$("#brightness") . addEventListener("input", allFiltersMeme)

//opacidad
$("#opacity") . addEventListener("input", allFiltersMeme)

//Contraste
$("#contrast") . addEventListener("input", allFiltersMeme)

//blur
$("#blur") . addEventListener("input", allFiltersMeme)

//escala de grises
$("#grayscale") . addEventListener("input", allFiltersMeme)

//sepia
$("#sepia") . addEventListener("input", allFiltersMeme)

//hue
$("#hue-rotation") . addEventListener("input", allFiltersMeme)

//saturacion
$("#saturation") . addEventListener("input", allFiltersMeme)

//negativo
$("#invert") . addEventListener("input", allFiltersMeme)

