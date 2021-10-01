function organizingContainers(container) {
  console.log(container)
  console.log('*********')
  /*
  *
  * Some notes:
  * There must be all of one type in each container
  * We know we want [0, 0, 2], [0, 3, 0], [3, 0, 0] somehow, work backwards?
  * We actually know that each container will have the same number of balls it
  * starts with, this means we know we must have a container of each size of occurence of the frequency of the ball.
  * In other words if a ball occurs 12 times, we better have a container with 12 spots
  *
  *

  *                 [0, 2, 1]               [1, 1, 1],   [2, 0, 0]
  *      swap operations
  *                 /   |   \
  *   swapFromOindex.  1index 2index ...
  *
  *
  *
  *
  */
  const totalCounts = {} // { '0': 3, '1': 3, '2': 2 ...typeOfBall and totalOccurence}
  // get totalCounts
  container.forEach(container => {
      console.log('container ', container)
      container.forEach((bucket, i)=> {
          if (totalCounts[i]) {
          totalCounts[i] += bucket
          } else {
              totalCounts[i] = bucket
          }
      })
  })
  let countsArr = []
  Object.keys(totalCounts).forEach(key=> {
      countsArr.push(totalCounts[key])
  })
  // sort countsArr
  countsArr.sort((a,b)=> a-b)
  console.log(countsArr, 'is the counts arr')
  const containerSizes = {} // {'0': 2, '1': 3, ...index and size}
    container.forEach((smallContainer, containerIndex) => {
      containerSizes[containerIndex] = 0
      console.log('container ', smallContainer)
      // count all elements in the container
      smallContainer.forEach((bucket, i)=> {
          containerSizes[containerIndex] += bucket
      })
  })
  // make an array of sizes, and array of totalcounts
  // sort them and compare that they are the same,
  // if so it's 'possible' else it's 'impossible'
  let arrayOfSizes = Object.keys(containerSizes).map(key=> containerSizes[key])
  // sort the arrayOfSizes
  arrayOfSizes.sort((a,b)=>a-b)
  let notPossible = false;
  for (let i=0; i<arrayOfSizes.length && i<countsArr.length; i++){
      if (!arrayOfSizes[i] || !countsArr[i] || arrayOfSizes[i] !== countsArr[i]) {
          notPossible = true
      }
  }
  if (notPossible) {
      return 'Impossible'
  } else {
      return 'Possible'
  }
}

console.log(organizingContainers([[1,4],[2,3]])) // return 'Impossible'
