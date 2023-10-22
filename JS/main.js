//VARIABLES
const $ = (selector) => document.querySelector(selector)


//FUNCIONES

//

//filter
const allFiltersMeme = () =>{
    $("#image-filter").style.filter = `brightness(${$("#brightness")}.value) opacity(${$("#opacity")}.value) contrast(${$("#contrast")}.value %) blur(${$("blur")}.value px)  grayscale(${$("#grayscale")}.value %)  sepia(${$("#sepia")}.value %) hue-rotation(${$("#hue-rotation")}.value deg) saturation(${$("#saturation")}.value %) invert(${$("#invert")}.value )`
}

// const restartText = () =>{
//     $("#upper-text").innerText = $(`top-text-input`).value
// }

//download
const downloadMeme =() =>{
    domtoimage.toBlob($(".meme-container")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}











//EVENTOS

//button and aside image

 $("#button--text").addEventListener("click",() =>{
    $("#aside-text").style.width = "250px"
    $("#aside-text").style.displey = "none"
 })

  $("#button--image").addEventListener("click",() =>{
     $("#aside-text").style.width = "0"
 })





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

// //transparent Background
// $("#transparentBackground").addEventListener("click",(e) => {
//     if(e.target.checked){
//         $("#down-text").style.backgroundColor = "transparent"
//     } else{
//         $("#down-text").style.backgroundColor = color
//     }
// })




//font
$("#font").addEventListener("input", (e) =>{
    $(".meme-top-text").style.fontFamily = e.target.value
})

$("#font").addEventListener("input", (e) =>{
    $(".meme-down-text").style.fontFamily = e.target.value
})

//font-size
$("#font-size").addEventListener("input" , (e) => {
    $(".meme-top-text").style.fontSize = `${e.target.value}px`

})

$("#font-size").addEventListener("input" , (e) => {
    $(".meme-down-text").style.fontSize = `${e.target.value}px`

})

//color text
$("#color-text").addEventListener("input",(e) =>{
    $(".meme-top-text").style.color = e.target.value
})

$("#color-text").addEventListener("input",(e) =>{
    $(".meme-down-text").style.color = e.target.value
})

//text aline
$("#text-aline-left").addEventListener("click",(e) =>{
    $(".meme-top-text").style.textAlign = "left"

})

$("#text-aline-left").addEventListener("click",(e) =>{
    $(".meme-down-text").style.textAlign = "left"

})

$("#text-aline-center").addEventListener("click",(e) =>{
    $(".meme-top-text").style.textAlign = "center"

})

$("#text-aline-center").addEventListener("click",(e) =>{
    $(".meme-down-text").style.textAlign = "center"

})

$("#text-aline-right").addEventListener("click",(e) =>{
    $(".meme-top-text").style.textAlign = "right"

})

$("#text-aline-right").addEventListener("click",(e) =>{
    $(".meme-down-text").style.textAlign = "right"

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


//download
$(".button-dowload").addEventListener("click", downloadMeme)










