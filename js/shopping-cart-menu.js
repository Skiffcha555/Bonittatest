window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.shopping-cart-menu')
    let shopping_cart = document.querySelector('.icon_cart')
    let close = document.querySelector('.close-icon')

    shopping_cart.addEventListener('click', () => {
        shopping_cart.classList.toggle('icon_cart_active');
        menu.classList.toggle('shopping-cart-menu_active');
        close.classList.remove('shopping-cart-menu_active');    
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            shopping_cart.classList.toggle('icon_cart_active');
            menu.classList.toggle('shopping-cart-menu_active');
            close.classList.remove('shopping-cart-menu_active');
            document.querySelector('.shopping-cart-menu').classList.remove('shopping-cart-menu_active')
        })
    })

    function menuClose() {
        let close = document.querySelector('.close-icon')
        console.log(close)
    }
})