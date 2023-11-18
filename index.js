let computerSelection
let playerSelection
let computerScore = 0
let playerScore = 0
let roundResult = ''

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
    return playerSelection;
}

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if ((playerSelection == 'Rock' && computerSelection == 'Rock') ||
        (playerSelection == 'Paper' && computerSelection == 'Paper') ||
        (playerSelection == 'Scissors' && computerSelection == 'Scissors')) {
        roundResult = `It's a tie! You both picked ${playerSelection}`
        computerScore++;
        playerScore++;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore++;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++;
    }
    console.log(roundResult)
    alert(roundResult);
    return roundResult;
}
 
function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore == computerScore) {
        alert('Final result: Wow, it\'s a tie!')
    } else if (playerScore > computerScore)  {
        alert('Final result: Congratulations, you won!') 
    } else {
        alert('Final Result: You lost, but you can try again!') 
    }
}

game()