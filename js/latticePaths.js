function latticePaths(m, n) {
    // Write your code here
    function recursePaths(row,col) {
    // Base cases
        if (row>m || col>n) {
            return 0
        } else if (row == m && col == n){
            return 1
        }
        return recursePaths(row + 1, col) + recursePaths(row, col + 1)
    }
    return recursePaths(0, 0)
}

// INPUT (2,3)
// Expected OUTPUT : 10
console.log(latticePaths(2,3))
