/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// ==============================================================
const game = new Game();

// ==============================================================
document.getElementById("btn__reset").addEventListener("click", () => {
  game.startGame();
});

// ==============================================================
document.getElementById("qwerty").addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    game.handleInteraction(event.target);
  }
});

// =============================================================
window.addEventListener("keyup", event => {
  if (event.keyCode > 64 && event.keyCode < 90) {
    // get the letter of the clicked key, then send it to the
    // method that matches the to the onscreen keyboard

    let keyClicked = String.fromCharCode(event.keyCode).toLowerCase();

    game.clickKeyboard(keyClicked);
  }
});
