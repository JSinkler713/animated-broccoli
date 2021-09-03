/*
 * Input: n (Integer)
 * Output: [Str] (Array of Strings)
 * 
 * Input: 2
 * Output: ["00", "01", "10"]
 * 
 * Input: 3
 * Output: ["000", "001", "010", "100", "101"]
 *
 * All possible values
 *              position 1
 *      choose 0   /     \  choose 1
 *          "0"             "1"
 *      /     \               /  \
 *    "00"     "01"         "10"     "11" BASE CASE TERMINATE
 *  /   \       /  \        / \         
 *"000" "001' "010" Base  "100" "101"
 *
 * Algorithm
 * 2 choices, 0 or 1, 
 * if previously a 1 terminate, or don't do another 1
 * 
 * Base Cases:
 * If consequtive 1's terminate
 * If we get to length of input, stop
 *
 * Recursive case:
 * (as long as we are not at end of length)
 * Call with another "0"
 * (as long as previous wasn't a 1)
 * Call with another "1"
 *
*/

function nonConsecOnes(num) {
  let possibilities = []

  function helperRecurse(str) {
    // BASE CASES
    if (str.length === num) {
      possibilities.push(str)
      return
    }
    // can always add a 0
    helperRecurse(str+ '0')
    // check if previous was 1 so no '11' is called
    if (str[str.length-1] !== '1') {
      helperRecurse(str+ '1')
    }
  }
  helperRecurse('')
  return possibilities
}

console.log(nonConsecOnes(3))
console.log(nonConsecOnes(4))
