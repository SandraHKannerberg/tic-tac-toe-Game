//VARIABLES
let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
//let boxes = document.getElementsByClassName('box'); this gives a HTML-collection
let boxes = Array.from(document.getElementsByClassName('box')); //this gives an array

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    console.log(e.target)
}

startGame();