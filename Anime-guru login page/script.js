const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-box');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});
