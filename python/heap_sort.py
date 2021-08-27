
def swap(arr, index_1, index_2):
    temp = arr[index_1]
    arr[index_1] = arr[index_2]
    arr[index_2] = temp
    return temp
def get_child(arr, par_index,  heap_length):
    c1 = 2*par_index + 1
    c2 = 2*par_index + 2
    if c1 >= heap_length:
        return par_index
    if c2 >= heap_length:
        return c1
    if arr[c1] >= arr[c2]:
        return c1
    else:
        return c2
def bubble_down(arr, heap_index, heap_length):
    #get child index
    child_index = get_child(arr, heap_index, heap_length)
    while child_index < heap_length:
        if arr[child_index] > arr[heap_index]:
            swap(arr, child_index, heap_index)
            heap_index = child_index
        else:
            break
        child_index = get_child(arr, heap_index, heap_length)
def heapsort(arr):
    # Write your code here
    #Convert arr into max heap
    for par_index in range(len(arr)-1, -1, -1):
        bubble_down(arr, par_index, len(arr))
    heap_length = len(arr)
    # Turn max heap into sorted array
    for heap_ind in range(len(arr)-1, 0, -1):
        #swap peak with end of heap
        swap(arr, 0, heap_length-1)
        # shrink heap_size by 1
        heap_length -= 1
        #bubble down new peak
        bubble_down(arr, 0, heap_length)
    return arr

print(heapsort([1, 4, 3, 5, 6, 12, 8]))
print(heapsort([10, 4, 13, 5, 6, 12, 8]))
