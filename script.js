let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundResult = '';

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

//Ognuna di queste fa partire la funzione playRound, ma con un valore di playerSeletion diverso
let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    playRound();
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    playRound();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playRound();
});

function playRound() {
    computerSelection = getComputerChoice();
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == computerSelection) {
            roundResult = `It's a tie! You both picked ${playerSelection}`;
        } else if (
            (playerSelection == 'Rock' && computerSelection == 'Paper') ||
            (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
            (playerSelection == 'Scissors' && computerSelection == 'Rock')
        ) {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } else if (
            (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
            (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
            (playerSelection == 'Paper' && computerSelection == 'Rock')
        ) {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
    }
    
    // CODICE CHE AGGIORNA IL PARAGRAFO DEL ROUND E I RISULTATI
    let playerScoreText = document.querySelector('#player-score');
    playerScoreText.textContent = playerScore;
    let computerScoreText = document.querySelector('#computer-score');
    computerScoreText.textContent = computerScore;
    let roundResultText = document.querySelector('#round-result');
    roundResultText.textContent = roundResult;

    if (playerScore == 5) {
        // FINE PARTITA DICHIARA PLAYER VINCITORE
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'block';
        let finalScore = document.querySelector('#final-score');
        finalScore.textContent = 'You won!';
    } else if (computerScore == 5) {
        // FINE PARTITA DICHIARA COMPUTER VINCITORE
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'block';
        let finalScore = document.querySelector('#final-score');
        finalScore.textContent = 'You lost!';
    }

}

// compare al click del bottone per resettare il gioco. quesot toglie il div ma non resetta il gioco, impostare reset

const btn = document.querySelector('.popup-button');
btn.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
    computerScore = 0;
    playerScore = 0;
    let playerScoreText = document.querySelector('#player-score');
    playerScoreText.textContent = playerScore;
    let computerScoreText = document.querySelector('#computer-score');
    computerScoreText.textContent = computerScore;
    let roundResultText = document.querySelector('#round-result');
    roundResultText.textContent = 'Choose your shape and beat the computer!';
});