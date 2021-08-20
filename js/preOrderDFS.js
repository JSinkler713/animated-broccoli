
/*
 * Complete the 'preDFS' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts TreeNode root as parameter.
 */
const testTree = {
  value: 1,
  left: {
    value: 3,
    left: {
      value:4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 2,
    left: null,
    right: null,
  }
}

function preOrderDFS(root) {
    // Write your code here
    let returnedArray = []
    
    function helperFunction(current) {
      // base case
      if (!current) {
        return
      }
      // at the beginning
      returnedArray.push(current.value)
      // recursive call
      helperFunction(current.left)
      // recursive call
      helperFunction(current.right)
    }
    helperFunction(root)
    return returnedArray
}

console.log(preOrderDFS(testTree))
