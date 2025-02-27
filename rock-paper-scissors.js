console.log("hello world");

let randomNumber = Math.random();

function getComputerChoice(randomNumber) {
    if (randomNumber < .33) {
        return "rock"
    }
    else if (randomNumber >=.33 && randomNumber < .66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let computerChoice = getComputerChoice(randomNumber);

// prompt("rock paper scissors?")

function getHumanChoice() {
    let choice = prompt("rock paper scissors?")
    
    if (choice == "rock") {
        return "rock"
    }
    else if (choice == "paper") {
        return "paper"
    }
    else if (choice == "scissors") {
        return "scissors"
    }
    else return "try again"
}

let humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

console.log(randomNumber);
console.log("computer chooses: " + computerChoice);
console.log("you choose: " + humanChoice);
console.log(humanScore);
console.log(computerScore);