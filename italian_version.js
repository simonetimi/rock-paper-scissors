let computerSelection
let playerSelection
let computerScore = 0
let playerScore = 0
let roundResult = ''

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'Sasso';
    } else if (randomNumber === 1) {
        computerSelection = 'Carta';
    } else {
        computerSelection = 'Forbici';
    }
    return computerSelection;
}

function getPlayerChoice() {
    playerInput = prompt('Sasso, Carta o Forbici?', '');
    playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerSelection;
}

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection ==  computerSelection) {
        roundResult = `Pareggio! ${playerSelection} contro ${computerSelection}`
        computerScore++;
        playerScore++;
    } else if ((playerSelection == 'Sasso' && computerSelection == 'Carta') ||
        (playerSelection == 'Carta' && computerSelection == 'Forbici') ||
        (playerSelection == 'Forbici' && computerSelection == 'Sasso')) {
        roundResult = `Hai perso ${computerSelection} batte ${playerSelection}`
        computerScore++;
    } else if ((playerSelection == 'Sasso' && computerSelection == 'Forbici') ||
        (playerSelection == 'Forbici' && computerSelection == 'Carta') ||
        (playerSelection == 'Carta' && computerSelection == 'Sasso')) {
        roundResult = `Hai vinto! ${playerSelection} batte ${computerSelection}`
        playerScore++;
    }
    console.log(roundResult)
    alert(roundResult);
    return roundResult;
}
 
function giveResult() {
    if (playerScore == computerScore) {
        alert('Fine della partita! Wow, è pareggio!')
    } else if (playerScore > computerScore)  {
        alert('Fine della partita! Congratulazioni, hai vinto!') 
    } else {
        alert('Fine della partita! Hai perso, ma puoi riprovare ancora!') 
    }
}

for (let i = 0; i < 5; i++) {
    playRound();
}

giveResult()