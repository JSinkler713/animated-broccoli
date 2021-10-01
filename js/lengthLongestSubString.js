/* Given a string s, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
    // two pointers, and a currentTable {}
    const currentTable = {}
    let pointer1 = 0;
    let maxCount = 1;
    let pointer2 = 1;
    if (s.length === 0) { return 0}
    if (s.length === 1) {return 1}
    
    /*
    * 's o n s a'
    *  | |            { s: true, o: true} maxCount = 2
    *  |   |        { s: true, o: true, n: true}  maxCount = 3
    *    |   |      // hit double, move pointer 1 {o: true, n:true, s:true} maxCount = 3
    *    |     |    {o: true, n:true, s:true, a:true} maxCount = 4
    *
    */
    currentTable[s[0]] = true;
    let count = 1
    
    while (pointer2 < s.length) {
        //check if item is in currentTable, if so move pointer1 along as well.
        count++
        while (currentTable[s[pointer2]]) {
            currentTable[s[pointer1]] = false //remove from first pointer
            pointer1++ //increment first pointer
            count-- //decrease count
        } 
        currentTable[s[pointer2]] = true
        // if it wasn't in currentTable, increment maxCount
        if (count > maxCount) {
            maxCount = count
        }
        pointer2++
    }
    // console.log(maxCount)
    return maxCount
    
};

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
