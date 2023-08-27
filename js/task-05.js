const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener('input', (event) => {
    const inputName = inputEl.value.trim();
if (inputName === '') {
    outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = inputName;
}});


