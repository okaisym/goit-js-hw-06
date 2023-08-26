const inputEl = document.getElementById("validation-input");

inputEl.addEventListener('blur', onBlur);

function onBlur(e) {
    const inputValue = inputEl.value;
    const inputLength = inputValue.length;
    const dataLength = inputEl.getAttribute("data-length");
    const toNum = Number(dataLength);
    if(inputLength === toNum) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
     } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }};
    
