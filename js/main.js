// Get the start game button
const startGameBtn = document.querySelector('.start-game-btn');

// get the game container that houses images of the rock paper and scissors which then i will use event delegation to get what the user clicked without adding event listeners to each of the images
const gameContainer = document.querySelector('.rock-paper-scissor');

const choices = ["rock", "paper", "scissors"];


function getComputerChoice(choices) {
   // checking if the input is array or not and if it contains something or empty
   if (!Array.isArray(choices) || choices.length === 0) {
      throw new Error("Choices have to be an array and must have values in it.");
   }
   const gameChoice = Math.floor(Math.random() * choices.length);
   return choices[gameChoice];
}

// this will listen for the player choices and what the player touches clickes
gameContainer.addEventListener('click', getPlayerChoice);

function getPlayerChoice(event) {
// toLowerCase() is just for future proofing both here and the the function getComputerChoice() function so yeah just know that and dont be suprissed
   const playerChoice = event.target.className.toLowerCase();
   console.log(playerChoice)
   return playerChoice;
}