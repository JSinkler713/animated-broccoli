/*
*
* 2 sorted arrays. Find the median of the 2 arrays if they were sorted together.
*
* Merge together
*
  [1,2,3,4][1,2,3,4,5] -> [1,1,2,2,3,3,4,4,5] OUTPUT: 3
*
* Input:  	[1, 12, 13, 26, 38], [2, 15, 17, 30, 45]
* Output:	16
* (because the median of [1, 2, 12, 13, 15, 17, 26, 30, 38, 45] equals 16 , (15 + 17) / 2 )
*
*
* DIAGRAM [1, 2, 3] [4, 5, 9] => [1, 2, 3, 4, 5, 9]
* DIAGRAM [1, 12, 13, 26, 38] [2, 15, 17, 30, 45] => 
*          ^         >         ^
*        Sorted =  [1, ]
  DIAGRAM [1, 12, 13, 26, 38] [2, 15, 17, 30, 45] => 
*              ^         <     ^  
* Sorted =  [1, 2, ]
*
*
* Space Complexity(1)
* Instead of a new array, keep track of how many indices have been
*/
function sortedMedian(arr1, arr2) {
  // left, right index
  let i=0
  let j=0
  let iIncremented = 0
  let jIncremented = 0
  let median

  // so when i and j add up to half the length ofwhat the combined array would be, that's our median
  while (i+j < ((arr1.length + arr2.length) / 2) - 2 ) {
    if (arr1[i] < arr2[j]) {
      i++
      // check for two in a row maybe last two el's were both from left
      if (!iIncremented) {
        iIncremented = 1
        jIncremented = 0 
      } else {
        iIncremented = 2
      }
    } else {
      j++
      if (!jIncremented) {
        jIncremented = 1 
        iIncremented = 0
      } else {
        jIncremented = 2
      }
      // check for two in a row
    }
  }
  // if even
  if ((arr1.length + arr2.length) % 2 === 0 ) {

    console.log('left ', arr1[i], 'right ', arr2[j])
    console.log('count ', i+j+2)
    // check if two in a row from one side
    if (iIncremented > 1) {
      median = (arr1[i] + arr1[i-1]) / 2
    } else if (jIncremented > 1) {
      console.log('right should be 2')
      median = (arr1[j] + arr1[j-1]) / 2
    }else {
      // neither had two in a row
      median = (arr1[i] + arr2[j]) / 2
    }
    
  }
  else {
    console.log('last else')
    if (iIncremented > 0) {
      console.log('it was odd and the last index was left')
      median = arr1[i]
    } else {
      console.log('it was odd and the last index was right')
      median = arr2[j]
    }
  }

  return median;
}

console.log(sortedMedian([11,12,13],[1,2,3,4])); // 4
console.log(sortedMedian([1, 12, 13, 26, 38], [2, 15, 17, 30, 45]));
