/*

Given a maze, represented by a matrix of bits (values 0 and 1), a rat must find a path from index [0][0] to [n-1][m-1]. The rat can only travel to the right or down, and can only travel on 0 values. 1 values represent walls.

Input:   maze (Matrix of elements with values either 0 or 1)
Output:  Array of two-item arrays indicating the path.


EX:
Input:   [[0, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 1, 0, 0],
          [0, 0, 1, 0]]

Output:  [[0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [2, 3],
          [3, 3]]
*/
//Understanding
//constrains
// Time O(m*n)
//Space O(m*n)

//diagram
/*            j
         i [[0, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 1, 0, 0],
          [0, 0, 1, 0]]

          (0,0)
          /     \
        (1,0)   (0,1)
        /

        



  //Psuedo
  //BASE CASES
// if matrix[i, j] == 1
  // i > num of rows, j > num of cols

  // Get to bottom right hand corner successful
  //



  //Code
*/


function ratRace(matrix) {
  let tempResult = []
  let realResult

  function helper(row, col) {
    // Base cases
    if (row > matrix.length -1 || col > matrix.length -1 || matrix[row][col] === 1) {
      // out of bounds or on a 1, not a valid path
      return
    }
    // else matrix[row][col] is 0 and in bounds
    tempResult.push([row, col])
    if (row === matrix.length - 1 && col === matrix[0].length -1) {
      // at the end, and it was a 0, we have full path
      // make a copy since we need to constantly pop off at the end of function
      realResult = tempResult.slice()
      return
    }
    // Recursive cases keep going not at end
    helper(row+1, col) // move down
    helper(row, col+1) // move right
    // pop off last element of tempResult because we didn't get to end tempResult
    tempResult.pop()
  }
  helper(0, 0)
  return realResult ? realResult : [[-1, -1]]
}

const maze = [[0, 0, 0, 1],
	    [0, 1, 0, 1],
	    [0, 1, 0, 0],
	    [0, 0, 1, 0]]
console.log(ratRace(maze))






