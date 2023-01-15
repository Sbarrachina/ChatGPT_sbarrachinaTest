var currentPlayer = "x";

for (var i = 1; i <= 9; i++) {
  var cell = document.getElementById("cell-" + i);
  cell.addEventListener("click", function() {
    if (this.innerHTML === "") {
      this.innerHTML = currentPlayer;
      this.classList.add(currentPlayer);
      checkForWinner();
      switchPlayer();
    }
  });
}

function switchPlayer() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}

function checkForWinner() {
  var cells = document.getElementsByTagName("td");
  if (cells[0].innerHTML === currentPlayer && cells[1].innerHTML === currentPlayer && cells[2].innerHTML === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
  } else if (cells[3].innerHTML === currentPlayer && cells[4].innerHTML === currentPlayer && cells[5].innerHTML === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
  } else if (cells[6].innerHTML === currentPlayer && cells[7].innerHTML === currentPlayer && cells[8].innerHTML === currentPlayer) {
    alert("Player " + currentPlayer + " wins!");
  }
}