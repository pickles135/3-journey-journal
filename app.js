const open = document.getElementById("open")
const close = document.getElementById("close")
const circleContainer = document.querySelector(".circle-container")
const container = document.querySelector(".container")

//Toggle icons
open.addEventListener("click", () => circleContainer.classList.add("show-nav"))
close.addEventListener("click", () => circleContainer.classList.remove("show-nav"))

//Toggle Nav
open.addEventListener("click", () => container.classList.add("show-nav"))
close.addEventListener("click", () => container.classList.remove("show-nav"))
