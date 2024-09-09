let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

// use random numbers to generate computer move
function generateComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Scissors";
  } else {
    computerMove = "Paper";
  }
  return computerMove;
}

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  }
});

function playGame(playerMove) {
  // assign the return value to computer move
  const computerMove = generateComputerMove();
  let result = "";

  if (playerMove === "Rock") {
    //if player chose rock, this code will run
    if (computerMove === "Paper") {
      result = "You lose";
    } else if (computerMove === "Scissors") {
      result = "You win";
    } else {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    //if player chose paper, this code will run
    if (computerMove === "Scissors") {
      result = "You lose";
    } else if (computerMove === "Rock") {
      result = "You win";
    } else {
      result = "Tie";
    }
  } else {
    //if player chose scissors, this code will run
    if (computerMove === "Rock") {
      result = "You lose";
    } else if (computerMove === "Paper") {
      result = "You win";
    } else {
      result = "Tie";
    }
  }
  if (result === "You lose") {
    score.losses++;
  } else if (result === "You win") {
    score.wins++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `${playerMove} - ${computerMove}`;
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      let playerMove = generateComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector(".js-auto-play").innerText = "Stop Play";
  } else {
    clearInterval(intervalId);
    document.querySelector(".js-auto-play").innerText = "Auto Play";
  }
}

document.querySelector(".js-rock-btn").addEventListener("click", () => {
  playGame("Rock");
});
document.querySelector(".js-paper-btn").addEventListener("click", () => {
  playGame("Paper");
});
document.querySelector(".js-scissors-btn").addEventListener("click", () => {
  playGame("Scissors");
});
