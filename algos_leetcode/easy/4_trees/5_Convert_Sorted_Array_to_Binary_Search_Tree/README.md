# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/
  Convert Sorted Array to Binary Search Tree
  Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

# Example 1:
Input: root = [-10,-3,0,5,9]
							0
						/   \
					-3      9
				/   		/
			-10   	5
Output 1: [0,-3,9,-10,null,5,null]
							0
						/   \
					-10     5
				    \   		\
			        -3      9
Output 2: [0,-10,5,null,-3,null,9]

# Example 2:
Input: root = [1,3]
          1
            \
              3
Output 1: [1,null,3] 
          3
        /
      1
Output 2: [3,1,null]

# onstraints:
  - 1 <= nums.length <= 104
  - -104 <= nums[i] <= 104
  - nums is sorted in a strictly increasing order.
