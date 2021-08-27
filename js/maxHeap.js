/* Every parent is smaller than it's children
 * maxHeap
 *          25
 *        /    \
 *      23      15
 *     / \      / \
 *   13  1     0  12
 *   /
 * 4
 *  Equivalent : [25, 23, 15, 13, 2, 0, 12, 4]
 *
 *
 * Indices table
 * Parent | Children 
 * ----------------
 *   0    |  1, 2
 *   1    |  3, 4
 *   2    |  5, 6
 *   3    |  7, 8
 *
 * If we know parent index p, we can find it's children
 * c1 = 2p + 1
 * c2 = 2P + 2
 *
 * Helpful for methods on a heap
 * // also the other way around with the equation solved for p
 * p = (c1 - 1) / 2
 * p = (c2 - 2) / 2
 *     or
 * p = floor(c - 1) / 2
 *
 * Use Cases:
 * - Rolling max
 * - Kth largest
 * - Priority Queues
 * - Load Balancing (Assign the server with the least going on, the job, then change the structure)
 *
 *
 * Remove Peak Element
 *  - Create it in O(n) time 😲
 *  - Swap peak with last element
 *  - bubble down, and pick the bigger of the two
 *
 *
 * Create a heap
 * Build it and bubble down from the right
 *
 */ 
