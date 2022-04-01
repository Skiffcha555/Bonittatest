window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.shopping-cart-wishlist')
    let shoppingCart = document.querySelector('.cart-wishlist')
    let close = document.querySelector('.close-icon-wishlist')
        
    shoppingCart.addEventListener('click', () => {
        menu.classList.toggle('shopping-cart-wishlist_active');
    });

    close.onclick = () => document.querySelector('.shopping-cart-wishlist').classList.remove('shopping-cart-wishlist_active')
})

function openTabs(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " selected";
}