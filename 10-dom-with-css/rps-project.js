let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
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
