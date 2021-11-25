var menu = document.querySelector('#mobile-menu');
var navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menu.classList.toggle('is-active');
});

navMenu.addEventListener('click', function () {
    const active = document.querySelector('.active');
    if (active) {
        navMenu.classList.remove('active');
        menu.classList.toggle('is-active');
    }
});
