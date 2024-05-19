function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1/3) {
        return 'rock';
    }
    else if (rand < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function getHumanChoice() {
     
    let choice = prompt("Choose Rock, Paper, or Scissors!");
    let valid_choices = ["rock", "paper", "scissors"]
    while (!valid_choices.includes(choice.toLowerCase())) {
        choice = prompt("Please choose Rock, Paper, or Scissors!");
    }
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie!: ${humanChoice} ties ${computerChoice}`);
        return 0;
    }

    if (humanChoice == "paper" && computerChoice == "scissors" ||
        humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "scissors" && computerChoice == "rock"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        return 1;
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let roundNumber = 1;
    let score = 0;

    while (roundNumber <= 5) {
        console.log(`The current score is\nYou: ${humanScore}\nOpponent Score:${computerScore}`);
        score = playRound(getHumanChoice(), getComputerChoice());
        
        if (score == 0) continue;
        else if (score == 1) humanScore++;
        else computerScore++;

        if (humanScore == 3) {
            console.log("You win the game!");
            break;
        }
        else if (computerScore == 3) {
            console.log("You lose the game :(");
            break;
        }

        roundNumber++;
    }
}

playGame();