window.addEventListener('load', () => {
    const elem = document.querySelector('.datepicker-here');
    const elemYear = document.querySelector('.datepicker-year');
    const fullDate = document.querySelector('.datepicker-full');
    let monthArrowDown = document.querySelector('.valid-until-month')
    let yearArrowDown = document.querySelector('.valid-until-year')

    const datepicker = new Datepicker(elem, {
        format: 'MM',
        weekStart: 1,
        pickLevel: 1
    }); 

    const datepickerYear = new Datepicker(elemYear, {
        format: 'yyyy',
        startView: 2,
        pickLevel: 2
    }); 

    // monthArrowDown.addEventListener('click', () => {
    //     monthArrowDown.classList.toggle('arrowdown-active');
    // });

    // yearArrowDown.addEventListener('click', () => {
    //     yearArrowDown.classList.toggle('arrowdown-active');
    // });
})

const activateArrow = (event) => {
    event.target.parentElement.classList.add('arrowdown-active')
}

const deActivateArrow = (event) => {
    event.target.parentElement.classList.remove('arrowdown-active')
}

window.addEventListener('load', () => {
    const $inputMonth = document.querySelector('.datepicker-here')
    const $inputYear = document.querySelector('.datepicker-year')

    $inputMonth.onfocus = event => activateArrow(event)
    $inputMonth.onblur = event => deActivateArrow(event)
    $inputYear.onfocus = event => activateArrow(event)
    $inputYear.onblur = event => deActivateArrow(event)
})