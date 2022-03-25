window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.search-bar')
    let search_icon = document.querySelectorAll('.search-icon')
    let close = document.querySelector('.close-icon2')

    const menuMobile = document.querySelector('.search-bar.mobile')
    let search_iconMobile = document.querySelectorAll('.search-icon-mobile')
    let closeMobile = document.querySelector('.close-icon2-mobile')
    
    search_icon.forEach(($search_icon) => {
        $search_icon.addEventListener('click', () => {
            menu.classList.add('search-bar_active');
        });
    });

    search_iconMobile.forEach(($search_iconMobile) => {
        $search_iconMobile.addEventListener('click', () => {
            menuMobile.classList.add('search-bar_active');
        });
    });

    close.onclick = () => document.querySelector('.search-bar').classList.remove('search-bar_active')
    closeMobile.onclick = () => document.querySelector('.search-bar.mobile').classList.remove('search-bar_active')
})