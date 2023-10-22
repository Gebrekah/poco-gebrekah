// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = false;

const ROWS_COUNT = 10;
const COLS_COUNT = 10;
const BOMBS_COUNT = 10;

var defeat = false;
var victory = false;
var countFlag = 0;

// Cell constructor
function Cell() {
  this.discovered = false;
  this.isBomb = false;
  this.hasBeenFlagged = false;
}

// Initialize cells
var cells = Array(ROWS_COUNT);
for (var row = 0; row < ROWS_COUNT; row++) {
  cells[row] = Array(COLS_COUNT);
  for (var col = 0; col < COLS_COUNT; col++) {
    cells[row][col] = new Cell();
  }
}

//
// TODO: Task 1 - add some bombs at fixed positions.
//cells[0][0].isBomb = true;
//cells[1][7].isBomb = true;
//cells[4][9].isBomb = true;
//cells[8][2].isBomb = true;
//cells[9][2].isBomb = true;
//cells[9][9].isBomb = true;

//
// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.

for (i = 0; i < BOMBS_COUNT; i++) {
  let row = Math.floor(Math.random() * ROWS_COUNT);
  let column = Math.floor(Math.random() * COLS_COUNT);
  if (cells[row][column].isBomb) {
    --i;
    continue;
  }
  cells[row][column].isBomb = true;
}
//                Add a BOMBS_COUNT constant so that you can easily change the amount of bombs placed. Put it next to the
//                other constants.
//

// Once the game has been initialized, we "render" it.
render();

//
// Game functions definitions
//

function discoverCell(row, col) {
  //
  // TODO: Task 5 - Reveal cells when clicked.
  //
  if (
    row < 0 ||
    row >= ROWS_COUNT ||
    col < 0 ||
    col >= COLS_COUNT ||
    cells[row][col].discovered ||
    cells[row][col].hasBeenFlagged
  ) {
    return;
  }
  cells[row][col].discovered = true;

  //
  // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
  //
  adjacentCells = countAdjacentBombs(row, col);

  if (adjacentCells === 0) {
    let iterator = [-1, 0, 1];
    iterator.forEach(function (i) {
      iterator.forEach(function (j) {
        discoverCell(row + i, col + j);
      });
    });
  }
  //
  // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift), set the variable defeat to true.
  //
  if (cells[row][col].isBomb && !cells[row][col].hasBeenFlagged) {
    defeat = true;
  }
}

function flagCell(row, col) {
  //
  // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
  //                When clicking a cell and holding shift, function flagCell() will be called for you.
  //
  if (countFlag !== BOMBS_COUNT - BOMBS_COUNT / 2) {
    if (cells[row][col].hasBeenFlagged !== true) {
      cells[row][col].hasBeenFlagged = true;
    } else {
      cells[row][col].hasBeenFlagged = false;
    }
    countFlag += 1;
  }
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn
function countAdjacentBombs(row, col) {
  //
  // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
  // so that it returns the count of adjacent cells with bombs in them.
  //
  let count = 0;
  let iterator = [-1, 0, 1];
  iterator.forEach(function (i) {
    iterator.forEach(function (j) {
      if (
        row + i < 0 ||
        row + i === ROWS_COUNT ||
        col + j < 0 ||
        col + j === COLS_COUNT
      ) {
        count += 0;
      } else if (cells[row + i][col + j].isBomb) {
        count += 1;
      }
    });
  });

  return count;
}

function getBombsCount() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return BOMBS_COUNT;
}

function getClearedCells() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  var countClearedCells = 0;
  for (var row = 0; row < ROWS_COUNT; row++) {
    for (var col = 0; col < COLS_COUNT; col++) {
      if (cells[row][col].discovered) {
        countClearedCells += 1;
      }
    }
  }
  return countClearedCells;
}

function getTotalCellsToClear() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return COLS_COUNT * ROWS_COUNT - BOMBS_COUNT;
}

function checkForVictory() {
  //
  // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
  //                 bomb), set variable victory to true.
  //
  if (getClearedCells() === COLS_COUNT * ROWS_COUNT - BOMBS_COUNT) {
    victory = true;
  }
  return 0;
}
//
// Rendering functions
//
function getMessage() {
  if (victory == true) {
    return "Well done! 👏🏼<br><br>Refresh the page to start again.";
  } else if (defeat) {
    return "Boom! 💥<br><br>Refresh the page to try again.";
  }
  return `When clicking a cell and holding the Shift key, it can be flagged.
   Flags allow the player to mark cells that they suspect contain a bomb. <br> To remove a flagged cell, click on it while holding the Shift key`;
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
  var playfield = document.getElementById("playfield");
  var html = "";
  for (var row = 0; row < ROWS_COUNT; row++) {
    html += '<div class="row">';
    for (var col = 0; col < COLS_COUNT; col++) {
      var cell = cells[row][col];
      var cellText = "";
      var cssClass = "";
      var textColor = "";
      if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
        cssClass = "discovered";
        if (cell.isBomb) {
          cellText = "💣";
        } else {
          var adjBombs = countAdjacentBombs(row, col);
          if (adjBombs > 0) {
            cellText = adjBombs.toString();
            if (adjBombs == 1) {
              textColor = "blue";
            } else if (adjBombs == 2) {
              textColor = "green";
            } else if (adjBombs == 3) {
              textColor = "red";
            } else if (adjBombs == 4) {
              textColor = "black";
            }
          }
        }
      } else {
        if (cell.hasBeenFlagged) {
          cellText = "🚩";
        }
      }
      html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
    }
    html += "</div>";
  }
  playfield.innerHTML = html;

  // Defeat screen
  var body = document.getElementsByTagName("body")[0];
  if (defeat) {
    body.classList.add("defeat");
  }

  // Victory screen
  if (victory) {
    body.classList.add("victory");
  }

  // Update stats
  document.getElementById("total-flags").innerText = (
    BOMBS_COUNT - BOMBS_COUNT / 2
  ).toString();
  document.getElementById("used-flag-count").innerText = countFlag.toString();
  document.getElementById("bombs-count").innerText = getBombsCount().toString();
  document.getElementById("cleared-cells-count").innerText =
    getClearedCells().toString();
  document.getElementById("total-cells-to-clear").innerText =
    getTotalCellsToClear().toString();

  // Update message
  document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
  if (event.shiftKey) {
    flagCell(row, col);
  } else {
    discoverCell(row, col);
  }
  checkForVictory();
  render();
}
