/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const win = true;
const lose = false;

// ==============================================================
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("This is the first phrase"),
      new Phrase("The second phrase is right here"),
      new Phrase("King George the Third liked this phrase"),
      new Phrase("May the fourth phrase be with you"),
      new Phrase("A fifth phrase is five too many")
    ];
    this.activePhrase = null;
  }

  // ============================================================
  getRandomPhrase() {
    // pick a random phrase
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    let phrase = this.phrases[randomPhrase];
    return phrase;
  }

  // ============================================================
  startGame() {
    // set up the game board
    // reset the overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("lose");
    overlay.classList.remove("win");
    overlay.style.display = "none";

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

    // *** log out the random phrase ***
    console.log(this.activePhrase);
  }

  // ============================================================
  handleInteraction(letterGuess) {
    // program branches from here
    if (this.activePhrase.checkLetter(letterGuess)) {
      this.activePhrase.showMatchedLetter(letterGuess);
      letterGuess.classList.add("chosen");

      if (this.checkForWin(win)) {
        this.gameOver();
      }
    } else {
      letterGuess.classList.add("wrong");
      this.removeLife();
    }

    // sometimes, key is disabled before classes are set
    if (
      letterGuess.classList.contains("chosen") ||
      letterGuess.classList.contains("wrong")
    ) {
      letterGuess.disabled = true;
    }
  }

  // ============================================================
  checkForWin() {
    // if we guess the same number of letters as were in
    // the puzzle, we win
    const allLetters = document.querySelectorAll(".letter").length;
    const revealed = document.querySelectorAll(".show").length;

    if (allLetters === revealed) {
      this.gameOver(win);
    }
  }

  // ============================================================
  removeLife() {
    // remove a life on wrong guess
    const heart = document.getElementsByTagName("img");
    heart[this.missed].setAttribute("src", "images/lostHeart.png");

    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver(lose);
    }
  }

  // ============================================================
  gameOver(youWon) {
    // end game, win or lose
    const gameOverMessage = document.getElementById("game-over-message");
    const overlay = document.getElementById("overlay");
    const buttonText = document.getElementById("btn__reset");

    if (youWon) {
      // set win screen yaay
      gameOverMessage.textContent = "Victory!!!";
      overlay.classList.add("win");
    } else {
      // set lose screen boooo
      gameOverMessage.textContent = "Defeat!!!";
      overlay.classList.add("lose");
    }

    buttonText.textContent = "Play Again";
    overlay.style.display = "flex";

    this.reset();
  }

  // ============================================================
  reset() {
    //reset the game
    this.missed = 0;

    // remove the puzzle
    const ul = document.getElementsByTagName("ul");
    ul[0].innerHTML = "";

    // remove wrong and chosen classes from key
    const key = document.getElementsByClassName("key");
    for (let i = 0; i < key.length; i++) {
      key[i].classList.remove("chosen");
      key[i].classList.remove("wrong");
      key[i].disabled = false;
    }

    // reset the hearts
    const heart = document.getElementsByTagName("img");
    for (let j = 0; j < 5; j++) {
      heart[j].setAttribute("src", "images/liveHeart.png");
    }
  }

  // ============================================================
  clickKeyboard(keyClicked) {
    // find and click the matching onscreen keyboard key
    const key = document.getElementsByClassName("key");
    for (let i = 0; i < key.length; i++) {
      if (keyClicked === key[i].innerText) {
        key[i].click();
      }
    }
  }
}
