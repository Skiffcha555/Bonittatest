function checkHeader() {
    let scrollPosition = 0
    scrollPosition = window.pageYOffset

    if (scrollPosition > 0) {
        document.querySelector('header').classList.add('_brown')
    } else {
        document.querySelector('header').classList.remove('_brown')
    }
}

window.onscroll = checkHeader
window.onload = checkHeader

// let langSelect = document.querySelector('.lang-select')

// langSelect.addEventListener('click', () => {
//     langSelect.classList.toggle('active')
// })

const activateArrowlang = (event) => {
    event.target.parentElement.classList.add('active')
}

const deActivateArrowlang = (event) => {
    event.target.parentElement.classList.remove('active')
}

window.addEventListener('load', () => {
    let $langSelect = document.querySelector('.lang-select')

    $langSelect.addEventListener('click', () => {
        $langSelect.classList.toggle('active')
    })

    // $langSelect.focus = event => activateArrowlang(event)
    // $langSelect.onblur = event => deActivateArrowlang(event)
})

window.addEventListener('DOMContentLoaded', () => {
    const heartIconArray = document.querySelectorAll('.heart-icon_path');
    const heartIconInCartArray = document.querySelectorAll('.save-to-favorite');
    const cartIconArray = document.querySelectorAll('.cart-icon');

    heartIconArray.forEach($heartIcon => {
        $heartIcon.addEventListener('click', () => {
            $heartIcon.classList.toggle('heart-icon_path_active');
        });
    });

    heartIconInCartArray.forEach($heartIconInCart => {
        $heartIconInCart.addEventListener('click', () => {
            $heartIconInCart.parentElement.querySelector('.heart-icon_path').classList.toggle('heart-icon_path_active')
        });
    });

    cartIconArray.forEach($cartIcon => {
        $cartIcon.addEventListener('click', () => {
            $cartIcon.classList.add('cart-icon-hide');
            $cartIcon.parentElement.querySelector('.product-sizes').classList.add('product-sizes-show')
        });
    });
})

let colors = document.querySelectorAll('.product-color');
colors.forEach(color => {
    color.addEventListener('click', function () {
        colors.forEach(btn => btn.classList.remove('product-color_active'));
        this.classList.add('product-color_active');
    });
});

let sizes = document.querySelectorAll('.product-size');
sizes.forEach(size => {
    size.addEventListener('click', function () {
        sizes.forEach(btn => btn.classList.remove('product-size_active'));
        this.classList.add('product-size_active');
    });
});

function openImg(imgs) {
    var expandImg = imgs.closest('.review-descr').querySelector('.expanded-img')
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

let deliveryMethod = document.querySelectorAll('.delivery-method');
deliveryMethod.forEach($deliveryMethod => {
    $deliveryMethod.addEventListener('click', function () {
        deliveryMethod.forEach(btn => btn.classList.remove('delivery-method_selected'));
        $deliveryMethod.classList.add('delivery-method_selected');
    });
});

let amountOfPrepayment = document.querySelectorAll('.amount-of-prepayment');
amountOfPrepayment.forEach($amountOfPrepayment => {
    $amountOfPrepayment.addEventListener('click', function () {
        amountOfPrepayment.forEach(btn => btn.classList.remove('amount-of-prepayment_selected'));
        $amountOfPrepayment.classList.add('amount-of-prepayment_selected');
    });
});

let paymentMethod = document.querySelectorAll('.payment-method');
paymentMethod.forEach($paymentMethod => {
    $paymentMethod.addEventListener('click', function () {
        paymentMethod.forEach(btn => btn.classList.remove('payment-method_selected'));
        $paymentMethod.classList.add('payment-method_selected');
    });
});

function CreditCard(elem){
    var m = elem.value.length+1;
    
    if (m > 19 || event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
    
    else if (m == 5 || m == 10 || m == 15)
    elem.value += ' ';
}

function Phone(elem){
    var m = elem.value.length+1;
    
    if (m > 11 || event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
    
    else if (m == 3 || m == 6 || m == 9)
    elem.value += ' ';
}

// function PhoneSecond(elem){
//     var m = elem.value.length+1;
    
//     if (m > 15 || event.keyCode < 48 || event.keyCode > 57)
//     event.returnValue= false;
    
//     else if (m == 5 || m == 9 || m == 12 || m == 13)
//     elem.value += ' ';
// }

function YearNum(elem){
    var m = elem.value.length+1;
    
    if (m > 19 || event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}

// let arrowdownHide = document.querySelectorAll('.arrowdown-active')

// arrowdownHide.forEach($arrowdownHide => {
//     window.addEventListener('click', () => {
//         arrowdownHide.classList.remove('arrowdown-active')
//     });
// });

// window.onclick = function (event) {
//     if (event.target == arrowdownHide) {
//         arrowdownHide.classList.remove('arrowdown-active')
//     }
// }