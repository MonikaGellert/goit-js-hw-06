const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}

function incrementCounter() {
  counterValue++;
  updateCounterValue();
}
function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

decrementBtn.addEventListener("click", decrementCounter);
incrementBtn.addEventListener("click", incrementCounter);

updateCounterValue();
