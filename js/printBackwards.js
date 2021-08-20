 /*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 * 
 * 
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


function printBackwards(node) {
  if (node === null) return;
  
  // this will keep traveling down until end of the list
  // only then will we be able to move on and log the next line
  // popping off the call stack
  printBackwards(node.next);
  console.log(node.data);
}

printBackwards(testLink)
