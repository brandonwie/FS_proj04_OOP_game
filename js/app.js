/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector("#btn__reset");
const buttonsDiv = document.querySelector("#qwerty");

startButton.addEventListener("click", () => {
  // start a new game
  game = new Game();
  game.startGame();
});

buttonsDiv.addEventListener("click", e => {
  //only activate it when a 'button' is clicked
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
  }
});
//! EXCEED EXPECTATION CONTENT
// loop through all keys and find the same key that user presses pass it to .hadleInteraction();
document.addEventListener("keyup", e => {
  console.log(e.key);
  const collectKeys = document.querySelectorAll(".key");
  console.log(collectKeys);
  for (let i = 0; i < collectKeys.length; i++) {
    const letter = collectKeys[i].innerText;
    if (e.key === letter) {
      game.handleInteraction(collectKeys[i]);
    }
  }
});
