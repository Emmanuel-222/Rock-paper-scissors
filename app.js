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
