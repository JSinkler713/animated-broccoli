/*
 *  Problem:  Robot Paths
 *
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of Integers (matrix)
 *  Output:   Integer
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
*/

// TEST CASES
const matrixThirtyEight = [[0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]]
const matrixFour = [[0,0,0],
              [0,0,0]]
 
const robotPaths = (matrix) => {
  let MaxRow = matrix.length - 1
  let MaxColumn = matrix[0].length - 1
  let count = 0
  // console.log(MaxRow, MaxColumn)

  function recurseHelper(leftCoord, rightCoord) {
    // BASE CASES
    // out of bounds
    if (leftCoord > MaxRow || rightCoord > MaxColumn || leftCoord < 0 || rightCoord < 0) {
      return
    }
    // already visited
    if (matrix[leftCoord][rightCoord] === 1) {
      // already been visited
      return
    }
    // at bottom right coordinate
    if (leftCoord === MaxRow && rightCoord === MaxColumn) {
      // at bottom right
      count++
      return
    }
    
    // change value to 1, so we know it was visited
    matrix[leftCoord][rightCoord] = 1
    // RECURSIVE CASES
      // top, left, right, down
    recurseHelper(leftCoord - 1, rightCoord)
    recurseHelper(leftCoord + 1, rightCoord)
    recurseHelper(leftCoord, rightCoord + 1)
    recurseHelper(leftCoord, rightCoord - 1)

    // change value back to 0 after recursive call
    matrix[leftCoord][rightCoord] = 0
  }

  // start at top left
  recurseHelper(0, 0)
  return count
}


console.log(robotPaths(matrixThirtyEight))
console.log(robotPaths(matrixFour))
