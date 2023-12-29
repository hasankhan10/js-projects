let start = document.getElementById("start")
let stopp = document.getElementById("stop")
let body = document.querySelector("body")
let reset = document.getElementById("reset")

let color;
let range = "1234567890ABCDEF";

let randomColor;
let flag = 0;
start.addEventListener("click",()=>{
    flag = flag+1;
    if (flag==1) {
        randomColor = setInterval(() => {
            color = "#"
            for (let i = 1; i <= 6; i++) {
                let random = Math.floor(Math.random()*16);
                color = color + range[random];
            }
            body.style.backgroundColor = `${color}`
            console.log(color);
        },1000);
    }
})

stopp.addEventListener("click",()=>{
    clearInterval(randomColor)
    flag = 0;
})

reset.addEventListener("click",()=>{
    location.reload()
})