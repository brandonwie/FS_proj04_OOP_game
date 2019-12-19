/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
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
    const getPhrase = this.getRandomPhrase();
    //! set new Phrase with getPhrase.phrase - this ".phrase" targets "phrase" key inside a "creatPhrase()'s object" (=returns a string)
    const newPhrase = new Phrase(getPhrase.phrase);
    // add the phrase to display
    newPhrase.addPhraseToDisplay();
  }
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const matchedLetters = document.querySelectorAll("show");
    if (matchedLetters.length === 0) {
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
    const hearts = document.querySelectorAll(".tries");
    hearts[0].firstElementChild.setAttribute("src", "images/lostHeart.png");
    if ((this.missed = 5)) {
      this.gameOver();
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const gameEndMessage = document.querySelector("#game-over-message");
    const overlay = document.querySelector("#overlay");
    if ((this.missed = 5)) {
      gameEndMessage.innerHTML = "You lose!";
      overlay.classList.remove("start");
      overlay.classList.add("lose");
    } else {
      gameEndMessage.innerHTML = "You Win!";
      overlay.classList.remove("start");
      overlay.classList.add("win");
    }
  }
}
