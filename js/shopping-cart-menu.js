window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.shopping-cart-menu')
    let shopping_cart = document.querySelector('.icon_cart')
    let close = document.querySelector('.close-icon')
        
    shopping_cart.addEventListener('click', () => {
        menu.classList.toggle('shopping-cart-menu_active');
    });

    close.onclick = () => document.querySelector('.shopping-cart-menu').classList.remove('shopping-cart-menu_active')
})