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

    monthArrowDown.addEventListener('click', function () {
        monthArrowDown.classList.toggle('arrowdown-active');
    });

    yearArrowDown.addEventListener('click', function () {
        yearArrowDown.classList.toggle('arrowdown-active');
    });
})

// window.addEventListener('click', ()=> {
//     document.querySelector('.arrowdown-active').classList.remove('arrowdown-active')
// })