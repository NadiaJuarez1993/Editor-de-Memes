//VARIABLES
const $ = (selector) => document.querySelector(selector);

//FUNCIONES

//download
const downloadMeme = () => {
  domtoimage.toBlob($(".meme-container")).then((blob) => {
    saveAs(blob, "my-meme.png");
  });
};

//Filter
const allFiltersMeme = () => {
  $("#content-image").style.filter = `brightness(${$("#brightness").value}) 
    opacity(${$("#opacity").value}) 
    contrast(${$("#contrast").value}%) 
    blur(${$("#blur").value}px)
    grayscale(${$("#grayscale").value}%) 
    sepia(${$("#sepia").value}%)  
    hue-rotate(${$("#hue-rotate").value}deg) 
    saturate(${$("#saturation").value}%)    
    invert(${$("#inverts").value})
    `;
};

//EVENTOS

//button and aside image-text
$("#button--text").addEventListener("click", () => {
  $("#aside-image").style.display = "none";
  $("#aside-text").style.display = "block";
});

$("#button--image").addEventListener("click", () => {
  $("#aside-text").style.display = "none";
  $("#aside-image").style.display = "block";
});

//darck mode-light mode
$(".change--theme").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme) {
    $("body").removeAttribute("data-theme", "light-theme");
  } else {
    $("body").setAttribute("data-theme", "light-theme");
  }
  $("#lightbulb-off").classList.toggle("hidden");
  $("#lightbulb-on").classList.toggle("hidden");
});

//*******************************************************//
//text
$("#top-text-input").addEventListener("input", (e) => {
  $("#upper-text").innerText = e.target.value;
});

$("#lower-text-input").addEventListener("input", (e) => {
  $("#down-text").innerText = e.target.value;
});

//without text
$("#displayTopText").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#upper-text").style.display = "none";
  } else {
    $("#upper-text").style.display = "block";
  }
});

$("#displayLowerText").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#down-text").style.display = "none";
  } else {
    $("#down-text").style.display = "block";
  }
});

//font
$("#font").addEventListener("input", (e) => {
  $(".meme-top-text").style.fontFamily = e.target.value;
  $(".meme-down-text").style.fontFamily = e.target.value;
});

//font-size
$("#font-size").addEventListener("input", (e) => {
  $(".meme-top-text").style.fontSize = `${e.target.value}px`;
  $(".meme-down-text").style.fontSize = `${e.target.value}px`;
});

//text aline
$("#text-aline-left").addEventListener("click", (e) => {
  $("#content-top-text").style.textAlign = "left";
  $("#content-down-text").style.textAlign = "left";
});

$("#text-aline-center").addEventListener("click", (e) => {
  $(".meme-top-text").style.textAlign = "center";
  $(".meme-down-text").style.textAlign = "center";
});

$("#text-aline-right").addEventListener("click", (e) => {
  $(".meme-top-text").style.textAlign = "right";
  $(".meme-down-text").style.textAlign = "right";
});

//color text
$("#color-text").addEventListener("input", (e) => {
  $(".meme-top-text").style.color = e.target.value;
  $(".meme-down-text").style.color = e.target.value;
});

//background-color
$("#background-color").addEventListener("input", (e) => {
  $("#content-top-text").style.backgroundColor = e.target.value;
  $("#content-down-text").style.backgroundColor = e.target.value;
});

//TRANPARENT
$("#transparentBackground").addEventListener("input", (e) => {
  if (e.target.checked) {
    $("#content-top-text").style.backgroundColor = "transparent";
    $("#content-down-text").style.backgroundColor = "transparent";
  } else {
    $("#content-top-text").style.backgroundColor = "white";
    $("#content-down-text").style.backgroundColor = "white";
  }
});

//outline
$("#outline-light").addEventListener("click", (e) => {
  $("#upper-text").style.webkitTextStroke = "1px white";
  $("#down-text").style.webkitTextStroke = "1px white";
});

$("#outline-dark").addEventListener("click", (e) => {
  $("#upper-text").style.webkitTextStroke = "1px black";
  $("#down-text").style.webkitTextStroke = "1px black";
});

$("#outline-none").addEventListener("click", (e) => {
  $("#upper-text").style.webkitTextStroke = "0 black";
  $("#down-text").style.webkitTextStroke = "0 black";
});

//spacing
$("#spacing").addEventListener("input", (e) => {
  $("#content-top-text").style.padding = `${e.target.value}px`;
  $("#content-down-text").style.padding = `${e.target.value}px`;
});

//line-spacing
$("#line-spacing").addEventListener("input", (e) => {
  $("#upper-text").style.lineHeight = e.target.value;
  $("#down-text").style.lineHeight = e.target.value;
});

// ***************************************************************************//
//image
//url image
$("#url-image").addEventListener("input", (e) => {
  $("#content-image").style.backgroundImage = `url(${e.target.value})`;
});

//Mix filter
$("#mix-filters").addEventListener("input", (e) => {
  $("#content-image").style.mixBlendMode = e.target.value;
});

$("#brightness").addEventListener("input", allFiltersMeme);
$("#opacity").addEventListener("input", allFiltersMeme);
$("#contrast").addEventListener("input", allFiltersMeme);
$("#blur").addEventListener("input", allFiltersMeme);
$("#grayscale").addEventListener("input", allFiltersMeme);
$("#sepia").addEventListener("input", allFiltersMeme);
$("#hue-rotate").addEventListener("input", allFiltersMeme);
$("#saturation").addEventListener("input", allFiltersMeme);
$("#inverts").addEventListener("input", allFiltersMeme);

//reset button
$("#reset").addEventListener("click", () => {
  $("#brightness").value = "1";
  $("#opacity").value = "1";
  $("#contrast").value = "100";
  $("#blur").value = "0";
  $("#grayscale").value = "0";
  $("#sepia").value = "0";
  $("#hue-rotate").value = "0";
  $("#saturation").value = "100";
  $("#inverts").value = "0";
  $("#content-image").style.filter = "none";
});

//background
$("#meme-background").addEventListener("input", (e) => {
  $("#content-image").style.backgroundColor = e.target.value;
});

//btn close aside
$(".btn-close-image").addEventListener("click", () => {
  $("#aside-image").style.display = "none";
});

$(".btn-close-text").addEventListener("click", () => {
  $("#aside-text").style.display = "none";
});

//download
$(".button-dowload").addEventListener("click", downloadMeme);
