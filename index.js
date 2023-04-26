// console.log("hello, world!")

const text = document.querySelector("#info");

console.log(text)

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWin(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    } else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = checkWin(playerSelection, computerSelection);
    if(winner == "tie"){
        return "It's a Tie!";
    } else if(winner == "player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice(){
    // let validInput = false;
    // while(validInput == false){
    //     const selection = prompt("Rock Paper Scissors");
    //     if(selection == null){
    //         continue;
    //     }
    //     const selectLower = selection.toLowerCase();
    //     if(options.includes(selectLower)){
    //         validInput = true;
    //         return selectLower;
    //     }
    // }
    const pRock = document.getElementById("rock");
    const pPaper = document.getElementById("paper");
    const pScissors = document.getElementById("scissors");

    pRock.addEventListener("click", function(){
        return "rock";
    })

    pPaper.addEventListener("click", function(){
        return "paper";
    })

    pScissors.addEventListener("click", function(){
        return "scissors";
    })
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("playRound(playerSelection, computerSelection)");
        if(checkWin(playerSelection, computerSelection) == "player"){
            playerScore++;
        } else if(checkWin(playerSelection, computerSelection) == "computer"){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log("You Won the Game!")
    } else {
        console.log("You Lose the Game!")
    }
}
