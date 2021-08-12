/*
 * Input String
 * Output is array of combos of the string 
 * (Powerset) P(S)
 * 
 * Rules:
 * - Order does not matter
 * - include the empty string
 * - No duplicate letters
 * 
 * "abc" "" "bcd"
 * 
 * 'abc'-->
 * ['', 'a', 'ab', 'abc', 'ac', 'b' 'bc', 'c']
 *                    ' '
 *         a           b       c
 *     ab    ac      bc  
 *   abc       
 * 
 * Scope Variables:
 * 
 * Base Cases:
 * depth = string length
 * 
 * Recursive Params:
 * depth of 0 initial
 * depth ++ for each recursive call
 * 
 * recursive_call(empty_string+input_string[depth], depth+1)
 * 
*/

function powerset(word) {
  const arrayOfWords = []

  function depthRecurse(str, depth) {
    // BASE Case we've either added or not added each character
    if (depth === word.length) {
      arrayOfWords.push(str)
      return
    }
    // Recursive cases increase depth
    // add the next input[i]
    depthRecurse(str+ word[depth], depth + 1)
    // or don't add the input[i], skip it
    depthRecurse(str, depth + 1)
  }
  // start with empty string, build up, and increase depth
  depthRecurse('', 0)
  return arrayOfWords
}

console.log(powerset('abc')) //expect ['', 'a', 'ab', 'abc', 'b', 'bc', 'c']
console.log(powerset('abcd')) //expect ['', 'a', 'ab', 'abc', 'b', 'bc', 'c']
