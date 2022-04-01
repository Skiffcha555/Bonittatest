window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.size-guide-block')
    let sizeGuide = document.querySelectorAll('.size-guide')
    let close = document.querySelector('.close-icon-size-guide')
        
    // sizeGuide.addEventListener('click', () => {
    //     menu.classList.toggle('size-guide-block_active');
    // });

    sizeGuide.forEach($sizeGuide => {
        $sizeGuide.addEventListener('click', function () {
            menu.classList.toggle('size-guide-block_active');
        });
    });

    close.onclick = () => document.querySelector('.size-guide-block').classList.remove('size-guide-block_active')
})