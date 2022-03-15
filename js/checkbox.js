document.getElementById("DropdownSizes").onclick = e => e.stopPropagation()
const checkboxes = document.querySelectorAll(".checkboxes")

function checkboxesActive($el, event) {
    event.preventDefault()
    $el.classList.toggle('checkboxes_active')
    $el.querySelector('input').checked = !$el.querySelector('input').checked
}