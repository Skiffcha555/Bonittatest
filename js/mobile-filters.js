window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile-filters')
    let mobileFilters = document.querySelector('.mobile-filter')
    let close = document.querySelector('.close-icon-mobile-filters')
    let filterSizeActive = document.querySelectorAll('.filter-size-mobile')
        
    mobileFilters.addEventListener('click', () => {
        menu.classList.toggle('mobile-filters_active');
    });

    filterSizeActive.forEach($filterSizeActive => {
        $filterSizeActive.addEventListener('click', () => {
            $filterSizeActive.classList.toggle('filter-size-mobile_active');
        });
    });

    close.onclick = () => document.querySelector('.mobile-filters').classList.remove('mobile-filters_active')
})