/*
Palindrome ‘aba’, ‘racecar’, 
Input: ‘’, false for empty or null
 For loop, two pointers, index = 0,  pointerTwo = string.length -1 
Turn this into an array, reverse(), back into string.
*
*/

function checkPal(str) {
	// edge case forgot to wrap in quotes 'string'
  if (typeof str !== 'string') { return false }
  if (!str) { return false }
	let secondPointer = str.length - 1 // ‘abba’, secondPointer = 3
	for (let i=0; i< (str.length / 2) ; i++) {
		if (str[i] !== str[secondPointer]) {
    return false
  }
// decrement secondPointer, it will decrease to 0
  secondPointer--
  }
  return true
}

console.log(checkPal('notapal'))
console.log(checkPal('racecar'))

/*
 EX: ‘aabc’,  ‘hellho klsjd’, ‘okok’
Guaranteed non empty string
Const letterFreq = { ‘h’: 1, ‘l’:3, }
Variable TopLetter = ‘h’
Variable maxFrequency
*
*  return all the ties
*  return all chars that have a max [‘h’, ‘l’]
*
*/
function mostFrequent(str) {
  const letterFreq = {}
  let topLetter = ''
  let maxFrequency = 0
  const arrayOfTopLetters = []

  // loop through string
  for (let i=0; i< str.length; i++) {
	// want to create my letterFreq table
    if (!letterFreq[str[i]]) {
      letterFreq[str[i]] = 1
    } else {
    // it’s in the letterFreq table
    letterFreq[str[i]] += 1
    }
    // tie?
    if (letterFreq[str[i]] > maxFrequency ) {
        maxFrequency = letterFreq[str[i]]
        topLetter = str[i]
    }
  }
    // for loop is done,  letterFreq = {complete}, maxFrequency = value
  Object.keys(letterFreq).forEach(key=> {
    if ( letterFreq[key] === maxFrequency) {
      // add it to array of maxes
      arrayOfTopLetters.push(key)
    }
  })
  // could have made greater than 1
  if (arrayOfTopLetters.length > 1) {
    // forgot an s arrayOfTopLetter(s)
    return arrayOfTopLetters
  }

  return topLetter
}
console.log(mostFrequent('aaabbhhhhbb'))
console.log(mostFrequent('aabbbbc'))
