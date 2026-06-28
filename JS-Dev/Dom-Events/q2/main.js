const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const checkReservation = function () {
  let name = document.querySelector("#input_txt").value
  const resultTextElement = document.querySelector("#result_txt")

  name = name.toLowerCase()
  name = name[0].toUpperCase() + name.slice(1)

  if (name in reservations) {
    if (reservations[name].claimed === false) {
      resultTextElement.textContent = `Welcome, ${name}`
    } else {
      resultTextElement.textContent = "Hmm, someone already claimed this reservation"
    }
  } else {
    resultTextElement.textContent = "You have no reservation"
  }
}

const reserveButton = document.querySelector("#btnReserve")
reserveButton.addEventListener("click", checkReservation)