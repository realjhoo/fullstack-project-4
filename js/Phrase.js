/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    // convert to lower case
    this.phrase = phrase.toLowerCase();
  }

  // ============================================================
  addPhraseToDisplay() {
    const phraseUl = document.querySelector("#phrase ul");

    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");
      li.innerText = this.phrase[i];
      phraseUl.append(li);
      if (this.phrase[i] === " ") {
        li.classList = "space";
      } else {
        li.classList = "letter";
      }
    }
  }

  // ============================================================
  checkLetter(letterGuess) {
    // check if letter is in phrase and
    // deactivate used keys
    let letterMatches = false;

    if (this.phrase.includes(letterGuess.innerText)) {
      letterMatches = true;
    }

    return letterMatches;
  }

  // ============================================================
  showMatchedLetter(letterGuess) {
    // stuff
    const letter = document.getElementsByClassName("letter");
    for (let i = 0; i < letter.length; i++) {
      let guess = letter[i].innerText;

      if (guess.includes(letterGuess.innerText)) {
        letter[i].classList.add("show");
      }
    }
  }
}
