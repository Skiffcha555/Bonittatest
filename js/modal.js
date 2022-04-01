var modalDiscount = document.getElementById("modalDiscount");
var btn = document.getElementById("showModalDiscount");
var close = document.getElementsByClassName("close-modal")[0];

btn.onclick = function () {
    modalDiscount.style.display = "block";
}

close.onclick = function () {
    modalDiscount.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalDiscount) {
        modalDiscount.style.display = "none";
    }
}