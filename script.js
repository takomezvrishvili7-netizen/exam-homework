const burgerbutton = document.getElementById('burger-button');
const navlist = document.querySelector('.navigation');
const closebutton = document.getElementById('close-button');

burgerbutton.addEventListener('click', () => {
    navlist.classList.add('active');
});

closebutton.addEventListener('click', () => {
    navlist.classList.remove('active');
});