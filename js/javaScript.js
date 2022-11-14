const slideCotainer= document.querySelector(".slide_content")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonContainer = document.querySelector(".buttons-container")


const btnSrc = [
    'img/HTML_icon.png',
    'img/CSS_icon.png',
    'img/JS_icon.png',
]
btnSrc.forEach(element=> {
    const img = document.createElement("img");
    img.className="btn"
    img.src = element;
    buttonContainer.append(img)
})

const footerDecoration = document.createElement("div")
footerDecoration.className="footer_const_decoration";
container.append(footerDecoration)

const containerSrc = [
    'img/iconCSS.png',
    'img/iconHTML.png',
    'img/iconJS.png',
]
containerSrc.forEach (element => {
    const divContainer = document.createElement("div");
    const img = document.createElement("img");
    img.className = "img";
    img.src = element;
    const longline = document.createElement("div");
    longline.className = "text_decoration long-line";
    const shortline = document.createElement("div");
    shortline.className = "text_decoration short-line";
    const longline1 = document.createElement("div");
    longline1.className = "text_decoration long-line";
    const footerContBar = document.createElement("div");
    footerContBar.className= "footer_cont_bar";
    


divContainer.append(img,longline,shortline,longline1,footerContBar);
slideCotainer.append(divContainer);

})