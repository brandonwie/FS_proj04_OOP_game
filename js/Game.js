/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    return [
      { phrase: "Tomorrow is another day" },
      { phrase: "Never look back" },
      { phrase: "Life is short" },
      { phrase: "Keep it simple" },
      { phrase: "You talking to me" },
      { phrase: "For the Horde" },
      { phrase: "Chicken noodle soup" },
      { phrase: "You Only Live Once" },
      { phrase: "Time is money" }
    ];
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomArrayPick = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomArrayPick];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    //hide the start screen overlay
    document.querySelector("#overlay").setAttribute("style", "display: none");
    // retrieve a random phrase object from the array
    this.activePhrase = this.getRandomPhrase();
    const newPhrase = new Phrase(this.activePhrase.phrase);
    // add the phrase to display
    newPhrase.addPhraseToDisplay();
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const hiddenLetters = document.querySelectorAll(".hide");
    if (hiddenLetters.length === 0) {
      // if there's no word hidden === win
      return true;
    } else {
      return false;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;
    const liveHeart = document.querySelectorAll(
      ".tries img[src='images/liveHeart.png']"
    );
    // replace next "first" heart item to lostHeart.png
    const heartsLi = liveHeart[0].parentNode;
    heartsLi.firstElementChild.setAttribute("src", "images/lostHeart.png");
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const gameEndMessage = document.querySelector("#game-over-message");
    const overlay = document.querySelector("#overlay");
    const button = document.querySelector("#btn__reset");
    if (gameWon) {
      overlay.setAttribute("style", 'display: ""');
      gameEndMessage.innerHTML = "You are good! I'm impressed.";
      overlay.className = "win";
      button.innerText = "Play Again?";
      reset();
    } else {
      overlay.setAttribute("style", 'display: ""');
      gameEndMessage.innerHTML = "You better learn more English!";
      overlay.className = "lose";
      button.innerText = "Try Again";
      reset();
    }
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.setAttribute("disabled", "true");
    const buttonString = button.innerText;
    const currentPhrase = new Phrase(this.activePhrase.phrase);
    const isMatch = currentPhrase.checkLetter(buttonString);
    if (isMatch) {
      button.classList.add("chosen");
      currentPhrase.showMatchedLetter(buttonString);
      const isWin = this.checkForWin();
      if (isWin) {
        this.gameOver(true);
      }
    } else {
      //! EXCEED EXPECTATION CONTENT
      button.classList.add("wrong", "animated", "shake");
      this.removeLife();
    }
  }
}

//! RESET GAME
const reset = () => {
  const phraseUl = document.querySelector("#phrase ul");
  const buttons = document.querySelectorAll(".key");
  const lostHeart = document.querySelectorAll(
    ".tries img[src='images/lostHeart.png']"
  );
  // remove all 'li' elements
  phraseUl.innerHTML = "";

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    // reset the class name to "key" only
    button.className = "key";
    button.removeAttribute("disabled");
  }

  for (let i = 0; i < lostHeart.length; i++) {
    // return the liveHearts
    lostHeart[i].setAttribute("src", "images/liveHeart.png");
  }
  // set missed to 0
  game.missed = 0;
  // start a new game
};
