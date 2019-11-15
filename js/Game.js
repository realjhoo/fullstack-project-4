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
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    let phrase = this.phrases[randomPhrase];
    return phrase;
  }

  // ============================================================
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

    // log out the random phrase
    console.log(this.activePhrase);
  }

  // ============================================================
  handleInteraction(letterGuess) {
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
    letterGuess.disabled = true;
  }

  // ============================================================
  checkForWin() {
    // stuff
    const letter = document.querySelectorAll(".letter").length;
    const show = document.querySelectorAll(".show").length;

    if (letter === show) {
      this.gameOver(win);
    }
  }

  // ============================================================
  removeLife() {
    //stuff

    let heart = document.getElementsByTagName("img");
    heart[this.missed].setAttribute("src", "images/lostHeart.png");
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(lose);
    }
  }

  // ============================================================
  gameOver(youWon) {
    // stuff
    const gameOverMessage = document.getElementById("game-over-message");
    const overlay = document.getElementById("overlay");
    const buttonText = document.getElementById("btn__reset");

    if (youWon) {
      // yaay
      console.log("winner");
      gameOverMessage.textContent = "Victory!!!";
      overlay.classList.add("win");
    } else {
      // boooo
      console.log("loser");
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
    console.log("Resetting the game");
    this.missed = 0;
    // remove all li elements
    const x = document.getElementsByTagName("ul");
    x[0].innerHTML = "";

    // remove classes wrong and chosen from class key
    let key = document.getElementsByClassName("key");
    for (let i = 0; i < key.length; i++) {
      key[i].classList.remove("chosen");
      key[i].classList.remove("wrong");
      key[i].disabled = false;
    }

    let heart = document.getElementsByTagName("img");
    // reset the hearts
    for (let j = 0; j < 5; j++) {
      heart[j].setAttribute("src", "images/liveHeart.png");
    }
  }
}
