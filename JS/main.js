//VARIABLES
const $ = (selector) => document.querySelector(selector)


//FUNCIONES

//download
// const downloadMeme =() =>{
//     domtoimage.toBlob($(".meme-container")).then((blob) => {
//         saveAs(blob, "my-meme.png")
//     })
// }


// //EVENTOS

//button and aside image-text
  $("#button--text").addEventListener("click",() =>{
    $("#aside-text").style.width = "250px"
 })

   $("#button--image").addEventListener("click",() =>{
      $("#aside-text").style.width = "0"    
})


//darck mode-light mode
 $(".change--theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
     if (currentTheme){
         $("body").removeAttribute("data-theme", "light-theme")
  }else{
         $("body").setAttribute("data-theme", "light-theme")
 }
     $("#lightbulb-off").classList.toggle("hidden")
    $("#lightbulb-on").classList.toggle("hidden")
 })

//*******************************************************//
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


//color text
$("#color-text").addEventListener("input",(e) =>{
     $(".meme-top-text").style.color = e.target.value
 })

 $("#color-text").addEventListener("input",(e) =>{
     $(".meme-down-text").style.color = e.target.value
})


//background-color
$("#background-color").addEventListener("input",(e) =>{
    $(".meme-top-text").style.backgroundColor = e.target.value
})

$("#background-color").addEventListener("input",(e) =>{
    $(".meme-down-text").style.backgroundColor = e.target.value
})




// //fondo transparente
// $("#transparentBackground").addEventListener("input",(e) => {
//      if(e.target.checked){
//          $("#upper-text").style.backgroundColor = "transparent"
//          $("#down-text").style.backgroundColor = "transparent"
//      }else{
//          $("#upper-text").style.backgroundColor = "white"
//          $("#down-text").style.backgroundColor = "white"
//     }
// })


//TRANPARENT
$("#transparentBackground").addEventListener("input",(e) =>{
    if(e.target.checked){
         $("#upper-text").style.display ="none"
         $("#down-text").style.display ="none"
     } else{
             $("#upper-text").style.display ="block"
             $("#down-text").style.display ="block"     
     }
})

 //outline
 $("#outline-light").addEventListener("click",(e) =>{
     $("#upper-text").style.webkitTextStroke = "1px white"
 })
 $("#outline-light").addEventListener("click",(e) =>{
    $("#down-text").style.webkitTextStroke = "1px white"
 })

 $("#outline-dark").addEventListener("click",(e) =>{
    $("#upper-text").style.webkitTextStroke = "1px black"
 })
 $("#outline-dark").addEventListener("click",(e) =>{
     $("#down-text").style.webkitTextStroke = "1px black"
 })

 $("#outline-none").addEventListener("click",(e) =>{
     $("#upper-text").style.webkitTextStroke = "0 black"
 })
 $("#outline-none").addEventListener("click",(e) =>{
     $("#down-text").style.webkitTextStroke = "0 black"
})

//spacing
 $("#spacing").addEventListener("input" , (e) => {
    $("#upper-text").style.padding = `${e.target.value}px`
 })

 $("#spacing").addEventListener("input" , (e) => {
     $("#down-text").style.padding = `${e.target.value}px`
 })


//line-spacing
 $("#line-spacing").addEventListener("input" , (e) => {
     $("#upper-text").style.lineHeight = e.target.value
     $("#down-text").style.lineHeight = e.target.value
 })



// ***************************************************************************//
//Filter
const allFiltersMeme = () => {
    $("#image-container").style.filter = `brightness(${$("#brightness").value}) 
    opacity(${$("#opacity").value}) 
    contrast(${$("#contrast").value}%) 
    blur(${$("#blur").value}px)
    grayscale(${$("#grayscale").value}%) 
    sepia(${$("#sepia").value}%)  
    hue-rotate(${$("#hue-rotate").value}deg) 
    saturate(${$("#saturation").value}%)    
    invert(${$("#inverts").value})
    `
}


//url image
 $("#url-image").addEventListener("input", (e) => {
    $("#image-container").style.backgroundImage = `url(${e.target.value})`
})



//Mix filter
 $("#mix-filters").addEventListener("input",(e) => {
     $("#image-container").style.mixBlendMode = e.target.value
})



$("#brightness").addEventListener("input", allFiltersMeme)
$("#opacity").addEventListener("input", allFiltersMeme)
$("#contrast").addEventListener("input", allFiltersMeme)
$("#blur").addEventListener("input", allFiltersMeme)
$("#grayscale").addEventListener("input", allFiltersMeme)
$("#sepia").addEventListener("input", allFiltersMeme)
$("#hue-rotate").addEventListener("input", allFiltersMeme)
$("#saturation").addEventListener("input", allFiltersMeme)
$("#inverts").addEventListener("input", allFiltersMeme) 



//reset button
 $("#reset").addEventListener("click", () => {
      $("#brightness").value = "1"
      $("#opacity").value = "1"
      $("#contrast").value = "100"
      $("#blur").value = "0"
      $("#grayscale").value = "0"
      $("#sepia").value = "0"
      $("#hue-rotate").value = "0"
      $("#saturation").value = "100"
      $("#inverts").value = "1"
      $("#image-container").style.filter = "none"

})

 //background
 $("#meme-background").addEventListener("input", (e) => {
    $("#image-container").style.backgroundColor = e.target.value
})


//btn close aside
$(".btn-close-image").addEventListener("click",() => {
    $("#aside-image").style.display= "none"
})

$(".btn-close-text").addEventListener("click",() => {
    $("#aside-text").style.display= "none"
})


// //download
// $(".button-dowload").addEventListener("click", downloadMeme)










