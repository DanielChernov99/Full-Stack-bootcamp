const up = document.querySelector("#up")
const down = document.querySelector("#down")
const right = document.querySelector("#right")
const left = document.querySelector("#left")

const ball = document.querySelector("#ball")

const MoveBall = function(axis,amount){
    let currentPos = parseInt(ball.style[axis]) || 0;
    currentPos += amount;
    ball.style[axis] = currentPos + "px";
}

right.addEventListener("click" , () =>{
    MoveBall("left", 15)
})

left.addEventListener("click" , () =>{
    MoveBall("left", -15)
})

up.addEventListener("click" , () =>{
    MoveBall("top", -15)
})

down.addEventListener("click" , () =>{
    MoveBall("top", 15)
})

