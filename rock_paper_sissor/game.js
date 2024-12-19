console.log("Rock Paper Sissor Game");


const options = Array('rock', 'paper', 'sissor');
let humanScore, computerScore = 0;

function getComputerChoice() {
    var cmpChoice = options[Math.floor(Math.random() * options.length)];
    return cmpChoice;
}

function getHumanChoice() {
    return prompt("Choose your option to play!\n sissor/rock/paper");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);

function playRound(humanChoice, computerChoice) {
    
    switch (humanChoice.toLowerCase().trim()) {
        case 'rock':
            if (computerChoice.toLowerCase().trim() === 'scissor') {
                prompt("You win!");
                humanScore++;
                break;
            } else {
                prompt("Computer wins!");
                computerScore++;
                break;
            }
        case 'paper':
            if (computerChoice.toLowerCase().trim() === 'rock') {
                prompt("You win!");
                humanScore++;
                break;
            } else {
                prompt("Computer wins!");
                computerScore++;
                break;
            }
        case 'sissor':
            if (computerChoice.toLowerCase().trim() === 'paper') {
                prompt("You win!");
                humanScore++;
                break;
            } else {
                prompt("Computer wins!");
                computerScore++;
                break;
            }
    }
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);

}

playRound(humanSelection, computerSelection);