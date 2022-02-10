function checkHeader() {
    let scrollPosition = 0
    scrollPosition = window.pageYOffset

    if (scrollPosition > 0) {
        document.querySelector('header').classList.add('_white')
    }
    else {
        document.querySelector('header').classList.remove('_white')
    }
}

window.onscroll = checkHeader
window.onload = checkHeader