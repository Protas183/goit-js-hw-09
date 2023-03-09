function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
stopBtn.disabled = true;

function firstChangeColor() {
  let colorFirsChange = getRandomHexColor();
  body.style.backgroundColor = colorFirsChange;
}

startBtn.addEventListener('click', startChangeColor);
function startChangeColor() {
  firstChangeColor();
  timerId = setInterval(() => {
  let colorName = getRandomHexColor();
  body.style.backgroundColor = colorName;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
