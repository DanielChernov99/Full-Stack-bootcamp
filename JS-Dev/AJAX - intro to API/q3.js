const fetchBook = async function (param, paramData) {
    let paramCurrent = param

    if (paramData === undefined) {
        paramCurrent = "isbn"
        paramData = param
    } else if (param.toLowerCase().trim() === "title") {
        paramCurrent = "intitle"
    }

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${paramCurrent}:${paramData}`)

    const data = await response.json()

    data.items.forEach(item => {
        const book = item.volumeInfo

        console.log(`Title: ${book.title}
Author: ${book.authors}
ISBN: ${book.industryIdentifiers}`)
    })
}

fetchBook("9780575087057")
fetchBook("title", "How to Win Friends and Influence People")