# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/
  House Robber

  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

# Example 1:
Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

# onstraints:
  - 1 <= nums.length <= 50
  - -106 <= nums[i] <= 106
  - All the elements of nums are unique.
  - At most 104 calls in total will be made to reset and shuffle.

# Hint
  The solution expects that we always use the original array to shuffle() else some of the test cases fail. (Credits; @snehasingh31)
