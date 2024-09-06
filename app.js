let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let totalScore;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 3));
    return options[computerChoice];
}

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
    } while (!['rock', 'paper', 'scissors'].includes(humanChoice));
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        alert(`It's a tie! Computer chose ${computerChoice}.`);
    } else if(humanChoice === 'paper' && computerChoice === 'rock' || 
              humanChoice === 'scissors' && computerChoice === 'paper' || 
              humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        alert(`You won! Your current score: ${humanScore}, Computer score: ${computerScore}. Computer chose ${computerChoice}.`);
    } else {
        computerScore++;
        alert(`Computer won! Your current score: ${humanScore}, Computer score: ${computerScore}. Computer chose ${computerChoice}.`);
    }
}
