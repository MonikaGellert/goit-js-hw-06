const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", font);
function font(ft) {
  text.style.fontSize = `${ft.target.value}px`;
}
