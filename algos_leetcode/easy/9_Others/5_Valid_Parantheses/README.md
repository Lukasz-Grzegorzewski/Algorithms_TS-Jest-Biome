# Description
  https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/
  Valid Parentheses

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
  

# Example 1:
Input: s = "()"
Output: true

# Example 2:
Input: s = "()[]{}"
Output: true

# Example 3:
Input: s = "(]"
Output: false

# Example 4:
Input: s = "([])"
Output: true

 

# Constraints:
  - 1 <= s.length <= 104
  - s consists of parentheses only '()[]{}'.

# Hide Hint #1  
Use a stack of characters.

# Hide Hint #2  
When you encounter an opening bracket, push it to the top of the stack.

# Hide Hint #3  
When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.