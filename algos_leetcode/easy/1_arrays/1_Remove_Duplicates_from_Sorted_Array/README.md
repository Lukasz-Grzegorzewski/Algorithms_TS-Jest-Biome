# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the object :
  {
    count: uniqueNumbers, // unique numbers found in "nums" array
    nums: nums  /* array that contains unique numbers in front and replace the rest woth null */
  }

# Example 1:
Input: nums = [1,2,2]
Output:
  {
    count: 2,
    nums: [1,2,null]
  }

# Example 2:
Input: nums = [1,1,1,1,4,4,4,5,6,7]
Output:
  {
    count: 5,
    nums: [1,4,5,6,7,null,null,null,null,null]
  }

# Example 3:
Input: nums = [1,4,5,6]
Output:
  {
    count: 4,
    nums: [1,4,5,6]
  }

# Constraints:
  - 1 <= nums.length <= 3 * 104
  - -100 <= nums[i] <= 100
  - nums is sorted in non-decreasing order.

# Hint 1
In this problem, the key point to focus on is the input array being sorted. As far as duplicate elements are concerned, what is their positioning in the array when the given array is sorted? Look at the image below for the answer. If we know the position of one of the elements, do we also know the positioning of all the duplicate elements?
       |----| together
[1,2,3,4,4,4]
----->sorted

# Hint 2
We need to modify the array in-place and the size of the final array would potentially be smaller than the size of the input array. So, we ought to use a two-pointer approach here. One, that would keep track of the current element in the original array and another one for just the unique elements.

# Hint 3
Essentially, once an element is encountered, you simply need to bypass its duplicates and move on to the next unique element.
