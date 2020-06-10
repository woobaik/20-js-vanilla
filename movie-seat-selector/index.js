const seats = document.querySelectorAll(".seat")
const count = document.getElementsByClassName("count")
const total = document.getElementsByClassName("total")
const ticketPrice = 10

seats.forEach((seat) => {
	// when seat is available

	if (seat.className === "seat available") {
		seat.addEventListener("click", (e) => {
			e.target.classList.toggle("selected")
			count[0].innerHTML = Number(count[0].innerHTML) + 1
			total[0].innerHTML = (Number(total[0].innerHTML) + ticketPrice).toFixed(2)
		})
	}
})
