function minimumSwaps(arr) {
    /*
     * [3, 2, 1, 4]
     * length: 4
     * first item should be 1
     *   it's not, swap
     *   now first item is 1, next item should be 2, it is don't swap 
     *   third item should be 3, it wasnt but now is after the swap
     * 
     * 
     * 
     */ 
    let lookUpTable = {}
    arr.forEach((item, index)=> {
        lookUpTable[item] = index
    })
    // console.log(lookUpTable)
    let swapCount = 0
    // we have a lookupTable
    for (let i=0; i< arr.length; i++) {
        if (arr[i] === i+1) {
            console.log('not in the swap block')
            // no swap needed
        } else {
            // console.log('in the else block')
            // console.log('putting ', arr[i], ' where i+1 is currently')
            // console.log(lookUpTable[i+1], 'is the index of ', i+1)
            // where is i? a lookupTable would be nice
            let indexOfCorrectNum = lookUpTable[i+1] // [1, 2, 3, 4] so 0 index is 1 etc.
            let currentVal = arr[i]
            // console.log('the current valu is ', currentVal)
            // perform swap
            arr[i] = i+1 //reassign to correct number
            arr[indexOfCorrectNum] = currentVal
            //update lookUpTable
            lookUpTable[i+1] = i 
            lookUpTable[currentVal] = indexOfCorrectNum
            swapCount++
            // console.log(lookUpTable)
        }
    }
    return swapCount
}
