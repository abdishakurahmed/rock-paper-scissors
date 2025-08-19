// Get the start game button
const startGameBtn = document.querySelector(".start-game-btn");

// get the game container that houses images of the rock paper and scissors which then i will use event delegation to get what the user clicked without adding event listeners to each of the images
const gameContainer = document.querySelector(".rock-paper-scissor");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  // checking if the input is array or not and if it contains something or empty
  if (!Array.isArray(choices) || choices.length === 0) {
    throw new Error("Choices have to be an array and must have values in it.");
  }
  const gameChoice = Math.floor(Math.random() * choices.length);
  return choices[gameChoice].toLowerCase();
}

// this will listen for the player choices and what the player touches clickes
gameContainer.addEventListener("click", getPlayerChoice);

function getPlayerChoice(event) {
  // toLowerCase() is just for future proofing both here and the the function getComputerChoice() function so yeah just know that and dont be suprissed
  const playerChoice = event.target.dataset.choice;
  if (!playerChoice) return;
  const computer = getComputerChoice(choices);
  const winners = determineWinner(playerChoice, computer);
  displayResult(winners);
}

function determineWinner(player, computer) {
  let result;
  if (player === computer) {
    result = `it's a draw, you've chosen ${player} and the computer chose ${computer}`;
  } else if (player === "paper" && computer === "rock") {
    result = `you've won. you chose ${player} and the computer chose ${computer}`;
  } else if (player === "rock" && computer === "scissors") {
    result = `you've won. you chose ${player} and the computer chose ${computer}`;
  } else if (player === "scissors" && computer === "paper") {
    result = `you've won. you chose ${player} and the computer chose ${computer}`;
  } else if (computer === "paper" && player === "rock") {
    result = `You've lost and the computer Won. you chose ${player} and the computer chose ${computer}`;
  } else if (computer === "rock" && player === "scissors") {
    result = `You've lost and the computer Won. you chose ${player} and the computer chose ${computer}`;
  } else if (computer === "scissors" && player === "paper") {
    result = `You've lost and the computer Won. you chose ${player} and the computer chose ${computer}`;
  }
  return result;
}

const winnerPara = document.querySelector(".winner");

function displayResult(result) {
  winnerPara.textContent = result;
}
