function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const div = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]')

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const fragment = document.createDocumentFragment();
  let size = 30;

for (let i = 0; i < amount; i++) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(box);
  size += 10;
}

boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});