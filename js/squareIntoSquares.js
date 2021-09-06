/*
 * My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in pieces which, when assembled, give squares the sides of which form an increasing sequence of numbers. At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper. So we decided to write a program that could help us and protects trees.
 * 
 * Task
 * Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².
 * 
 * If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:
 * 
 * Examples
 * decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.
 * 
 * For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.
 * 
 * Note
 * Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null, Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).
 * 
 * Hint
 * Very often xk will be n-1.
 * 
 * 
 * Input: integer
 * Output: array[integers]
 * 
 * EX: 11
 * 11^2 = 121
 * 
 * 121 = 10^2 + 4^2 + 2^2 + 1^2
 * Output = [1, 2, 4, 10]
 * 
*/

const decompose = (num)=> {
  let squarednum = Math.pow(num, 2)
  let possibilities = [] // array of arrays

  function helpdecompose(runningnum, nextlowestval) {
    // base case:
    // num is zero
    if (runningnum === 0) {
      return
    }

    let smallersquare = nextlowestval ** 2
    while (runningnum - smallersquare < 0) {
       //reduce smallersquare
        nextlowestval --
        smallersquare = nextlowestval ** 2
    }
    // ok runningnum - smallersquare >= 0
    runningnum = runningnum - smallersquare
    possibilities.push(nextlowestval)
    // recursive call
    // runningnum is updated, and nextlowestval is updated
    helpdecompose(runningnum, nextlowestval)
  }
  helpdecompose(squarednum, num-1)
  possibilities = possibilities.reverse()
  console.log(possibilities)
  
}
console.log(decompose(11))
console.log(decompose(50))
