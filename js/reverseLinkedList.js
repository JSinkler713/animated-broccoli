 /*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 * N1. - N2. - N3 - N4 - N5 - END
 *                  P1
 *                       P2
 * N1. N2.
 * N5 /
 */

let testLink = {
  data:3,
  next: {
    data: 5,
    next: {
      data: 4,
      next: null
    }
  }
}

reversedTestLink = {
  data: 4,
  next: {
    data: 5,
    next: {
      data: 3,
      next: null
    }
  }
}


function reverseLinkedList(node) {
  // pointer 1 at head
  let prev = null
  let current = node // 3

  // while loop
  while (current !== null){
    
    let temp = current.next // 5
    current.next = prev // 3.next = null its at the end
    prev = current // prev = 3 now
    current = temp // 5
  }
  return prev

}


console.log('******')
console.log(reverseLinkedList(testLink))
console.log('******')
