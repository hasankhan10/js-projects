const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const body = document.querySelector("body");

first.addEventListener("click",()=>{
    body.style.backgroundColor = `red`;
})
second.addEventListener("click",()=>{
    body.style.backgroundColor = `blue`;
})
third.addEventListener("click",()=>{
    body.style.backgroundColor = `green`;
})