window.addEventListener('DOMContentLoaded', () => {
    const showFormAddress = document.querySelector('.add-address-btn')
    let formAddress = document.querySelector('.add-delivery-address-form')
    let closeformAddress = document.querySelector('.close-address-form')

    showFormAddress.addEventListener('click', () => {
        formAddress.classList.add('add-delivery-address-form_active');
    });

    // formAddress.forEach($formAddress => {
    //     $formAddress.addEventListener('click', function () {
    //         showFormAddress.classList.add('delivery-address_active');
    //     });
    // });

    closeformAddress.onclick = () => formAddress.classList.remove('add-delivery-address-form_active')
})