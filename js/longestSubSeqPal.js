/*
Input:  "vtvvv"
Output: 4

Longest palindromic subsequence here is "vvvv"

Input:  "ttbtctcbt"
Output: 7

Longest palindromic subsequence here is "tbtctbt"'

EX: SMALLEST => UP
"vtvvv"

pal(v) = v; max 1
 pal(vt) = not pal 
 pal(vtv) = vtv; max 3
  pal(vtvv) = not pal
  pal(vtvvv) = not pal
                      string
                  /           \
            'use it'         'do not use it'
                v                   ''
              /   \               /    \
            vt    'v'            't'      ' ' 
vt vtv vtv vtv   

pal(vvvv)

Algorithm
BASE CASE:
 1 character, => 1
 if substring is palidrome,
 return length

RECURSIVE CASES:

Check Palindrome function:
This === reverse

*/

const findPalindrome = str => {
  let maxCount = 1;
  let cache = {}
  // helper function
  let count = 0
  function recursePalindrome(subString, index) {
    count++
   if (cache[subString]) {
     return
     } else {
        cache[subString] = true
     }
    // if the string is a palidrome
    let reversedString = subString.split('').reverse().join('')
    //console.log('**********')
    console.log(reversedString, reversedString.length)
    //console.log('**********')

    if (subString === subString.split('').reverse().join('')) {
      //console.log('I am a palindrome')
      
      if (subString.length > maxCount) {
        maxCount = subString.length
      }
    }
     // Base CASE
    console.log(subString)
    if (index === str.length ) {
      console.log('returned')
      return
    }
    // recursive CASES
    recursePalindrome(subString + '', index + 1)
    recursePalindrome(subString + str[index], index + 1)
  }
  // initial call
  recursePalindrome('', 0)
  console.log('THE COUNT :', count)
  return maxCount
}

findPalindrome('vtvvv')
findPalindrome("ttbtctcbt")
findPalindrome("ttbtctasdfethyuicbt")
