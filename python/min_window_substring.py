S = "ADOBECODEBANC"
T = "ABC"

def min_window(S,T):
  count = {}
  i = 0
  missing_char = len(T)
  result = [0, len(S)+1]
  for char in T:
    if char in count:
      count[char] += 1
    else:
      count[char] = 1
    
  #hunting phase
  for j_index in range(0, len(S)):
   
    j = S[j_index]
    
    if j in count:
      count[j] -= 1
      if count[j] >= 0:
        missing_char -= 1

    #catch up phase
    while missing_char == 0:
      if((result[1] - result[0])>(j_index-i)):
        result = [i,j_index]
      if S[i] in count:
        count[S[i]] += 1
        if count[S[i]] > 0:
          missing_char += 1
      i += 1

  if result[1] == len(S)+1:
    return ""
  else:
    return S[result[0]:result[1]+1]

print(min_window(S,T))

