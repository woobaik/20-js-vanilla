const form = document.getElementById("form")
const nameField = document.getElementById("name-box")
const idField = document.getElementById("id-box")
const passwordField = document.getElementById("password-box")
const confirmationField = document.getElementById("confirmation-box")

const handleSubmit = (event) => {
	event.preventDefault()
	const inputBoxes = [nameField, idField, passwordField, confirmationField]

	inputBoxes.forEach((box) => {
		if (box.value === "") {
			inputFail(box)
		} else if (box.value.length > 15 || box.value.length < 6) {
			inputFail(box)
		} else {
			inputSuccess(box)
		}
	})
	console.log("submitted")
}

const inputSuccess = (input) => {
	input.className = "input-box success"
	input.parentElement.lastElementChild.className = "error-msg"
}

const inputFail = (input) => {
	let message = ""
	input.className = "input-box error"
	const targetName = input.parentElement.firstElementChild.innerHTML
	const targetErrorMSG = input.parentElement.lastElementChild
	message = `${targetName} is required`
	if (input.value.length > 15) {
		message = `${targetName} should be less than 15 characters`
	} else if (input.value.length < 6 && input.value.length !== 0) {
		message = `${targetName} should be more than 6 charcters`
	}
	targetErrorMSG.innerHTML = message
	targetErrorMSG.className = "error-msg show"
}

form.addEventListener("submit", handleSubmit)
