var modal = document.getElementById("notifyMeModal");
var btn = document.getElementById("showModal");
var close = document.getElementsByClassName("close-modal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}