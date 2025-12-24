var h1E1 = document.getElementById("Heading")
var Image1 = document.getElementById("Picture");

function onHover(){
    h1E1.innerText = "Bulb is On"
    Image1.title = "Bulb is On"
    Image1.src = "./Image/Bulb2.jpg"
}
function offHover(){
    h1E1.innerText = "Bulb is Off"
    Image1.title = "Bulb is Off"
    Image1.src = "./Image/Bulb.jpg"
}