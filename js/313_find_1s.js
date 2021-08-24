/*
 *
 *Given a matrix with N rows and M columns where elements in the matrix can be either 1 or 0 and each row and column are sorted in ascending order, find the number of 1s.
 *
 *
 * Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all 1’s in the matrix
 *
 * Input:
 * [[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 1, 1, 1]]

Output: 9
Time Complexity: O(N + M)
Auxiliary Space Complexity: O(1)

 * Since they are in ascending order, you should check until you find a 1, then you know the rest are 1's
 *
 */
const testMatrix = [
  [0, 0, 0, 1],		
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]
const testMatrixTwo = [
  [0, 0, 0, 1],		
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]
function findCountOfOnesInefficient(matrix) {
  let count = 0
  let operations = 0
  // inefficient O(n*m)
  for (let i=0; i< matrix.length; i++) {
    for (let j=0; j< matrix[0].length; j++) {
      operations++
      if (matrix[i][j] === 1) {
        count++
      }
    }
  }

  return [count, `operations,  ${operations}`]


}

function findCountOfOnesDiagonal(matrix) {
  // Time Complexity: O(row+col)
  let count = 0
  let operations = 0
  let col = matrix[0].length - 1; // start all the way right
  let row = 0; // start top row
  // stop loop if all the way left
  while(row < matrix.length) {
    operations++
    while (matrix[row][col] === 1) {
      operations++
      count += matrix.length - row   // all the 1's below since in order
      // now move left
      col --
    } 
    // breaks out when matrix[row][col] !== 1
    // move down a row same col
    row++
  }
  return [count, `operations,  ${operations}`]
}

// Tests
console.log(findCountOfOnesInefficient(testMatrix)) // 9
console.log(findCountOfOnesDiagonal(testMatrix)) // 9
console.log(findCountOfOnesInefficient(testMatrixTwo)) // 15
console.log(findCountOfOnesDiagonal(testMatrixTwo)) // 15
