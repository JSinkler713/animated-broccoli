function subArrayDivision(s, d, m) {
    /*
    * EX: [2, 2, 1, 3, 2] d=4 m=2
    * sum [2, 2] = 4, numberOfDivisions =1
    * sum [2, 1] = 3, so 4 - 2(s[i-m]){previous number} + 1(s[i]){current number}
    */
    if (s.length < m) { return 0}
    let sum = 0;
    let numberOfDivisions = 0;
    // get initial sum set up for first segment
    for (let i=0; i<m; i++) {
        sum += s[i]
    }
    if (sum === d) {
        numberOfDivisions++
    }
    // for loop incrementing the end of the segment along
    for (let i=m; i<s.length; i++) {
        // s[i] will be next value pointing at the end of the segment
        // subtract the one at the beginning and add the current
        let previousNum = s[i-m] // s[0] first time
        // subtract previous and add current
        sum = sum - previousNum + s[i]
        if (sum === d) {
            numberOfDivisions++
        }
    }
    return(numberOfDivisions)
}
console.log(subArrayDivision([2, 2, 1, 3, 2], 4, 2)) // return 2 since [2,2] = 4 and [1,3] = 4 and are both 2 long
