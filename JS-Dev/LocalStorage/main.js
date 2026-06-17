const inputWisdom = document.querySelector("#inputWisdom")
const btnWisdom = document.querySelector("#btnWisdom")
const wisdomContainer = document.querySelector("#wisdomContainer")
const btnClear = document.querySelector("#btnClear")

const createDeleteButton = function () {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    return deleteButton
}

let wisdom = []

const renderWisdom = function(){

}

btnWisdom.addEventListener("click",() =>{
    const inputValue = inputWisdom.value
    const newWisdomElement = document.createElement("p")

    const wisdomText = document.createElement("span")
    wisdomText.textContent = inputValue

    const deleteButton = createDeleteButton()

    newWisdomElement.append(wisdomText, deleteButton)
    wisdomContainer.appendChild(newWisdomElement)

    deleteButton.addEventListener("click", () => {
        console.log("delete clicked")
    })   
})


btnClear.addEventListener("click",() =>{

})

