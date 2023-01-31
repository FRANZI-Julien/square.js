const square = document.getElementById("square");
const increaseHeightBtn = document.getElementById("increase-height");
const changeColorBtn = document.getElementById("change-color");
const hideBtn = document.getElementById("hide");
const showBtn = document.getElementById("show");
const resetBtn = document.getElementById("reset");

let initialHeight = 100;
let initialColor = "blue";
let initialVisibility = "visible";
let initialLeft = 50;

increaseHeightBtn.addEventListener("click", function() {
  square.style.height = (initialHeight += 10) + "px";
});

changeColorBtn.addEventListener("click", function() {
  square.style.backgroundColor = (initialColor = initialColor === "blue" ? "green" : "blue");
});

hideBtn.addEventListener("click", function() {
  square.style.visibility = (initialVisibility = "hidden");
});

showBtn.addEventListener("click", function() {
  square.style.visibility = (initialVisibility = "visible");
});

resetBtn.addEventListener("click", function() {
  square.style.height = (initialHeight = 100) + "px";
  square.style.backgroundColor = (initialColor = "blue");
  square.style.visibility = (initialVisibility = "visible");
  square.style.left = (initialLeft = 50) + "%";
});

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    square.style.left = (initialLeft -= 10) + "%";
  } else if (event.code === "ArrowRight") {
    square.style.left = (initialLeft += 10) + "%";
  }
});
