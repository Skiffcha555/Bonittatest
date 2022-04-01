function dropDownSortBy() {
    document.getElementById("DropdownSortBy").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("DropdownSortBy").onclick = e => e.stopPropagation()
let filtersSortBy = document.querySelectorAll('.filter-sort-by');
filtersSortBy.forEach(filterSortBy => {
    filterSortBy.addEventListener('click', function () {
        filtersSortBy.forEach(btn => btn.classList.remove('filter-sort-by_active'));
        filterSortBy.classList.add('filter-sort-by_active');
    });
});

function dropDownSizes() {
    document.getElementById("DropdownSizes").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("DropdownSizes").onclick = e => e.stopPropagation()
const filtersSizes = document.querySelectorAll(".filter-sizes")

function filterSizesActiveCheckBox($el, event) {
    event.preventDefault()
    $el.classList.toggle('filter-sizes_active')
    $el.querySelector('input').checked = !$el.querySelector('input').checked
}

function dropDownColors() {
    document.getElementById("DropdownColors").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("DropdownColors").onclick = e => e.stopPropagation()
const filtersColors = document.querySelectorAll(".filter-colors")

function filterColorsActiveCheckBox($el, event) {
    event.preventDefault()
    $el.classList.toggle('filter-colors_active')
}


function dropDownPrice() {
    document.getElementById("DropdownPrice").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("DropdownPrice").onclick = e => e.stopPropagation()
let filtersPrice = document.querySelectorAll('.filter-price');
filtersPrice.forEach(filterPrice => {
    filterPrice.addEventListener('click', function () {
        filtersPrice.forEach(btn => btn.classList.remove('filter-price_active'));
        filterPrice.classList.add('filter-price_active');
    });
});

// filterSizeActive.forEach(filterSize => {
//     filterSize.addEventListener('click', function () {
//         filterSizeActive.forEach(btn => btn.classList.remove('filter-size-mobile_active'));
//         filterSize.classList.add('filter-size-mobile_active');
//     });
// });