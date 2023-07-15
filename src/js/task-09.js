function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");

const colorElement = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom(color) {
  const nextColor = getRandomHexColor();
  if (color) {
    bodyElement.style.backgroundColor = nextColor;
    colorElement.textContent = nextColor;
  }
}
