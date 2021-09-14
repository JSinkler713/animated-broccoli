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
  const pondSizes = []
  // of the form {row_col: true}
  function recursionHelper(row, col) {
    // base case
    // out of bounds or not 0 or visited
    if ( row < 0 || col < 0 || row > maxRow || col > maxCol || land[row][col] !== 0 || visitedPlaces[row+'_'+col] == true) {
      return
    }
    console.log('in recursion helper', row, col)
    
    let pondSize = 1; // we have a 0
    // mark as seen
    visitedPlaces[row+'_'+col] = true
    // recursive calls
    pondSize += recursionHelper(row + 1, col + 1)
    pondSize += recursionHelper(row - 1, col - 1)
    pondSize += recursionHelper(row + 1, col - 1)
    pondSize += recursionHelper(row - 1, col + 1)
    pondSize += recursionHelper(row - 1, col)
    pondSize += recursionHelper(row + 1, col)
    pondSize += recursionHelper(row, col + 1)
    pondSize += recursionHelper(row, col - 1)

    return pondSize
  }
  // call for each element, since we are keeping track of visited it shouldn't get too large
  for (let i=0; i<= maxRow; i++) {
    for (let j=0; j<= maxCol; j++) {
      console.log('i and j', i, j)
      let pondSize = recursionHelper(i, j)
      pondSizes.push(pondSize)
    }
  }
  console.log(visitedPlaces)
  return pondSizes

}

console.log(pondCount(testLand))
