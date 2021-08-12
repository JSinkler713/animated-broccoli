'''
Input: n
output: length n, non - consecutive ones


EX:
Input: 2 (is valid)
Output: ["00", "01", "10"]
Not valid '1'

Input 0
return []

Input [1]--> ['1', '0']

Length of 2
              00
            /   \
          10    01

length of 3         ""
                    |  
 1=0               1    
               /    |    |    \
 i=1         10     01    10   01
            /   \    
 i=2     101    110  011 

 

Base Cases:
    depth of the string is reached (i==length)
    if string = length or breaking condition

    recurse = add '1' or add 0

'''

def noConsecutiveOnes(n):
  results = []
  length = n

  def recurse(str, depth):
    nonlocal length
    nonlocal results

    if depth == n:
        if str not in results:
            results.append(str)
    # had to make to check previous was 'out of depth' str[-1]
    if str == '':
        recurse(str + '1', depth + 1)
        recurse(str + '0', depth + 1)
    elif depth < n:
        # recursive cases
        if str[-1] == '1':
            recurse(str + '0', depth + 1)
        else:
            recurse(str + '1', depth + 1)
            recurse(str + '0', depth + 1)
    return
  
  recurse('', 0)
  return results

print(noConsecutiveOnes(3)) # ['101', '010']
print(noConsecutiveOnes(4)) # ['1010', '1001', '1000', '0101', '0100', '0010', '0001', '0000']
