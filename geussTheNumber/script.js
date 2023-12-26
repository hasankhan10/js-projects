const input = document.getElementById("number")
const sbmt = document.getElementById("submit")
let randomNumber = Math.floor(Math.random()*100+1)
let remainNumber = 9;
let allGuesses = []
const restart = document.getElementById("restart")
restart.addEventListener("click",()=>{
    window.reloadPage()
})

sbmt.addEventListener("click",(e)=>{
    e.preventDefault()
    oneAndHundred()
    highLowEqual()
    remain()
    prevGuess()
})

function oneAndHundred(){           //it checks the number is 1 and 100.
    if (input.value<1) {
        alert("Please Enter a number that is avobe 1")
    }
    else if (input.value>100) {
        alert("Please Enter a number that is below 100")
    }
}

function highLowEqual(){   //it checks the number is low or high or equal to the random number.
    if(input.value>randomNumber){
        document.getElementById("low-high-equal").innerText = "Your value is High."
    }
    else if(input.value<randomNumber){
        document.getElementById("low-high-equal").innerText = "Your value is Low."
    }
    else{
        document.getElementById("low-high-equal").innerText = "Congregulation!!! You found the number."
        document.getElementById("low-high-equal").style.color = "red";
        document.getElementById("show-number").innerText = `The Number Was ${randomNumber}`
        document.getElementById("number").disabled = true;
        document.getElementById("submit").disabled = true;
        
    }
}

function remain(){       //it checks that how many remaining number you have.  
    document.getElementById("g-r").innerText = `${remainNumber}`
    if(input.value>=1 && input.value<=100){
        remainNumber = remainNumber-1;
    }
    if(remainNumber<=-1){
        document.getElementById("show-number").innerText = `The Number Was ${randomNumber}`
        document.getElementById("number").disabled = true;
        document.getElementById("submit").disabled = true;
    }
}

function prevGuess(){   // its hold your all guesses number.  
    allGuesses.push(input.value)
    document.getElementById("prev-guess").innerText = `${allGuesses}`
}