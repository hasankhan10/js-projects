const weight = document.getElementById("weight")
const height = document.getElementById("height")
const btn = document.querySelector("button")
let bmi;
btn.addEventListener("click",()=>{
    bmi = Math.floor(weight.value/(height.value*height.value))
    let result;
    
    if (bmi<18.5) {
        result = `<h2>Your bmi is ${bmi} so,you are Underweight.</h2>`
    }
    else if(bmi>=18.5 && bmi<=24.9){
        result = `<h2>Your bmi is ${bmi} so,you are Healthy weight.</h2>`
    }
    else if(bmi>=25.0 && bmi<=29.9){
        result = `<h2>Your bmi is ${bmi} so,you are Overweight.</h2>`
    }
    else if(bmi>=30.0){
        result = `<h2>Your bmi is ${bmi} so,you are obese.</h2>`
    }
    document.getElementById("result-show").innerHTML = result
})

