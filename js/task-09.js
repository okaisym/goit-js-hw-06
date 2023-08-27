function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorInfo = document.querySelector('.color');

let currentColor = getRandomHexColor();

btn.addEventListener('click', onClick);

function onClick(event) {
  body.style.backgroundColor = currentColor;  
  colorInfo.textContent = currentColor;
  currentColor = getRandomHexColor();
}