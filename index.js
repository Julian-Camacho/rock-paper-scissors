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
        text.textContent = "It's a Tie!";
    } else if(winner == "player"){
        text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
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

    

    const rock = document.getElementById("rock");
    rock.addEventListener("click", function(){
        console.log("rock");
    })

    const paper = document.getElementById("paper");
    paper.addEventListener("click", function(){
        console.log("paper");
    })

    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function(){
        console.log("scissors");
    })
}

console.log(getPlayerChoice())

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log("playRound(playerSelection, computerSelection)");
//         if(checkWin(playerSelection, computerSelection) == "player"){
//             playerScore++;
//         } else if(checkWin(playerSelection, computerSelection) == "computer"){
//             computerScore++;
//         }
//     }
//     if(playerScore > computerScore){
//         console.log("You Won the Game!")
//     } else {
//         console.log("You Lose the Game!")
//     }
// }

