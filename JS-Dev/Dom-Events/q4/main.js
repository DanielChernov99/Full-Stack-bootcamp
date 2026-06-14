const submitButton = document.querySelector(".form-container .button")

const validate = function () {
    const nameInput = document.querySelector("#nameInput").value
    const salaryInput = document.querySelector("#salaryInput").value
    const birthdayInput = document.querySelector("#birthdayInput").value
    const phoneInput = document.querySelector("#phoneInput").value

    const inputsObject = {
        name: nameInput,
        salary: salaryInput,
        birthday: birthdayInput,
        phone: phoneInput
    }

    const resultDiv = document.querySelector("#errors")
    resultDiv.innerHTML = ""

    let hasErrors = false

    Object.entries(inputsObject).forEach(([key, value]) => {
        if (value.trim() === "") {
            resultDiv.appendChild(makeErrorElement(`${key} is missing`))
            hasErrors = true
        }
    })

    if (nameInput.trim() !== "" && nameInput.length <= 2) {
        resultDiv.appendChild(makeErrorElement("Name should be longer than 2 characters"))
        hasErrors = true
    }

    if (salaryInput.trim() !== "" && (salaryInput <= 10000 || salaryInput >= 16000)) {
        resultDiv.appendChild(makeErrorElement("Salary must be greater than 10,000 but less than 16,000"))
        hasErrors = true
    }

    if (phoneInput.trim() !== "" && phoneInput.length !== 10) {
        resultDiv.appendChild(makeErrorElement("Phone must be 10 digits long"))
        hasErrors = true
    }

    if (!hasErrors) {
        document.querySelector(".form-container").style.display = "none"

        const welcomeMessage = document.createElement("h2")
        welcomeMessage.textContent = `Welcome, ${nameInput}!`
        document.body.appendChild(welcomeMessage)
    }
}

submitButton.addEventListener("click", validate)

const makeErrorElement = function (errorText) {
    const errorElement = document.createElement("p")
    errorElement.textContent = errorText
    errorElement.style.color = "red"
    return errorElement
}