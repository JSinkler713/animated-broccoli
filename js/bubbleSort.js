function bubbleSort(arr) {
  let swapOccured = true // assume a swap is needed
  let numOfElementsSorted = 0; // we won't need to swap el's at end that are already sorted
  let count = 0
  while (swapOccured) {
    // set to false at beginning of each loop
    swapOccured = false
    for (let i=0; i< arr.length - (1+numOfElementsSorted); i++) {
      // check how many iterations
      count++
      // check adjacent indices and if arr[i] < arr[i+1] swap
      if (arr[i] > arr[i+1]) {
        // a swap occured
        swapOccured = true
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }
    // got through an iteration don't check last el
    numOfElementsSorted++
  }
  // repeat for next indices
  return [arr, count]
}

// test
console.log(bubbleSort([5, 1, 8, 4, 3])) //
console.log(bubbleSort([1, 2, 3, 4, 5])) // only 4 iterations if sorted BEST Omega(n)
console.log(bubbleSort([5, 4, 3, 2, 1])) // 10 operations 4 + 3 + 2 + 1 = O(n(1/2n)) = O(n^2)
console.log(bubbleSort([6, 5, 4, 3, 2, 1])) // O(n/2 ^ 2)
console.log(bubbleSort([7, 6, 5, 4, 3, 2, 1])) // 10 operations 4 + 3 + 2 + 1 = O(2n)
