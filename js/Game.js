/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
    } else {
      letterGuess.classList.add("wrong");
      // game.over.removeLife();
    }
  }

  // ============================================================
  checkForWin() {
    // stuff
  }

  // ============================================================
  removeLife() {
    //stuff
  }

  // ============================================================
  gameOver() {
    // stuff
  }
}
