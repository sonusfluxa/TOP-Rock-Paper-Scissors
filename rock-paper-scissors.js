function getComputerChoice() {
    let randomNumber = Math.random();

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

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        console.log("COMPUTER CHOOSES: " + computerChoice);
        console.log("YOU CHOOSE: " + humanChoice);

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

        console.log("computer score: " + computerScore);
        console.log("your score: " + humanScore);
        console.log(" ");
    }

    //Round One

    playRound(computerChoice, humanChoice);

    //Round Two

    playRound(computerChoice, humanChoice);

    //Round Three

    playRound(computerChoice, humanChoice);

    //Round Four

    playRound(computerChoice, humanChoice);

    //Round Five

    playRound(computerChoice, humanChoice);

}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(randomNumber);

playGame();
