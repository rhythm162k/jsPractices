"use strict";

const btnGenerate = document.querySelector(".btn--generate");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const number = document.getElementById("number");
const crntScr0 = document.getElementById("current--0");
const crntScr1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const totalOf0 = document.getElementById("score--0");
const totalOf1 = document.getElementById("score--1");

let currentPlayer, currentScore, totalScores, playing;

function init() {
  currentScore = 0;
  currentPlayer = 0;
  totalScores = [0, 0];
  playing = true;

  crntScr0.textContent = `Current ${currentScore}`;
  crntScr1.textContent = `Current ${currentScore}`;
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.add("active");
  player1.classList.remove("active");
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  number.textContent = "?";
  totalOf0.textContent = 0;
  totalOf1.textContent = 0;
}
init();

function resetCrntScr() {
  document.getElementById(
    `current--${currentPlayer}`
  ).textContent = `Current ${currentScore}`;
}

function switchPlayer() {
  currentScore = 0;
  resetCrntScr();
  currentPlayer = 1 - currentPlayer;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
}

btnGenerate.addEventListener("click", function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 10) + 1;
    number.textContent = randomNumber;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      resetCrntScr();
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    totalScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      totalScores[currentPlayer];
    if (totalScores[currentPlayer] >= 50) {
      currentScore = 0;
      resetCrntScr();
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("winner");
      document.getElementById(`name--${currentPlayer}`).textContent = `Player ${
        currentPlayer + 1
      } Wins!!!`;
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
