/*
 * Complete the 'postDFS' function below.
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

function postOrderDFS(root) {
    // Write your code here
    let returnedArray = []
    
    function helperFunction(current) {
      // base case
      if (!current) {
        return
      }
      // recursive call
      helperFunction(current.left)
      // recursive call
      helperFunction(current.right)
      // at the end Post
      returnedArray.push(current.value)
    }
    helperFunction(root)
    return returnedArray
}

console.log(postOrderDFS(testTree))
// generate tree from array
