const fetchBook = async function (isbn) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)

    const data = await response.json()

    console.log(data)
}

fetchBook("9780575087057")