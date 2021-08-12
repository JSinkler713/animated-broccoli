# Top Left to Bottom Right
'''
Input: m = rows, integer, n=column (intger)

Output: integer, number of paths

0|__1__2__3
1|__|__|__|
2|__|__|__|


      (0,0) __1 __ 2__
#          |__|__|__|
#          |__|__|__|(2,3)

(2,3)
 r,c


base case: row=m, col=n
          test for out of bounds
move: down, x+1, right y+1
      

algo:
Nested Loop through each location in the matrix

'''
# Partly working Python version. Times out :(
def latticePaths (m, n):
  numberOfPaths = [m, n]
  
  def recursePaths(row,col):
    # Base cases
    if row>numberOfPaths[0] or col>numberOfPaths[1]:
      return 0
    elif row==numberOfPaths[0] and col==numberOfPaths[1]:
      return 1
    return recursePaths(row + 1, col) + recursePaths(row, col + 1)

  return recursePaths(0, 0)

print(latticePaths(2,3)) # Expect 10
