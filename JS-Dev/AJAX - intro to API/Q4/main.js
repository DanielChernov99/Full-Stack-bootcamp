const apiKey = "hUBRPDmMMGF3y8yeWk1j9XwXXOShxCVY"

const fetchGif = async function () {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=1`)

    const data = await response.json()

    const firstGif = data.data[0]
    const gifUrl = firstGif.embed_url

    const iframe = document.createElement("iframe")
    iframe.src = gifUrl

    const container = document.querySelector("#gif-container")
    container.appendChild(iframe)
}

fetchGif()