/*
* Intersection of two linked lists
* find the intersection if it exists of two linked lists
* return null if they don't intersect
*/


// Intersecting
// 2 - 3 - 7 \ 
//            4 - 5 - 3
//    9 - 10 /
//
// Not intersecting
// 2 - 3 - 7
//
// 9 - 10


// Things I might want
// auxiliarry structure
// { location: true }

// O(1) Constant Space Complexity
// Two pointers
// O(n^2)
// For each node in one linked list, loop through the other linked list, check if there is a collision

// O(1) - Space O(n) time
// 2 - 3
// 
// 1 - 2 

let testLink1 = {
  data:2,
  next: {
    data: 5,
    next: {
      data: 5,
      next: {
        data: 4,
        next: null
      },
    }
  }
}

let testLink2 = {
  data:3,
  next: {
    data: 5,
    next: {
      data: 4,
      next: null
    }
  }
}

let sharedPart = {
  data: 4,
  next: {
    data: 5,
    next: null
  }
}

let firstShared = {
  data:3,
  next: sharedPart
}
let secondShared = {
  data: 8,
  next: {
    data: 13,
    next: sharedPart
  }
}

function intersectingLists(node1, node2) {
  let first = node1
  let countOfFirst = 0

  let second = node2
  let countOfSecond = 0
  // get length of list with node1
  while (first !== null) {
    countOfFirst ++
    first = first.next
  }
  // get length of list with node2
  while (second !== null) {
    countOfSecond ++
    second = second.next
  }
  // console.log('Length of first ', countOfFirst)
  // console.log('Length of second ', countOfSecond)

  // ignore the first m - n nodes of the longer list, where
  if ( countOfFirst > countOfSecond) {
    var diff = countOfFirst - countOfSecond
    var countOfFirstBigger = true
  } else {
    var diff = countOfSecond - countOfFirst
    var countOfFirstBigger = false
  }
 
  // m = length of long list
  // n = length of small list
  first = node1
  second = node2
  if (countOfFirstBigger) {
    while (diff > 0) {
      first = first.next
      // console.log('first is bigger')
      diff--
    }
  } else {
    while (diff > 0) {
      second = second.next
      diff--
    }
  }

  // ok so we have two lists now of the same length,
  // increment along and check if the first === second, if they do then return that node

  while (first !== null) {
    if (first === second) {
      return first
    }
    // console.log('in the last while loop')
    first = first.next
    second = second.next
  }
  // if we go all the way through no similarities then return null
  return null
}

intersectingLists(testLink1, testLink2) // good
intersectingLists(testLink2, testLink1) // good
intersectingLists(firstShared, secondShared) // good
console.log(intersectingLists(secondShared, firstShared)) // working 
