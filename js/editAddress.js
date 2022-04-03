window.addEventListener('DOMContentLoaded', () => {
    const showEditFormAddress = document.querySelector('.edit-address')
    let editFormAddress = document.querySelector('.edit-delivery-address-form')
    let hideAdressess = document.querySelectorAll('.delivery-address-main')

    showEditFormAddress.addEventListener('click', () => {
        editFormAddress.style.display = "block";

        hideAdressess.forEach($hideAdressess => {
            $hideAdressess.style.display = "none";
        });
    });
})