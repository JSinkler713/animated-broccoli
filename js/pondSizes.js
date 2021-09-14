/*
 * Rectangular Integer matrix representing a plog of land where the values represent the height above pond level. Zero's correspond to the water. Connected zero's (vertically, horizontally, diagonally) represent a pond. Write a function to compute the corresponding sizes of all ponds.
 * 
 * EX: [
 *     [0, 2, 1, 0],
 *     [0, 1, 0, 1],
 *     [1, 1, 0, 1],
 *     [0, 1, 0, 1]
 *     ]
 *
 * Output: [ 2, 4, 1]
 *
 *  Once we get a zero we want to be able to see if the pond extends
 *  
 *  We want to be able to check left/right up/down diag and see if we have a zero.
 *
 *  If we have a zero, we need to add to that tally of the that particular pondSize.
 *
 *  If we don't have another zero we need to terminate doing recursive calls, but
 *  We should keep track of where we have been, so we don't double count
 *
 * 
 */

const testLand =  [
      [0, 2, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 1],
      [0, 1, 0, 1]
      ]

function pondCount(land) {
  const maxRow = land.length - 1
  const maxCol = land[0].length - 1
  const visitedPlaces = {}
  // of the form {row_col: true}
  function recursionHelper(row, col, thisPond) {
    // base cases
      // out of bounds
    if ( row < 0 || col < 0 || row > maxRow || col > maxCol) {
      return
    }
    // is not a non-zero
    if (land[row][col] !== 0) {
      // don't recurse we will hit it by iterating through the matrix
      return
    } else {
      // it is a water
      // check if in visitedPlaces
      if (!visitedPlaces[row+'_'+col]) {
        visitedPlaces[row+'_'+col] = true
      }
    // recursive call
    recursionHelper(row + 1, col + 1, thisPond)
    recursionHelper(row - 1, col - 1, thisPond)
    recursionHelper(row + 1, col - 1, thisPond)
    recursionHelper(row - 1, col + 1, thisPond)
    recursionHelper(row - 1, col, thisPond)
    recursionHelper(row + 1, col, thisPond)
    recursionHelper(row, col + 1, thisPond)
    recursionHelper(row, col - 1, thisPond)
    }

    // add row col to current pond
    
  }
  recursionHelper(0, 0, {})
  console.log(visitedPlaces)

}

console.log(pondCount(testLand))
