const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = el;
  listItem.classList.add("item");
  return listItem;
});
document.querySelector("#ingredients").append(...ingredientsList);
