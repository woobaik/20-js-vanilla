const toggleBtn = document.getElementById("toggle")
const leftBar = document.getElementById("left-bar")
const closeNav = document.getElementById("close-nav")
const modalOpenBtn = document.getElementById("sign-up")
const modal = document.getElementById("modal")

console.log(toggleBtn)

const toggleLeftBar = () => {
	leftBar.classList.toggle("show")
}

const closeNavBar = () => {
	leftBar.classList.toggle("show")
}

const openModal = () => {
	console.log("ho")
	modal.classList.toggle("show")
}

toggleBtn.addEventListener("click", toggleLeftBar)
closeNav.addEventListener("click", closeNavBar)
modalOpenBtn.addEventListener("click", openModal)
