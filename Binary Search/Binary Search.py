"""
Basic Implementation of Binary Search 
Author: Forrest Cai
"""


def BS(list, val):
  """
  Impementation of Binary Search.

  Parameter list: a sorted list 
  
  Parameter val: value to look for 

  Returns the index of value and -1 if not found 
  """

  low = 0
  high = len(list) - 1
  while low<= high:
    mid = low + (high-low)//2 #get the middle value 
    if list[mid] == val:
      return mid 
    elif list[mid] > val: #our current middle is too big so we move to the left
      high = mid -1
    else: #our current middle is too small so we move to the right
      low = mid + 1 

  return -1 
  
list = [0,1,2,3,4,5,6]
val = 4

print(BS(list,val))

  