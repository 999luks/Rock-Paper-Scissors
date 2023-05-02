const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', playRock);

paperBtn.addEventListener('click', playPaper);

scissorsBtn.addEventListener('click', playScissors)

function getComputerChoice() { //random computer choice
    let c = Math.random();
    if (c < 0.33) {
        return 'rock';
    }
    else if (c < 0.67) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

let x = 0; //win counter variable player
let y = 0; //win counter variable computer

const result = document.querySelector('.result');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

function playRock(){
    let computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    if (computerSelection==='rock'){
        result.textContent = 'Draw! You both picked Rock';
    }
    else if (computerSelection==='paper'){
        y++;
        computerScore.textContent = y;
        result.textContent = 'You lose! Paper beats Rock';
    }
    else if (computerSelection==='scissors'){
        x++;
        playerScore.textContent = x
        result.textContent = 'You win! Rock beats Scissors';
    }
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            result.textContent = 'You won the game first to five!';
        }
        else if(y===5){
            result.textContent = 'You lost the game first to five!';
        }
    }
}

function playPaper(){
    let computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    if (computerSelection==='paper'){
        result.textContent = 'Draw! You both picked Paper';
    }
    else if (computerSelection==='scissors'){
        y++;
        computerScore.textContent = y;
        result.textContent = 'You lose! Scissors beats Paper';
    }
    else if (computerSelection==='rock'){
        x++;
        playerScore.textContent = x;
        result.textContent = 'You win! Paper beats Rock';
    }
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            result.textContent = 'You won the game first to five!';
        }
        else if(y===5){
            result.textContent = 'You lost the game first to five!';
        }
    }
}

function playScissors(){
    let computerSelection = getComputerChoice();
    let playerSelection = 'scissors';
    if (computerSelection==='scissors'){
        result.textContent = 'Draw! You both picked Scissors';
    }
    else if (computerSelection==='rock'){
        y++;
        computerScore.textContent = y;
        result.textContent = 'You lose! Rock beats Scissors';
    }
    else if (computerSelection==='paper'){
        x++;
        playerScore.textContent = x;
        result.textContent = 'You win! Scissors beats Paper';
    }
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            result.textContent = 'You won the game first to five!';
        }
        else if(y===5){
            result.textContent = 'You lost the game first to five!';
        }
    }
}