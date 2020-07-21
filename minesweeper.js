document.addEventListener('DOMContentLoaded', startGame)

//Board is an object literal. It contains a single array of 'cells'. (array identifier - [] )
//Within the array, we have sub-objects definining the physical position of the nine board boxes. (object identifier - {} )
//Within the array, we have booleans, declaring is that board box has a mine and if the box is hidden. (true/false)


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
/* PROBLEM SOLVING NOTES:

1- Is surroundingMines last in the for loop call instruction because it is further down the body of the code? Initially I would not thought to have done this, as surroundingMines is a seperate function, and board, cells is it's own var of objects. I assumed that it would not connect....ah, is it because Board is a global variable?

2 - If I didn't have let' after 'for' in startGame function, would it still work? Not far through this challenge yet to test.... I think.

3 - "The new property should be called surroundingMines" - Do we add this property into the cells arrays manually as I have done with hidden:true, for example?

*/


function startGame () {
  for (let i = 0; i < board.cells.length; i++) 
  {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
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
}

