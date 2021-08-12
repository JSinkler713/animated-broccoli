function noConsecutiveOnes(n) {
  const results = []

  function recurse(str, depth) {
    if (depth == n) {
        //if str not in results:
        results.push(str)
    }
    // had to make to check previous was 'out of depth' str[-1]
    if (str == ''){
        recurse(str + '1', depth + 1)
        recurse(str + '0', depth + 1)
    } else if (depth < n) {
        // recursive cases
        // is the last char a 1 ?
        if (str[str.length - 1] == '1') {
            // if so you must add '0' for valid result
            recurse(str + '0', depth + 1)
        } else {
            // if it was a '0' you could add '0' or '1'
            recurse(str + '1', depth + 1)
            recurse(str + '0', depth + 1)
        }
    }
  }
  
  recurse('', 0)
  return results
}

console.log(noConsecutiveOnes(3)) // [ '101', '100', '010', '001', '000'] 
console.log(noConsecutiveOnes(4)) /*
                                   * [
                                   *   '1010', '1001',
                                   *   '1000', '0101',
                                   *   '0100', '0010',
                                   *   '0001', '0000'
                                   * ]
*/
