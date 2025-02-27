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
    let choice = prompt("rock paper scissors?").toLowerCase()
    
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

function playRound(computerChoice, humanChoice) {
if (computerChoice == "rock" && humanChoice == "paper") {
    console.log("paper beats rock, you win!");
    ++humanScore ;
}
else if (computerChoice == "rock" && humanChoice == "scissors") {
    console.log("rock beats scissors, you lose!");
    ++computerScore ;
}
else if (computerChoice == "paper" && humanChoice == "scissors") {
    console.log("scissors beats paper, you win!");
    ++humanScore ;
}
else if (computerChoice == "paper" && humanChoice == "rock") {
    console.log("paper beats rock, you lose!");
    ++computerScore ;
}
else if (computerChoice == "scissors" && humanChoice == "rock") {
    console.log("rock beats scissors, you win!");
    ++humanScore ;
}
else if (computerChoice == "scissors" && humanChoice == "paper") {
    console.log("scissors beats paper, you lose!");
    ++computerScore ;
}
else if (computerChoice == humanChoice) {
    console.log("tie!")
}
else {
    console.log("try again!")
}
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

playRound(computerChoice, humanChoice);

console.log(randomNumber);
console.log("computer chooses: " + computerChoice);
console.log("you choose: " + humanChoice);

console.log("computer score: " + computerScore);
console.log("human score: " + humanScore);