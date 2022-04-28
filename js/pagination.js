function pageSelect($this) {
    $this.parentElement.querySelectorAll('span').forEach($el => {
        $el.classList.remove('active')
    });
    $this.classList.add('active')
}

function incrimentPage($this) {
    let paginations = $this.parentElement.querySelectorAll('span')
    let pageActive = +$this.parentElement.querySelector('.active').innerText

    if (pageActive < paginations.length) {
        paginations[pageActive].click()
    }

    pageActive++
}

function decrimentPage($this) {
    let paginations = $this.parentElement.querySelectorAll('span')
    let pageActive = +$this.parentElement.querySelector('.active').innerText

    pageActive--
    pageActive--
    if (pageActive < paginations.length) {
        paginations[pageActive].click()
    }
}