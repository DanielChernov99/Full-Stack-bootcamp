
const makeBox = function(){
    const containerElem = document.querySelector("#container")
    for (let i = 0; i < 5; i++) {       
        const newBox = document.createElement("div")
        newBox.classList.add("box")
        containerElem.appendChild(newBox)
    }

}
const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const changeColor = function(boxElem){ 
    boxElem.style.backgroundColor = getRandomColor()
}
makeBox()
const boxes = document.querySelectorAll(".box")

for (let box of boxes) {
    box.addEventListener("mouseover", function () {
        changeColor(box)
    })
}


