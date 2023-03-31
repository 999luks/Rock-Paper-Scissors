const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);

function getComputerChoice() { //random computer choice
    let x = Math.random();
    if (x < 0.33) {
        return "rock";
    }
    else if (x < 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let x = 0; //win counter variable player
let y = 0; //win counter variable computer

const results = document.querySelector('.results');

function playRock(){
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    if (computerSelection==="rock"){
        const drawPara = document.createElement('p');
        drawPara.textContent = 'Draw! You both picked Rock';
        results.appendChild(drawPara);
    }
    else if (computerSelection==="paper"){
        y++;
        const losePara = document.createElement('p');
        losePara.textContent = 'You lose! Paper beats Rock';
        results.appendChild(losePara);
    }
    else if (computerSelection==="scissors"){
        x++;
        const winPara = document.createElement('p');
        winPara.textContent = 'You win! Rock beats Scissors';
        results.appendChild(winPara);
    }
    const para = document.createElement('p');
    para.textContent = `You: ${x} | Computer: ${y}`;
    results.appendChild(para);
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You won the game first to five!';
            winnerPara.style.color = 'green';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
        else if(y===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You lost the game first to five!';
            winnerPara.style.color = 'red';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
    }
}

function playPaper(){
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    if (computerSelection==="paper"){
        const drawPara = document.createElement('p');
        drawPara.textContent = 'Draw! You both picked Paper';
        results.appendChild(drawPara);
    }
    else if (computerSelection==="scissors"){
        y++;
        const losePara = document.createElement('p');
        losePara.textContent = 'You lose! Scissors beats Paper';
        results.appendChild(losePara);
    }
    else if (computerSelection==="rock"){
        x++;
        const winPara = document.createElement('p');
        winPara.textContent = 'You win! Paper beats Rock';
        results.appendChild(winPara);
    }
    const para = document.createElement('p');
    para.textContent = `You: ${x} | Computer: ${y}`;
    results.appendChild(para);
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You won the game first to five!';
            winnerPara.style.color = 'green';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
        else if(y===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You lost the game first to five!';
            winnerPara.style.color = 'red';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
    }
}

function playScissors(){
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    if (computerSelection==="scissors"){
        const drawPara = document.createElement('p');
        drawPara.textContent = 'Draw! You both picked Scissors';
        results.appendChild(drawPara);
    }
    else if (computerSelection==="rock"){
        y++;
        const losePara = document.createElement('p');
        losePara.textContent = 'You lose! Rock beats Scissors';
        results.appendChild(losePara);
    }
    else if (computerSelection==="paper"){
        x++;
        const winPara = document.createElement('p');
        winPara.textContent = 'You win! Scissors beats Paper';
        results.appendChild(winPara);
    }
    const para = document.createElement('p');
    para.textContent = `You: ${x} | Computer: ${y}`;
    results.appendChild(para);
    if(x === 5 || y === 5){
        rockBtn.removeEventListener('click', playRock);
        paperBtn.removeEventListener('click', playPaper);
        scissorsBtn.removeEventListener('click', playScissors);
        if(x===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You won the game first to five!';
            winnerPara.style.color = 'green';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
        else if(y===5){
            const winnerPara = document.createElement('p');
            winnerPara.textContent = 'You lost the game first to five!';
            winnerPara.style.color = 'red';
            winnerPara.style.fontWeight = '800';
            results.appendChild(winnerPara);
        }
    }
}