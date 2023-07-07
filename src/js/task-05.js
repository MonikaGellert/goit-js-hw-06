const myInput = document.querySelector("#name-input");
const newSpan = document.querySelector("#name-output");

myInput.addEventListener("input", newInput);

function newInput(imp) {
  //console.log(e.currentTarget);
  newSpan.textContent = imp.currentTarget.value;

  if (imp.currentTarget.value === "") {
    newSpan.textContent = "Anonymous";
  }
}
