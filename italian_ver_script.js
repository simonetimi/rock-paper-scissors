let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundResult = '';

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

//Ognuna di queste fa partire la funzione playRound, ma con un valore di playerSelection diverso
let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'Sasso';
    playRound();
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'Carta';
    playRound();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'Forbici';
    playRound();
});

function playRound() {
    computerSelection = getComputerChoice();
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == computerSelection) {
            roundResult = `È pareggio! Avete scelto entrambi ${playerSelection}`;
        } else if (
            (playerSelection == 'Sasso' && computerSelection == 'Carta') ||
            (playerSelection == 'Carta' && computerSelection == 'Forbici') ||
            (playerSelection == 'Forbici' && computerSelection == 'Sasso')
        ) {
            roundResult = `Hai perso! ${computerSelection} batte ${playerSelection}`;
            computerScore++;
        } else if (
            (playerSelection == 'Sasso' && computerSelection == 'Forbici') ||
            (playerSelection == 'Forbici' && computerSelection == 'Carta') ||
            (playerSelection == 'Carta' && computerSelection == 'Sasso')
        ) {
            roundResult = `Hai vinto! ${playerSelection} batte ${computerSelection}`;
            playerScore++;
        }
    }
    
    // Aggiorna il paragrafo del round e i risultati
    let playerScoreText = document.querySelector('#player-score');
    playerScoreText.textContent = playerScore;
    let computerScoreText = document.querySelector('#computer-score');
    computerScoreText.textContent = computerScore;
    let roundResultText = document.querySelector('#round-result');
    roundResultText.textContent = roundResult;

    if (playerScore == 5) {
        // Fine partita, player vincitore
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'flex';
        let finalScore = document.querySelector('#final-score');
        finalScore.textContent = 'Hai vinto!';
    } else if (computerScore == 5) {
        // Fine partita, computer vincitore
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'flex';
        let finalScore = document.querySelector('#final-score');
        finalScore.textContent = 'Hai perso!';
    }

}

// compare al click del bottone per resettare il gioco

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
    roundResultText.textContent = 'Scegli la tua mano e batti il computer!';
});