const inputVal = document.getElementById('validation-input');

const totalLenght = inputVal.getAttribute('data-length');

const intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function () {
  if (inputVal.value.length <= intTotallenght) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  } else {
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
  }
};
