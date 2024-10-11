# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
  Remove Nth Node From End of List

  Solution
  Given the head of a linked list, remove the nth node from the end of the list and return its head.

# Example 1:
                                                          ▼
Input: head = [1,2,3,4,5,null], n = 2         1-> 2-> 3-> 4-> 5-> null
Output: [1,2,3,5,null]                        1-> 2-> 3-> 5-> null


# Example 2: 
                                              ▼
Input: head = [1,2,3,4,5,null], n = 5         1-> 2-> 3-> 4-> 5-> null
Output: [2,3,4,5,null]                        2 -> 3 -> 4 -> 5-> null


# Example 3:
                                              ▼
Input: head = [1,null], n = 1                 1-> null
Output: [null]                                null


# Example 4:
                                              ▼
Input: head = [1,2,null], n = 1               1-> 2-> null
Output: [1,null]                              1-> null
 
# Constraints:
- The number of nodes in the list is sz.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz
 
Follow up: Could you do this in one pass?
