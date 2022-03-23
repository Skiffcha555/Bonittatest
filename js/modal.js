var modalNotifyMe = document.getElementById("notifyMeModal");
var modalFeedback = document.getElementById("modalFeedback");
var btn = document.getElementById("showModal");
var close = document.getElementsByClassName("close-modal")[0];
var closeSecond = document.getElementsByClassName("close-modal-second")[0];

btn.onclick = function () {
    modalNotifyMe.style.display = "block";
}

close.onclick = function () {
    modalNotifyMe.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalNotifyMe) {
        modalNotifyMe.style.display = "none";
    }
}

btn.onclick = function () {
    modalFeedback.style.display = "block";
}

close.onclick = function () {
    modalFeedback.style.display = "none";
}

closeSecond.onclick = function () {
    modalFeedback.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalFeedback) {
        modalFeedback.style.display = "none";
    }
}