// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.burger-menu'),
//         hamburger = document.querySelector('.burger');

//     hamburger.addEventListener('click', () => {
//         // hamburger.classList.toggle('burger_active');
//         menu.classList.toggle('burger-menu_active');
//     });
// })

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.burger-menu')
    // let close_icon = document.querySelector('.burger-menu')
    let hamburger = document.querySelector('.burger')
    let closeBurger = document.querySelector('.close-icon3')

    // close_icon.addEventListener('click', () => {
    //     menu.classList.remove('burger-menu_active');
    // });

    hamburger.addEventListener('click', () => {
        // hamburger.classList.toggle('burger_active');
        menu.classList.add('burger-menu_active');
    });

    closeBurger.onclick = () => menu.classList.remove('burger-menu_active')
})