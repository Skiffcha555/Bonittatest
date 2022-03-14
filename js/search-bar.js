window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.search-bar')
    let search_icon = document.querySelector('.search-icon')
    let close = document.querySelector('.close-icon2')

    search_icon.addEventListener('click', () => {
        menu.classList.add('search-bar_active');
    });

    close.onclick = () => document.querySelector('.search-bar').classList.remove('search-bar_active')
})