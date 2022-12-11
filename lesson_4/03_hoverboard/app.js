const board = document.querySelector('#board');
const colors = ['#007FFF', '#0000FF', '#318CE7', '#6CB4EE', '#89CFF0', '#007FFF'];
const SQUARES_NUMBER = 400;


for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square)
}
function getRandomColor() {
 
}