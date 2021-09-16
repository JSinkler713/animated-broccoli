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
  
  let arrayOfCounts = Object.keys(totalCounts).map(typeOfBall=> {
      let countOfBall = totalCounts[typeOfBall]
      return countOfBall
  })
  arrayOfSizes.sort((a,b)=> a<b)
  arrayOfCounts.sort((a,b)=> a<b)
  for (let i=0; i< arrayOfSizes.length || i< arrayOfCounts.length; i++) {
      if (arrayOfCounts[i] != arrayOfSizes[i]) {
          return 'Impossible'
      }
  }
  return 'Possible'

  
  console.log('ARRAYS', arrayOfCounts, arrayOfSizes)
  //console.log('sizes: ', containerSizes)
  //console.log('total counts: ', totalCounts)
  // we know there must be a container with a size equal to each totalCounts or else it is impossible
  // quick loop through making sure that there is one for each size
  //let arrOfSizes = Object.keys.map((key)=> containerSizes[key])
  /*
  let copyOfCounts = {...totalCounts}
  // switch around so the objects are the sizes, and counts, don't need index just need frequencies
  let countFrequencies = {}
  Object.keys(totalCounts).forEach(totalCountKey => {
      if (!countFrequencies[totalCounts[totalCountKey]]) {
          countFrequencies[totalCounts[totalCountKey]] = 1
      } else {
          countFrequencies[totalCounts[totalCountKey]] += 1
      }
  })
  console.log('CouNT FREQUEnCY')
  console.log(countFrequencies)
  let sizeFrequency = {}
  Object.keys(containerSizes).forEach(key=> {
      if (!sizeFrequency[containerSizes[key]]) {
          sizeFrequency[containerSizes[key]] = 1
      } else {
          sizeFrequency[containerSizes[key]] += 1
      }
  })
  console.log('SIZE FREQUENCY', sizeFrequency)
  if (JSON.stringify(countFrequencies) == JSON.stringify(sizeFrequency)) {
  return 'Possible'
  } else {
      return 'Impossible'
  }
  */
}
