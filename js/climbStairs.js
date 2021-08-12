
// fox can jump 1, 2, or 3 stairs at a time. How many possible ways can he get to step n?
// Top Down approach, decrease n call recursively until at step 0, 1, or 2

function climbStairs(n) {

  function helperClimb(n) {
    // BASE CASES
    if (n === 0) {
      //1 way they could be at step 0, no steps taken yet
      return 1
    }
    if (n === 1) {
      //1 way they could be at step 1, 1 steps taken
      return 1
    }
    if (n === 2) {
      //2 ways they could be at step 2, 1 and 1, or 2 steps taken
      return 2
    }
    else {
      // 3 recursive calls! expensive if they get called more than once
      let sum = helperClimb(n-1) + helperClimb(n-2) + helperClimb(n-3)
      return sum
    }
  }
  return helperClimb(n)
}

console.log(climbStairs(6)) // 24 ways
console.log(climbStairs(30)) // 24 ways
// O(3^n)

function climbStairsWithCache(n) {
  const holder = {}
  function helperClimb(n) {
    // BASE CASES
    if (n === 0 || n === 1) {
      //1 way they could be at step 0, no steps taken yet
      //1 way they could be at step 1, 1 steps taken
      return 1
    }
    if (n === 2) {
      //2 ways they could be at step 2, 1 and 1, or 2 steps taken
      return 2
    }
    // CHECK CACHE
    if (holder[n]){
      return holder[n]
    } else {
      //only do expensive call id not in cache
      let sum =  helperClimb(n-1) + helperClimb(n-2) +helperClimb(n-3)
      // put it in cache for next time
      holder[n] = sum
      return holder[n]
    }
  }
  return helperClimb(n)
}

console.log(climbStairsWithCache(300)) // O(3n) doable quickly
// climbStairs(300) // never finishes not doable with O(3^n)
