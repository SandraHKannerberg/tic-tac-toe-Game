//VARIABLES
let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
//let boxes = document.getElementsByClassName('box'); this gives a HTML-collection
let boxes = Array.from(document.getElementsByClassName('box')); //this gives an array

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;//defaultplayer
let spaces = Array(9).fill(null);

//Eventlistener to each of our 9 boxes
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = '';
    })

    currentPlayer = X_TEXT; //back to defaultplayer
}

startGame();