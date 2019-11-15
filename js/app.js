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
    // console.log(event.target.innerText);
    game.handleInteraction(event.target);
  }
});

// =============================================================
window.addEventListener("keyup", event => {
  if (event.keyCode > 64 && event.keyCode < 90) {
    // this should click the appopriate letter
    // I can pass the letter, and sort it out with an if
    // in handleInteraction()
    // then send to 2nd checkLetter... after that should be same
    console.log(
      "Code: " + String.fromCharCode(event.keyCode).toLocaleLowerCase()
    );
    console.log(event.target);
  }
});
