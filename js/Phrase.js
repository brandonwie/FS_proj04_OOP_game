/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    // first, split each letters(& blank) and store inside an array
    const eachLetter = this.phrase.split("");
    // convert each letters(& blank) to "li" elements using ".map()"
    const deployLetters = eachLetter.map(letter => {
      if (letter !== " ") {
        return `<li class='hide letter ${letter}'>${letter}</li>`;
      } else {
        return `<li class='space'> </li>`;
      }
    });
    // it returns an array with HTML elements
    const phraseDiv = document.querySelector("#phrase ul");
    // used "join" method to put all elements together (referred to MDN through Google)
    phraseDiv.innerHTML = deployLetters.join("");
  }

  // check if the letter selected matches a letter
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    this.phrase.includes(letter);
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const matchingLetters = document.getElementsByClassName(letter);
    matchingLetters.classList.remove("hide");
    matchingLetters.classList.add("show");
  }
}
