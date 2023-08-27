const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const initialFontSize = (Number(inputEl.value));
textEl.style.fontSize = initialFontSize + 'px';

inputEl.addEventListener('input', () => {
    const fontSize = inputEl.value + 'px';
    textEl.style.fontSize = fontSize; 
});



