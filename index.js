const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector(".result");
const puntaje = document.getElementById("pun");
const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

function computerSelection() {
    const rps = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return rps[i];
}

rock.addEventListener("click", rockSelection);
paper.addEventListener("click", paperSelection);
scissors.addEventListener("click", scissorsSelection);

function rockSelection() {
    let punta = "";
    let texto = "";
    switch (computerSelection()) {
        case "rock":
            texto = "<br>It's a Tie! You both chose Rock.";
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "paper":
            computerScore++;
            texto = `<br>You Lose! Paper beats Rock.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "scissors":
            playerScore++;
            texto = `<br>You Win! Rock beats Scissors.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
    }
    if (playerScore == 5) {
        punta += "<br><br>You Won! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    } else if (computerScore == 5) {
        punta += "<br><br> You Lose! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    }
    return result.innerHTML = texto, puntaje.innerHTML = punta;
}
function paperSelection() {
    switch (computerSelection()) {
        case "rock":
            playerScore++;
            texto = `<br>You Win! Paper beats Rock.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "paper":
            texto = `<br>It's a Tie! You both chose Paper.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "scissors":
            computerScore++;
            texto = `<br>You Lose! Scissors beats Paper.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
    }
    if (playerScore == 5) {
        punta += "<br><br>You Won! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    } else if (computerScore == 5) {
        punta += "<br><br> You Lose! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    }
    return result.innerHTML = texto, puntaje.innerHTML = punta;
}
function scissorsSelection() {
    switch (computerSelection()) {
        case "rock":
            computerScore++;
            texto = `<br>You Lose! Rock beats Scissors.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "paper":
            playerScore++;
            texto = `<br>You Win! Scissors beats Paper.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
        case "scissors":
            texto = `<br>It's a Tie! You both chose Scissors.`;
            punta = `<br>Player Score is: ${playerScore}<br><br> Computer Score is: ${computerScore}`;
            break;
    }
    if (playerScore == 5) {
        punta += "<br><br>You Won! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    } else if (computerScore == 5) {
        punta += "<br><br> You Lose! Reload the page to play again!"
        buttons.forEach(elem => {elem.disabled = true})
    }
    return result.innerHTML = texto, puntaje.innerHTML = punta;
}
