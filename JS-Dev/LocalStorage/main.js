const inputWisdom = document.querySelector("#inputWisdom")
const btnWisdom = document.querySelector("#btnWisdom")
const wisdomContainer = document.querySelector("#wisdomContainer")
const btnClear = document.querySelector("#btnClear")

const deleteElement = document.createElement("p").textContent("X")
let wisdom = []

const renderWisdom = function(){

}

btnWisdom.addEventListener("click",() =>{
    const inputValue = inputWisdom.value
    const newWisdom = document.createElement("p").innerHTML(`${deleteElement} ${inputValue}`)
    newWisdom.addEventListener("click",() =>{
        // remove this wisdom
        renderWisdom()
    })
    
})


btnClear.addEventListener("click",() =>{

})

