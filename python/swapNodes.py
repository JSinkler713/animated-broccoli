class ListNode:
    def __init__(self, value=None):
        self.value = value
        self.next = None

def generate_list(lst):
    if len(lst) == 0:
        return

    head = ListNode(lst[0])
    current = head

    for i in range(1, len(lst)):
        current.next = ListNode(lst[i])
        current = current.next

    return head

# make a linked list to work with
arr = [1,5,7,10,12,15]
ll = generate_list(arr)

def print_forward(head):
  cur = head
  while cur != None:
    print(cur.value)
    cur = cur.next



# swap Nodes, given values of two nodes that we want to switch
def swap(head, a, b):
  dummy = ListNode(None)
  dummy.next = head 
  node_a, node_b, p_a, p_b = None, None, None, None

  #Hunting phase
  p = dummy
  cur = head
  while cur != None:
    if cur.value == a:
      node_a = cur
      p_a = p

    if cur.value == b:
      node_b = cur
      p_b = p
    
    p = cur
    cur = cur.next
  
  if node_a == None or node_b == None:
    return head
  
  #swap
  p_a.next = p_b.next
  p_b.next = node_a
  # need another variable to not lose end of list
  temp = node_b.next
  node_b.next = node_a.next
  node_a.next = temp

  # dummy.next in case the head was one of the target elements
  return dummy.next
  

print_forward(swap(ll,1, 12))
