/*
 * Complete the 'coinSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY coins
 *  2. INTEGER total
 */

/* INPUT: target -integer, coins [num, num]
 * EX: 5, [1, 2, 4] target, coins
 * 
 * Possible solutions:
 * 1, 1, 1, 1, 1
 * 1, 1, 1, 2
 * 1, 2, 2
 * 1, 4
 * 
 *                      5, [1, 2, 4]
 *                   /                  \
 *              1, [1, 2, 4]            5, [1, 2]
 *              /       \               /       \
 *     -3, [1, 2, 4]    1,[1,2]     3, [1, 2]         5[1]
 *                         / \          / \             \
 *  
 * 
 * BASECASE
 * if target is negative; return 0
 * if target is 0; return 1
 * if no more coins, empty arr, target is positive return 0
 * if no more coins but target is zero; return 1
 * 
 *                     
 */

// or just reduce the target

/*
 * 
 *                          5, [1, 2, 4]
 *                   /           |               \
*       1, [1, 2, 4]             3, arr            4, [1, 2, 4]
 *        /     |    \           /     |    \
 * 0,arr     -1, arr  -3, arr   2,arr  1,arr  -1,arr     
 *   X           X        X     / \             
 *                            1, arr 
 *                           /  |  \
 *
 */



  // Write your code here
function coinSum(coinsInput, total){
  const cache = {};
  function findWays(target, coins){
    let key = target + '_' + coins.length;
    if (key in cache) {
      return cache[key];
    }

    if (target < 0) {
      return 0;
    }
    if (coins.length === 0) {
      if (target > 0) {
        return 0;
      }
      return 1;
    }
    let left = findWays(target - coins[coins.length - 1], coins);

    let popped = coins.pop();
    let right = findWays(target, coins);
    coins.push(popped);

    cache[key] = left + right;
    return left + right;
  }
  return findWays(total, coinsInput);
}

console.log(coinSum([1,2,4],5));
