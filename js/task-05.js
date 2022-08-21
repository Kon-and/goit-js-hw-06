'use strict';

let input = document.getElementById('name-input');
let outputName = document.getElementById('name-output');

input.oninput = function () {
  if (input.value === '') {
    outputName.innerHTML = 'Anonymous';
  } else {
    outputName.innerHTML = input.value;
  }
};
