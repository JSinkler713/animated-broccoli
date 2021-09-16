/*
 *
 *
 * There is a collection of rocks where each rock has various minerals embeded in it. Each type of mineral is designated by a lowercase letter in the range . There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.

Example

The minerals 'b' and 'c' appear in each rock, so there are  gemstones.
 *
 *'hackerrank credit'
 * time solved 25 minutes
 *
 */

function gemstones(arr) {
    // Write your code here
    // get all minerals in the first rock,
    const mineralHolder = {}
    let count = 0
    let rock = arr[0]

    for (let j=0; j< rock.length; j++) {
                if (!mineralHolder[rock[j]]) {
                    // add all minerals from first rock
                    mineralHolder[rock[j]] = true
                    count += 1
                }
    }
    //console.log(mineralHolder)
    // subsequently, check that they exist in each following rock

    for (let i=1; i< arr.length; i++) {
        rock = arr[i]
        //mineralHolder is full of elements after first rock
        let individualMineralHolder = {}
        for (let j=0; j< rock.length; j++) {
            // make an individualMineralHolder for each rock
            if (!individualMineralHolder[rock[j]]) {
                // need to check that all minerals are there
                // make a mineralHolder for this rock, and compare
                individualMineralHolder[rock[j]] = true
            }
        }
        // now check against first mineral Holder and update if true
        Object.keys(mineralHolder).forEach((mineral)=> {
        // if the latest rock doesn't have it and it's true, update it to false
        if (!individualMineralHolder[mineral] && mineralHolder[mineral]) {
                mineralHolder[mineral] = false
                // decrement count
                count--
            }
        })


    }
    // console.log(mineralHolder, 'atend')
    return count


}

const testCase = ['aambl', 'amb', 'lamb'] // output 3 'a' 'm' 'b' all occure in each rock

console.log(gemstones(testCase))

