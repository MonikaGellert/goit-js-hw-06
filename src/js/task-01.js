const categoryList = document.querySelector("ul#categories");

const categoryItems = categoryList.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;

console.log("Number of categories: " + numberOfCategories);

categoryItems.forEach((item) => {
  const categoryHeader = item.querySelector("h2");

  const categoryElements = item.querySelectorAll("li");

  console.log("Category: " + categoryHeader.textContent);
  console.log("Elements: " + categoryElements.length);
});
