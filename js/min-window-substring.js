// Given a string, and a target string, return the smallest substring that contains the target elements

// EX: stringInput: ADOBECODEBANC targetString: 'ABC'

// 'ADOBEC' is a  substring that contains 'ABC'

// result = [0, 5] // best substring currently
// we will move our i character by 1, if we move off an important character, update j till we get it again






/*
 * Complete the 'minimumWindowSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING fullString
 *  2. STRING chars
 * 
 * EX: stringInput: ADOBECODEBANC targetString: 'ABC'

 'ADOBEC' is a  substring that contains 'ABC'

result = [0, 5] // best substring currently

PsuedoCode
we will move our i character by 1, if we move off an important character, update our table 
{ 'A': 0, 'B': 1, 'C': 0}update j till we get it again

 */

function minimumWindowSubstring(fullString, chars) {
    // Write your code here
    let i=0;
    let j=1;
    let holder = {}
    let bestSolution = [0, fullString + 5]
    // this will make so
    //we don't need to loop through table each time
    let countOfMissingChars = chars.length 

    // create the holder for the key values
    // chars = 'AABC'
    for (let i=0; i< chars.length; i++) {
      if (!holder[chars[i]) {
        holder[chars[i]] = 1
        //holder['A'] = 1

      } else {
        holder[chars[i]] += 1
      }
    }
    /*
      holder = {
        'A': 2,(first index), (second index)
        'B': 1,(first index)
        'C': 1
      }
    */

    let shortestSubString ="";
    // let currentSubStr="";
    while (i < fullString.length) {
      
      if (holder[fullString[i]]) {
        holder[chars[i]] -= 1
        // if previous was an important character
        // add it back to the holder
        if (i >= 1 && holder[fullString[i-1]] ) {
          holder[fullString[i-1]] += 1
        }
      }
      // moving our second pointer j forwards

      // move until all of the object values are 0 or less

      let allAreZero = false
      // have to check object here
      while (!allAreZero) {

        j++
      }

      i++
    }
}


// BRUTE FORCE

function minWinSubBrute(strInput, targString) {
  // make holder
  let holder = {}
  for (let i=0; i< targString.length; i++) {
    if (!holder[chars[i]) {
      holder[chars[i]] = 1
    } else {
      holder[chars[i]] += 1
    }
  }

  let shortestSubString = targString.length + 5 // something too long
  for (let i=0; i< strInput.length; i++) {
    let holderCopy = {...holder}
    if (i > 0 && holder[targString[i]] === 0) {
      // add it back
      holderCopy[targString[i-1]] += 1
    }
    /* just use a new copy of holder each time
    if (holder[targString[i]] && holder[targString[i]] > 0) {
      holder[chars[i]] -= 1
    }
    */
    for (let j=0; j< strInput.length; j++) {

    }
  }



}
