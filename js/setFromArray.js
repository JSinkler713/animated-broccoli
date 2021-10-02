const coolArr = [1, 1, 3, 3, 2, 2]

// set of only distinct values
const newSet = new Set(coolArr)

// {1, 3, 2} {1, 3, 2}.size = 3
console.log('the number of distinct integers', newSet.size)
