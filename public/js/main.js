// Toggle menu
// Toggle menu

let burger = document.getElementById('toggle');
menu = document.getElementById('menu');

burger.addEventListener('click', e => {
    console.log(e)
    burger.classList.toggle('change');
    menu.classList.toggle('active');
});