const mainDiv = document.getElementById("main");
const userNumberInput = document.getElementById("user-input");
const remarks = document.getElementById("remarks");
const score = document.getElementById("score");
const highscore = document.getElementById("highscore");

let userScore = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;

let isGuessed = false;

score.innerText = userScore;

function CheckNumber() {
  if (userScore <= 0) {
    alert("You lose");
    resetAll();
  } else {
    if (!isGuessed) {
      if (+userNumberInput.value == secretNumber) {
        remarks.innerText = "Correct Number!";
        mainDiv.style.backgroundColor = "#54aa3d";
        isGuessed = true;
        if (userScore > +highscore.innerText) highscore.innerText = userScore;
      } else if (+userNumberInput.value > secretNumber) {
        remarks.innerText = "Too high!";
        setScore();
      } else {
        remarks.innerText = "Too low!";
        setScore();
      }
    } else {
      alert("You guessed the number now Play Again!");
    }
  }
}

function setScore() {
  userScore--;
  score.innerHTML = userScore;
}

function resetAll() {
  remarks.innerText = "Start guessing...";
  userScore = 20;
  score.innerText = userScore;
  userNumberInput.value = "";
  isGuessed = false;
  mainDiv.style.backgroundColor = "#1f1f1f";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
}
