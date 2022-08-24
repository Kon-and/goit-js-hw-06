function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const changeBackgroundColor = document.querySelector('.change-color');
const changeColorName = document.querySelector('.color');

changeBackgroundColor.addEventListener('click', onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  changeColorName.innerHTML = randomColor;
}
