/*
 * Example s= 'AABAAB'
 * 
 * Remove an A at positions 1 and 4 to make s='AbAB' in 2 deletions.
 * 
 * Function Description
 * 
 * Complete the alternatingCharacters function in the editor below.
 * 
 * alternatingCharacters has the following parameter(s):
 * 
 * string s: a string
 * Returns int: the minimum number of deletions required
 *
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 * If a char repeats, add to deletion count
 * If it doesn't update the current character
 *
 */

function alternatingCharacters(s) {
    // Write your code here
    // loop through, they need to alternate, if not delete one
    let currentChar = s[0]
    let deletions = 0
    for (let i=1; i< s.length; i++) {
        if (s[i] !== currentChar) {
            // great as we want, 
            // update currentChar
            currentChar = s[i]
            // no deletion
        } else {
            // same char, update deletion, don't update currentChar
            deletions++
        }
    }
    return deletions
}

const testString = 'AAABBB' // 4 deletions neccesary
console.log(alternatingCharacters(testString))
