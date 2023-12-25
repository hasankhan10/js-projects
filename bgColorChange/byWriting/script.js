let colorBox = document.getElementById("color-box")
let text = document.getElementById("text")
let form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let colorValue = text.value;
    colorBox.style.backgroundColor = colorValue;
})