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

var computerChoice = getComputerChoice(randomNumber);

console.log(randomNumber);
console.log(computerChoice);