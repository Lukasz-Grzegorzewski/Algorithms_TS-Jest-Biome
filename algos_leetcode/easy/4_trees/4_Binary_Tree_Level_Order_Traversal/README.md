# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/
  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Example 1:
          3
        /   \
      9       2
            /   \
          4       8
Input: root = [3,9,2,null,null,4,8]
Output: [[3],[9,2],[4,8]]

# Example 2:
          1
        /   \
      4       7
    /   \       \
  5       3       9
Input: root = [1,4,7,5,null,3,null,9]
Output: [[1],[4,7],[5,3,9]]
 
# Example 3:
          1
Input: root = [1]
Output: [[1]]

# Example 4:
          null
Input: root = [null]
Output: []

# onstraints:
  - The number of nodes in the tree is in the range [0, 2000].
  - -1000 <= Node.val <= 1000
