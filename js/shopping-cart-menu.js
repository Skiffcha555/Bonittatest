window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.shopping-cart-menu')
    let shoppingCart = document.querySelector('.icon_cart')
    let close = document.querySelector('.close-icon')
        
    shoppingCart.addEventListener('click', () => {
        menu.classList.toggle('shopping-cart-menu_active');
    });

    close.onclick = () => document.querySelector('.shopping-cart-menu').classList.remove('shopping-cart-menu_active')
})