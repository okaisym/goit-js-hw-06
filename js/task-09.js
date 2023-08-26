function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorInfo = document.querySelector('.color');

btn.addEventListener('click', onClick);

function onClick(event) {
  const doc = event.currentTarget;
  body.style.backgroundColor = getRandomHexColor();  
  colorInfo.textContent = getRandomHexColor();
}