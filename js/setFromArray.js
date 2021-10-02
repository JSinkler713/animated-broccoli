const coolArr = [1, 1, 3, 3, 2, 2]

// set of only distinct values
const newSet = new Set(coolArr)

// {1, 3, 2} {1, 3, 2}.size = 3
console.log('the number of distinct integers', newSet.size)

console.time("How long does it take to count to a million")

for (let i=0; i< 1000000; i++) {
}
console.timeEnd("How long does it take to count to a million")
