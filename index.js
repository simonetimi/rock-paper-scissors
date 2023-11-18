let computerSelection
let playerSelection
let roundResult

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'Rock';
    } else if (randomNumber === 1) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

function getPlayerChoice() {
    playerInput = prompt('Rock, Paper or Scissors?', '');
    playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1);
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        roundResult = 'It\'s a tie! You both picked Rock'
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        roundResult = 'It\'s a tie! You both picked Paper'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        roundResult = 'It\'s a tie! You both picked Scissors'
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        roundResult = 'You lose! Paper beats Rock'
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        roundResult = 'You lose! Scissors beats Paper'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        roundResult = 'You lose! Rock beats Scissors'
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        roundResult = 'You win! Rock beats Scissors'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        roundResult = 'You win! Scissors beats Paper'
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        roundResult = 'You win! Paper beats Rock'
    }
    return roundResult;
}
 