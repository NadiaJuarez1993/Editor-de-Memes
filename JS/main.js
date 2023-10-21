//VARIABLES
const $ = (selector) => document.querySelector(selector)


//FUNCIONES

//filter
const allFiltersMeme = () =>{
    $("#image-filter").style.filter = `brightness(${$("#brightness")}.value) opacity(${$("#opacity")}.value) contrast(${$("#contrast")}.value %) blur(${$("blur")}.value px)  grayscale(${$("#grayscale")}.value %)  sepia(${$("#sepia")}.value %) hue-rotation(${$("#hue-rotation")}.value deg) saturation(${$("#saturation")}.value %) invert(${$("#invert")}.value )`
}

// const restartText = () =>{
//     $("#upper-text").innerText = $(`top-text-input`).value
// }











//EVENTOS

//text
$("#top-text-input").addEventListener ("input", (e) => {
    $("#upper-text").innerText = e.target.value
})

$("#lower-text-input").addEventListener ("input", (e) => {
    $("#down-text").innerText = e.target.value
})

//without text
$("#displayTopText").addEventListener("input",(e) => {
    if(e.target.checked){
        $("#upper-text").style.display = "none"
    } else{
        $("#upper-text").style.display = "block"
    }
})

$("#displayLowerText").addEventListener("input",(e) => {
    if(e.target.checked){
        $("#down-text").style.display = "none"
    } else{
        $("#down-text").style.display = "block"
    }
})



//font
$("#font").addEventListener("input", (e) =>{
    $(".meme-text").style.fontFamily = e.target.value
})

//font-size
$("#font-size").addEventListener("input" , (e) => {
    $(".meme-text").style.fontSize = `${e.target.value}rem`

})



//url image
$("#url-image") .addEventListener("input", (e) => {
    $("#image-container").style.backgroundImage = `url(${e.target.value})`
})

//background
$("#meme-background").addEventListener("input",(e) =>{
    $("#image-container").style.backgroundColor = e.target.value
})

//Filter
 //brillo
 $("#brightness").addEventListener("input", allFiltersMeme)

 //opacidad
 $("#opacity").addEventListener("input", allFiltersMeme)

 //Contraste
 $("#contrast").addEventListener("input", allFiltersMeme)

 //blur
 $("#blur").addEventListener("input", allFiltersMeme)

 //escala de grises
 $("#grayscale").addEventListener("input", allFiltersMeme)

 //sepia
 $("#sepia").addEventListener("input", allFiltersMeme)

 //hue
 $("#hue-rotation").addEventListener("input", allFiltersMeme)

 //saturacion
 $("#saturation").addEventListener("input", allFiltersMeme)

 //negativo
 $("#invert").addEventListener("input", allFiltersMeme)

 //reset button
 $("#reset").addEventListener("click", () => {
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100%"
    $("#blur").value = "0px"
    $("#grayscale").value = "0%"
    $("#sepia").value = "0%"
    $("#hue-rotation").value = "0deg"
    $("#saturation").value = "100%"
    $("#invert").value = "1"
    $("#image-filter").stile.filter = "none"

})












