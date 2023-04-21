let player1 = "Red";
let player2 = "Yellow";
let currentPlayer = player1;
let verticalCount = 0;

const setPiece = (event) => {
  console.log(event);
  let columnSelected = event.target.className.charAt(1); //50
  console.log(columnSelected);

  for (row = 1; row <= 6; row++) {
    let currentRow = document.querySelector(`.c${columnSelected}${row}`);
    console.log(document.querySelector(`.c${columnSelected}${row}`));
    verticalCount++;

    if (
      currentRow.style.backgroundColor === "white" &&
      currentPlayer === player1
    ) {
      currentRow.style.backgroundColor = "red";
      verticalCount = 0;
      document.querySelector(`.currentPlayer`).style.backgroundColor = "yellow";
      return (currentPlayer = player2);
    }

    if (
      currentRow.style.backgroundColor === "white" &&
      currentPlayer === player2
    ) {
      currentRow.style.backgroundColor = "yellow";
      verticalCount = 0;
      document.querySelector(`.currentPlayer`).style.backgroundColor = "red";
      return (currentPlayer = player1);
    }

    checkWinner();
  }
};

const startGame = () => {
  for (index = 1; index <= 7; index++) {
    let column = document.querySelector(`.c${index}`);
    column.addEventListener("click", setPiece);
  }
};

const restartGame = () => {
  for (index = 1; index <= 7; index++) {
    let column = document.querySelector(`.c${index}`);
    column.addEventListener("click", startGame);
  }
};

let restartButton = document.querySelector(".buttonContent");

let startButton = document.querySelector(".buttonContent");
startButton.addEventListener("click", startGame);
