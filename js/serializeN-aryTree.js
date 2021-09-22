/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following 3-ary tree

For example, you may serialize the following 3-ary tree


 

as . Note that this is just an example, you do not necessarily need to follow this format.

Or you can follow LeetCode's level order traversal serialization format, where each group of children is separated by the null value.

 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };

       1.    root.val = 1
      /|  \ 
    3  2  4    root.children [{val: ,}]
   / \
  5  6   

[1, [3,[5 6], 2, 4]]

{
    0: [1]
    1: [3]
    2: [5]
}
if (levels[l-1]) {
    
}
*/



let testTree = {
        val: 1,
        children: [ {
            val: 3,
            children: [{
                val: 5
            }, {
                val: 6
            }
            ]},
        {
          val: 2
        },
        {
          val: 4
        }
        ]
}
/*

    def serialize(self, root: 'Node') -> str:
        """Encodes a tree to a single string.
        
        :type root: Node
        :rtype: str
        """
        serializedList = []
        self._serializeHelper(root, serializedList, WrappableInt(1), None)
        return "".join(serializedList)
    
    def _serializeHelper(self, root, serializedList, identity, parentId):
        if not root:
            return
        
        # Own identity
        serializedList.append(chr(identity.getValue() + 48))
        
        # Actual value
        serializedList.append(chr(root.val + 48))
        
        # Parent's identity
        serializedList.append(chr(parentId + 48) if parentId else 'N')
        
        parentId = identity.getValue()
        for child in root.children:
            identity.increment()
            self._serializeHelper(child, serializedList, identity, parentId)
    



*/

var serialize = function(root) {
   if (!root) return null;
   const storage = []
   const visit = (node) => {
       if (!node) return;
       if (!node.children){
         storage.push(node.val);
       }
       let tempArr = [node.val]
       if (node.children && node.children.length) {
         console.log('has children')
         node.children.forEach(child=> {
           tempArr.push(visit(child))
         })
       }
       if (tempArr.length === 1) {
         //storage.push(tempArr[0])
         return tempArr[0]
       }else {
         //storage.push(tempArr)
         return tempArr
       }
   };
   

   visit(root);
   console.log(storage)
   //return storage.join(',');
};

serialize(testTree)
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};
