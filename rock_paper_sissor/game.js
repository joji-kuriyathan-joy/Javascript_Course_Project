console.log("Rock Paper Sissor Game");


const options = Array('rock', 'paper', 'sissor');
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    var cmpChoice = options[Math.floor(Math.random() * options.length)];
    return cmpChoice;
}

function getHumanChoice() {
    return prompt("Choose your option to play!\n sissor/rock/paper");
}



function playRound(humanChoice, computerChoice) {

    switch (humanChoice.toLowerCase().trim()) {
        case 'rock':
            if (computerChoice.toLowerCase().trim() === 'sissor') {
                console.log("You win!");
                humanScore++;
                break;
            } else {
                console.log("Computer wins!");
                computerScore++;
                break;
            }
        case 'paper':
            if (computerChoice.toLowerCase().trim() === 'rock') {
                console.log("You win!");
                humanScore++;
                break;
            } else {
                console.log("Computer wins!");
                computerScore++;
                break;
            }
        case 'sissor':
            if (computerChoice.toLowerCase().trim() === 'paper') {
                console.log("You win!");
                humanScore++;
                break;
            } else {
                console.log("Computer wins!");
                computerScore++;
                break;
            }
    }
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);

}





function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if ((humanSelection.length == 0) && (humanSelection != null)) {
        humanSelection = getHumanChoice();
    }
    else if ((computerSelection.length == 0) && (computerSelection != null)) {
        computerSelection = getComputerChoice();
    }

    playRound(humanSelection, computerSelection);
}
var playcount = 0;
while (playcount < 5) {
    console.log("Round " + (playcount ));
    playGame();
    playcount++;
}

if (humanScore > computerScore) {
    alert("You win the game!");
}
else if (humanScore < computerScore) {
    alert("Computer wins the game!");
}
else {
    alert("It's a tie!");
}
