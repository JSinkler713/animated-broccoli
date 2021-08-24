'use strict'
// Graph Traversals of a matrix
//
// All possible paths - Depth First Search
// Shortest Path - Breadth First Search


// Robot Paths
// [ [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
//   ]
//   Count all the paths from the Source to Destination
//   Just count, don't need to save them
//
//   BackTracking: Removing current node from 'visited' after
//   1) adding it to visited
//   2) traversing to unvisited neighbors
//



/*
 * Variables
 * row
 * col
 * visited = {
 *    rrow_ccol: true,
 *    r0_c0: true
 * }
 * 
 * Base Case
 * Out of bounds
 * 
 * Recursive Calls
 * top, left, right, bottom
 * 
 * Complete the 'robotPaths' function below.
 * Find all paths
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 *
 * Time: O(3^mn)
 * Space: (Callstack) O(mn)
 *
 */

function robotPaths(matrix) {
    let result = 0;
    // instead of this could modify the matrix mark an item as 1 if visited
    let visited = {
      //r0_c0: true
    }
    function helperFunction(row, col) {
      if ( row < 0 || col < 0 || row > matrix.length -1 || col > matrix[0].length -1 ) {
        // Out of Bounds
        return;
      }
      if (row === matrix.length - 1 && col === matrix[0].length - 1) {
        // bottom right corner finished
        result += 1;
      }
      // putting after target so that we don't count the ending as visited...
      if (visited['r'+row +'_'+'c'+col]) {
        // it's visited so return and don't call recursive functions
        visited['r'+row +'_'+'c'+col] = true
        return
      }
      // add current place to visited
      visited['r'+row +'_'+'c'+col] = true

      // Recursive Calls
      helperFunction(row - 1, col) //Up
      helperFunction(row, col - 1) //Left
      helperFunction(row + 1, col) //Down
      helperFunction(row, col + 1) //Right
      
      // Backtrack after recursive calls remove from 'visited'
      visited['r'+row +'_'+'c'+col] = false

    }

    // call it initially with 0, 0
    helperFunction(0, 0)
    return result;
}

console.log(robotPaths([[ 0, 0, 0],[ 0, 0, 0]]));
