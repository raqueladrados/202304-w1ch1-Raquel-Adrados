let player1 = "Red";
let player2 = "Yellow";
let currentPlayer = player1;
let p1VerticalCount = [
  {
    column: 1,
    consecutivePieces: 0,
  },
  {
    column: 2,
    consecutivePieces: 0,
  },
  {
    column: 3,
    consecutivePieces: 0,
  },
  {
    column: 4,
    consecutivePieces: 0,
  },
  {
    column: 5,
    consecutivePieces: 0,
  },
  {
    column: 6,
    consecutivePieces: 0,
  },
  {
    column: 7,
    consecutivePieces: 0,
  },
];
let p2VerticalCount = [
  {
    column: 1,
    consecutivePieces: 0,
  },
  {
    column: 2,
    consecutivePieces: 0,
  },
  {
    column: 3,
    consecutivePieces: 0,
  },
  {
    column: 4,
    consecutivePieces: 0,
  },
  {
    column: 5,
    consecutivePieces: 0,
  },
  {
    column: 6,
    consecutivePieces: 0,
  },
  {
    column: 7,
    consecutivePieces: 0,
  },
];

const setPiece = (event) => {
  let columnSelected = event.target.className.charAt(1); //50
  console.log(columnSelected);

  for (row = 1; row <= 6; row++) {
    let currentRow = document.querySelector(`.c${columnSelected}${row}`);

    if (
      currentRow.style.backgroundColor === "white" &&
      currentPlayer === player1
    ) {
      currentRow.style.backgroundColor = "red";
      p2VerticalCount[columnSelected - 1].consecutivePieces = 0;
      p1VerticalCount[columnSelected - 1].consecutivePieces++;
      document.querySelector(`.currentPlayer`).style.backgroundColor = "yellow";
      return (currentPlayer = player2);
    }

    if (
      currentRow.style.backgroundColor === "white" &&
      currentPlayer === player2
    ) {
      currentRow.style.backgroundColor = "yellow";
      p1VerticalCount[columnSelected - 1].consecutivePieces = 0;
      p2VerticalCount[columnSelected - 1].consecutivePieces++;
      document.querySelector(`.currentPlayer`).style.backgroundColor = "red";
      return (currentPlayer = player1);
    }
  }
};

const startGame = () => {
  console.log("Juego iniciado");
  for (index = 1; index <= 7; index++) {
    let column = document.querySelector(`.c${index}`);
    column.addEventListener("click", () => {
      setPiece(event);
      console.log("checking");
      checkWinner();
    });
  }
};

const checkWinner = () => {
  for (index = 0; index < p1VerticalCount.length; index++) {
    if (p1VerticalCount[index].consecutivePieces === 4) {
      console.log("El jugador 1 ha ganado!");
    }
  }

  for (index = 0; index < p2VerticalCount.length; index++) {
    if (p2VerticalCount[index].consecutivePieces === 4) {
      console.log("El jugador 2 ha ganado!");
    }
  }
};

let startButton = document.querySelector(".start");
startButton.addEventListener("click", startGame);

const restartGame = () => {
  location.reload();
};

let restartButton = document.querySelector(".reload");
restartButton.addEventListener("click", restartGame);
