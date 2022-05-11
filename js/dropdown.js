// function dropDownSortBy() {
//     document.getElementById("DropdownSortBy").classList.toggle("show");
// }
document.getElementById("DropdownSortBy").onclick = e => e.stopPropagation()
let filtersSortBy = document.querySelectorAll('.filter-sort-by');
filtersSortBy.forEach(filterSortBy => {
    filterSortBy.addEventListener('click', function () {
        filtersSortBy.forEach(btn => btn.classList.remove('filter-sort-by_active'));
        filterSortBy.classList.add('filter-sort-by_active');
    });
});

////////////////////////////////////////////////////////////////////////

// function dropDownSizes() {
//     document.getElementById("DropdownSizes").classList.toggle("show");
// }
document.getElementById("DropdownSizes").onclick = e => e.stopPropagation()
const filtersSizes = document.querySelectorAll(".filter-sizes")
function filterSizesActiveCheckBox($el, event) {
    event.preventDefault()
    $el.classList.toggle('filter-sizes_active')
    $el.querySelector('input').checked = !$el.querySelector('input').checked
}

////////////////////////////////////////////////////////////////////////

// function dropDownColors() {
//     document.getElementById("DropdownColors").classList.toggle("show");
// }
document.getElementById("DropdownColors").onclick = e => e.stopPropagation()
const filtersColors = document.querySelectorAll(".filter-colors")
function filterColorsActiveCheckBox($el, event) {
    event.preventDefault()
    $el.classList.toggle('filter-colors_active')
}

////////////////////////////////////////////////////////////////////////

// function dropDownPrice() {
//     document.getElementById("DropdownPrice").classList.toggle("show");
// }
document.getElementById("DropdownPrice").onclick = e => e.stopPropagation()
let filtersPrice = document.querySelectorAll('.filter-price');
filtersPrice.forEach(filterPrice => {
    filterPrice.addEventListener('click', function () {
        filtersPrice.forEach(btn => btn.classList.remove('filter-price_active'));
        filterPrice.classList.add('filter-price_active');
    });
});

////////////////////////////////////////////////////////////////////////
window.addEventListener('load', () => {
    let dropDowns = document.querySelectorAll('.dropdown')

    dropDowns.forEach(el => {
        el.onclick = event => event.stopPropagation()
    })

    activateDropdown()
})

window.addEventListener('click', ()=> {
    document.querySelector('.dropdown-content-show').classList.remove('dropdown-content-show')
    document.querySelector('.dropdown-active').classList.remove('dropdown-active')
})

window.addEventListener('load', () => {
    let filterArrowDown = document.querySelectorAll('.filters .dropbtn')

    filterArrowDown.forEach((elem)=>{
        elem.addEventListener('click', function () {
            elem.classList.toggle('dropdown-active');
        });
    })
})

function activateDropdown() {
    let dropdownClose = document.querySelectorAll('.dropbtn');
    dropdownClose.forEach((elem)=>{
        elem.addEventListener('click', function(){
            let parentElem = this.parentNode;
            let contentBlock = parentElem.querySelector('.dropdown-content')

            if (contentBlock.classList.contains('dropdown-content-show')) {
                contentBlock.classList.remove('dropdown-content-show')
            }

            else {
                let descActive = document.querySelectorAll('.dropdown-content.dropdown-content-show');

                descActive.forEach((elem)=>{
                    elem.classList.remove('dropdown-content-show');
                })
    
                if(contentBlock.classList.contains("dropdown-content-show")) {
                    contentBlock.classList.remove('dropdown-content-show');
                }
    
                else {
                    contentBlock.classList.add('dropdown-content-show');
                }
            }
        })
    })
}