window.addEventListener('load', () => {
    const elem = document.querySelector('.datepicker-here');
    const elemYear = document.querySelector('.datepicker-year');
    const fullDate = document.querySelector('.datepicker-full');

    const datepicker = new Datepicker(elem, {
        format: 'dd MM',
        weekStart: 1
    }); 

    const datepickerYear = new Datepicker(elemYear, {
        format: 'yyyy',
        startView: 2,
        pickLevel: 2
    }); 

    const datepickerFull = new Datepicker(fullDate, {
        format: 'dd/mm/yyyy',
        weekStart: 1
    }); 
})