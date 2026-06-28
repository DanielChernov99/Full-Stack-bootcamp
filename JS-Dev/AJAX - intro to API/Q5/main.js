const apiKey = "hUBRPDmMMGF3y8yeWk1j9XwXXOShxCVY"

const searchButtonElement = document.querySelector("#searchButton")
const inputElement = document.querySelector("#inputTxt")
const iframeElement = document.querySelector("#gifHolder")

searchButtonElement.addEventListener("click",async  () =>{
    const inputValue = inputElement.value
    inputElement.value = ""
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=1`)
    const data = await response.json()
    const firstGif = data.data[0]
    const gifUrl = firstGif.embed_url
    iframeElement.setAttribute("src",gifUrl)

})