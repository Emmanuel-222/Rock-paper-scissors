let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let totalScore;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 3));
    return options[computerChoice];
}