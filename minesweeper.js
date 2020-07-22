document.addEventListener('DOMContentLoaded', startGame)

//Board is an object literal. It contains a single array of 'cells'. (array identifier - [] )

//Within the array, we have sub-objects with four properties and values, which define the physical position of the nine board positions (cells), tells us if a cell holds a mine, and if the cell is hidden. (object identifier - {} )


var board = {
  cells: [
    {row: 0, col: 0, 
      isMine: true,
      hidden: true,
    },

    {row: 0, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 0, col: 2, 
      isMine: false,
      hidden: true,
    }, 

    {row: 1, col: 0, 
      isMine: false,
      hidden: true,
    },

    {row: 1, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 1, col: 2, 
      isMine: true,
      hidden: true,
    },

    {row: 2, col: 0, 
      isMine: false,
      hidden: true,
    },

    {row: 2, col: 1, 
      isMine: false,
      hidden: true,
    }, 

    {row: 2, col: 2, 
      isMine: true,
      hidden: true,
    }, 

  ]

}

// startGame iterates loop by one until no longer true.
// ...Creates surroundingMines var, assigns result of loop to countSurroundingMines function.
// ...assigns EventListeners to left and right mouse click, and calls checkForWin function each time EventListener is triggered.

function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
   document.addEventListener("click", checkForWin);
   document.addEventListener("contextmenu", checkForWin);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
  }
}
  return count;
}

