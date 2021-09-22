var largestIsland = function(grid) {
    /*
     * 1 or none changes: 0 to 1
     * Island Def: 4 directoinally connected group of 1's
     * 
     * We would iterate through and do 1 change on each 1,
     * And then using this new grid find the largest island
     * 
     * 
     * 
     * 
     * 
    */
    const maxRow = grid.length -1
    const maxCol = grid[0].length -1
    
    function recurseHelper(row, col, grid, islandCoord) {
        // console.log('in recurseHelper')
        // if row or col is out of bounds or is not a 1 don't recurse
        if (islandCoord[row+'_'+col] || row < 0 || row > maxRow || col < 0 || col > maxCol || grid[row][col] !== 1) {
            // dont recurse, not in an island
            return 0
        }
        // do recursive calls, then return count
        let count = 1
        // add to islandCoord
        islandCoord[row+'_'+col] = true
        //console.log(count)
        
        count+= recurseHelper(row, col+1, grid, islandCoord)
        count+= recurseHelper(row, col - 1,  grid, islandCoord)
        count+= recurseHelper(row + 1, col, grid, islandCoord)
        count+= recurseHelper(row - 1, col, grid, islandCoord)
        return { count, islandCoord}
    }
    
    // call on original grid,
    let maxIslandSum = 0
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            const islandInfo = recurseHelper(i, j, grid, {})

            if (islandInfo.count > 0) {
              console.log('in the if block')
                // for each islandCoord we set matrix equal to the sum
                Object.keys(islandInfo.islandCoord).forEach((coord)=> {
                    coords = coord.split('_')
                  console.log('***********************')
                    console.log('coords are ', coords)
                  console.log('***********************')
                    let rowVal = coords[0]
                    let colVal = coords[1]
                    grid[rowVal][colVal] = islandInfo.count
                })
            }
            if (islandInfo.count > maxIslandSum ){
                maxIslandSum = islandInfo.count 
            }
        }
    }
    // and then on all versions of grid
    /*
    let gridAlterations = []
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            // check if grid[i][j] === 0, if so change to 1, and push into gridAlt
            if (grid[i][j] === 0) {
                console.log('making copy')
                // this copy is not working 
                let copy = []
                grid.forEach(row=> {
                    copy.push([...row])
                })
                console.log('copy before ,', copy)
                copy[i][j] = 1
                console.log('copy after ,', copy)
                gridAlterations.push(copy)
            }
        }
    }
    */
    console.log(grid)
    
    // now all islands have their sum in each quadrant
    // add 1 to left, right, top, bottom to combine islands
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            // check if grid[i][j] == 0,
            if (grid[i][j] === 0) {
                //console.log('making copy')
                // get the sum of all islands top left right bottom of it, and add 1 to it also
                // check right side is there
                let sum=1
                if (j+1 <= maxCol) {
                    sum+= grid[i][j+1]
                }
                // check left side is there
                if (j-1 >= 0) {
                    sum+= grid[i][j-1]
                }
                // check above is there
                if (i-1 >= 0) {
                    sum+= grid[i-1][j]
                }
                // check below is there
                if (i+1 <= maxRow) {
                    sum+= grid[i+1][j]
                }
                if (sum >= maxIslandSum) {
                    maxIslandSum = sum
                }
            }
        }
    }



    /* Instead of all the grid alterations, we could alter the original,
    // if we put the sum of each island as the value in place of each 1,
    // then we could just look left, right, up, down, and add anything that is not a zero when we do a grid alteration.
    /*
    gridAlterations.forEach(grid=> {
        for (let i=0; i< grid.length; i++) {
            for (let j=0; j< grid[0].length; j++) {
                let islandSum = recurseHelper(i, j, grid)
                if (islandSum > maxIslandSum ){
                    maxIslandSum = islandSum
                }
            }
        }
    })
    */
    return maxIslandSum
};

largestIsland([[1,1], [1, 0]]) // return 4
