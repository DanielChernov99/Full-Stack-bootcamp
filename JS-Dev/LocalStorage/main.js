const inputWisdom = document.querySelector("#inputWisdom")
const btnWisdom = document.querySelector("#btnWisdom")
const wisdomContainer = document.querySelector("#wisdomContainer")
const btnClear = document.querySelector("#btnClear")

let wisdoms = JSON.parse(localStorage.getItem("wisdom")) || []

const createDeleteButton = function () {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    return deleteButton
}

const saveWisdom = function () {
    localStorage.setItem("wisdom", JSON.stringify(wisdoms))
}

const renderWisdom = function () {
    wisdomContainer.innerHTML = ""

    wisdoms.forEach(wisdom => {
        const newWisdomElement = document.createElement("p")

        const wisdomText = document.createElement("span")
        wisdomText.textContent = wisdom.text

        const deleteButton = createDeleteButton()

        deleteButton.addEventListener("click", () => {
            wisdoms = wisdoms.filter(w => w.id !== wisdom.id)
            saveWisdom()
            renderWisdom()
        })

        newWisdomElement.append(wisdomText, deleteButton)
        wisdomContainer.appendChild(newWisdomElement)
    })
}

btnWisdom.addEventListener("click", () => {
    const inputValue = inputWisdom.value

    if (inputValue === "") {
        return
    }

    const wisdomItem = {
        id: Date.now(),
        text: inputValue
    }

    wisdoms.push(wisdomItem)

    if (wisdoms.length % 2 === 0) {
        saveWisdom()
    }

    inputWisdom.value = ""
    renderWisdom()
})

btnClear.addEventListener("click", () => {
    localStorage.removeItem("wisdom")
    wisdoms = []
    renderWisdom()
})

renderWisdom()