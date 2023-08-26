const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector("#ingredients");
const newList = ingredients.map((newIngredient) => {
const newElement = document.createElement('li');
newElement.classList.add('item');
newElement.textContent = newIngredient;
console.log(newElement);
return newElement;
});

ulElement.append(...newList);
console.log(ulElement);






