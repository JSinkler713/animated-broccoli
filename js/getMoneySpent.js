/*
 *
 *
 * A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

Example
b = 60 you have 60 to spend (no tax)
keyboards = [40, 50, 60]
drives = [5, 8, 12]
buy the 50 keyboard and 8 drive as most expensive, return 58 as cost


The person can buy a , or a . Choose the latter as the more expensive option and return .

Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
Returns

int: the maximum that can be spent, or  if it is not possible to buy both items
Input Format

The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
The second line contains  space-separated integers , the prices of each keyboard model.
The third line contains  space-separated integers , the prices of the USB drives.

Constraints

The price of each item is in the inclusive range .
Sample Input 0

10 2 3
3 1
5 2 8
Sample Output 0

9

 *
 *
 *
 */

function getMoneySpent(keyboards, drives, money) {
  let maxSpent = 0
  keyboards.forEach(keyboard=> {
    if (keyboard < money) {
      // could buy keyboard
      // try to add drive
      drives.forEach(drive=> {
        if (drive + keyboard <= money && drive +keyboard > maxSpent) {
          maxSpent = drive + keyboard
        }
      })
    }
  })
  if (!maxSpent) { return -1 }
  return maxSpent
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
