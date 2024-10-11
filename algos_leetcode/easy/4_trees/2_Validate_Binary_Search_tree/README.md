# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
  Validate Binary Search Tree

  Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.

# Example 1:
       2
      / \
     1   3
Input: root = [2,1,3]
Output: true

# Example 2:
       2
Input: root = [2]
Output: true
 
# Example 3:
       5
     /   \
    1     6
         / \
        3   7
Input: root = [5,1,6,3,7]
Output: true
 
# Example 4:
        0
      /
    -1
Input: root = [0,-1]
Output: true

# Example 5:
						 3
					 /   \
				 2       4
				/ \     / \
			 1   3  3     5
						 / \   / \
				    2   4 4   4
Input: root = [3,2,4,1,3,3,5,2,4,4,4]
Output: false

# Example 6:
       5
     /   \
    1     4
         / \
        3   6
Input: root = [5,1,4,null,null,3,6]
Output: false

# Example 7:
        0
      /
     1
Input: root = [0,1]
Output: false

# onstraints:
  - The number of nodes in the tree is in the range [1, 104].
  - -231 <= Node.val <= 231 - 1


