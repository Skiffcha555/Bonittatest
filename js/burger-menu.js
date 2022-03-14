window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.burger-menu'),
        hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('burger-menu_active');
    });
})