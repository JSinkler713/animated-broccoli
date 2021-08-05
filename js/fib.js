function nthFibonacci(n) {
  // having the hashtable makes it more efficient, otherwise O(k^n)
  let holder = {};

  function searchFib(index) {
    // if already found don't recursively compute, lookup O(1)
    if (holder[index]) {
      return holder[index];
    }
    // Base Case handles fib numbers 1, 0
    if (index === 1 || index === 0) {
      return index;
    }
    let result = searchFib(index - 1) + searchFib(index - 2);
    // save in the hashtable
    holder[index] = result;
    return holder[index];
  }
  return searchFib(n);
}

let fibby = nthFibonacci(4);
// searchFib(4) calls searchFib(3) [&& searchFib(2) ...]
// searchFib(3) calls searchFib(2) [&& searchFib(1)=1 (base case) ...]
// searchFib(2) calls searchFib(1)=1 (base case) && searchFib(0)=0 (base case)

// so searchFib(2) resolves, which then
// helps searchFib(3) resolve, which then
// helps searchFib(4) resolve with searchFib(3), and the hashtable lookup of searchFib(2)
console.log(fibby); // 5th fib number at position 4, returns 3
