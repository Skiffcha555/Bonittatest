window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.size-guide-block')
    let size_guide = document.querySelector('.size-guide')
    let close = document.querySelector('.close-icon3')
        
    size_guide.addEventListener('click', () => {
        menu.classList.toggle('size-guide-block_active');
    });

    close.onclick = () => document.querySelector('.size-guide-block').classList.remove('size-guide-block_active')
})