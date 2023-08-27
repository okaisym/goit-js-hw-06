const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSend);

function onSend(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
       return alert('All fields must be filled!');
    }

    const userInfo = {
        email: email,
        password: password
    }
    
    console.log(userInfo);
    form.reset();
};