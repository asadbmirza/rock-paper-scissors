let computerScore = 0;
let humanScore = 0;
const yourScore = document.querySelector('#yourScore');
const CPUScore = document.querySelector('#CPUScore');
const buttons = document.querySelector(".buttons");
const select = document.querySelector(".select");

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
function getHumanChoice(e) {
    switch (e.target.className) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper'
    }

    return 'scissors';
}

function playRound(e) {

    if (humanScore >= 5) {
        select.textContent = "You win!";
        return;
    }
    else if (computerScore >= 5) {
        select.textContent = "You lose!";
        return;
    }


    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log(`Tie!: ${humanChoice} ties ${computerChoice}`);
    }

    if (humanChoice == "paper" && computerChoice == "scissors" ||
        humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "scissors" && computerChoice == "rock"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        CPUScore.textContent = `Computer : ${computerScore}`;
    }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        yourScore.textContent = `You : ${humanScore}`;
    }

}
buttons.addEventListener('click', playRound);