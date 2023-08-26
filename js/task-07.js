const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', function () {
    const fontSize = inputEl.value + 'px';
    textEl.style.fontSize = fontSize; 
});



