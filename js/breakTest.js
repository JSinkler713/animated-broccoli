function findLargIn(arr) {
  index = 0;
  largestValue = arr[0]
  for (let i=0; i< arr.length; ++i) {
    if (arr[i] > largestValue) {
      index = i
      break
    }
  }
  return index

}

let testArr = [0, 4, 2, 3]
console.log(findLargIn(testArr))
