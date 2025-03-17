const inpt = document.querySelector(".inpt")
const card = document.querySelector(".card")
const deleteBtn = document.querySelector("#deleteBtn")

function add() {
    const inputV = inpt.value.trim()
    if (inputV === "") return;
    const box = document.createElement("div")
    box.classList = "box"
    box.style.background = inputV

    const deletBox = document.createElement("button")
    deletBox.innerHTML = ("X")

deletBox.onclick = function(){
    box.remove()
}

    box.appendChild(deletBox)
    card.appendChild(box)
}
function clearAll(){
    card.innerHTML = ""
}

const keyUp = function() {
    
}

// DARK_MODE

const night = document.getElementById("night-morning")
const body = document.body


const bodyDark = function(){
    body.classList.toggle("wrapper")
}

let num = 1;

night.addEventListener('click', () => {
    if(num === 1){
        night.src = './img/sun-day_icon.png' 
        num = 2
    } else {
        night.src = './img/night_icon.png' 
        num = 1
    }
})
