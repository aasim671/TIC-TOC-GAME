let games = document.querySelectorAll(".game");
let reset = document.querySelector(".ok");
let turnO = true;
let btn = document.querySelector(".text");
let best = document.querySelector("#result");
const won = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enableBox();
  btn.classList.add("hide");
};

const enableBox = () => {
  for (let box of games) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBox = () => {
  for (let box of games) {
    box.disabled = true;
  }
};
games.forEach((game) => {
  game.addEventListener("click", () => {
    if (turnO) {
      game.innerText = "O";
      turnO = false;
    } else {
      game.innerText = "X";
      turnO = true;
    }
    game.disabled = true;
    checkWinner();
  });
});
const showResult = (Winner) => {
  best.innerText = "YOU ARE WINNER";
  btn.classList.remove("hide");
  disableBox();
};
const checkWinner = () => {
  for (let everyElement of won) {
    let firstCase = games[everyElement[0]].innerText;
    let ndCase = games[everyElement[1]].innerText;
    let rdCase = games[everyElement[2]].innerText;

    if (firstCase != "" && ndCase != "" && rdCase != "") {
      if (firstCase === ndCase && ndCase === rdCase) {
        console.log("You are Winner", firstCase);
        showResult(firstCase);
      }
    }
  }
};
two.addEventListener("click", resetGame);
one.addEventListener("click", resetGame);
