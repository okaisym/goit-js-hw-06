

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counterId = document.getElementById('value');

let counterValue = 0;


btnDecrement.addEventListener('click', function (){
    counterValue -= 1;
    counterId.textContent = counterValue;
});

btnIncrement.addEventListener('click', function (){
    counterValue += 1;
    counterId.textContent = counterValue;
});


