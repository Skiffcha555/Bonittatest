var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');
var rangeColor = document.querySelector('#range-color');

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (upperVal < lowerVal + 1) {
        lowerSlider.value = upperVal - 1;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 1;
        }
    }

    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';
    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';

    console.log('upper value: ' + upperSlider.value);
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (lowerVal > upperVal - 1) {
        upperSlider.value = lowerVal + 1;

        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 1;
        }
    }
    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';
    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';
};
//https://codepen.io/logjam23/pen/qBEqNNK