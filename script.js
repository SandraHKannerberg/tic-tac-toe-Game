//VARIABLES
let playerText = document.querySelector('.playerText')
let restartBtn = document.getElementById('restartBtn');
//let boxes = document.getElementsByClassName('box'); this gives a HTML-collection
let boxes = Array.from(document.getElementsByClassName('box')); //this gives an array
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;//defaultplayer
let spaces = Array(9).fill(null);

restartBtn.addEventListener('click', restart)

//Eventlistener to each of our 9 boxes
const startGame = () => {
    playerText.innerText = `${currentPlayer}'s turn`
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

startGame();

function restart() {

    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '';
        box.style.pointerEvents = 'auto';
    })

    currentPlayer = X_TEXT; //back to defaultplayer
    startGame();
}

function boxClicked(e) {
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(playerHasWon() !==false){
            playerText.innerText = `Congratulations! ${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
            boxes.forEach(box => box.style.pointerEvents = 'none')
            return
        } 

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
        playerText.innerText = `${currentPlayer}'s turn`;
        
        if (!spaces.includes(null)){
            playerText.innerText = "The game ended with a draw. Please restart"
            gameEnded = true;
        }
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c] //the winning combination array
        }
    }
    return false
}
