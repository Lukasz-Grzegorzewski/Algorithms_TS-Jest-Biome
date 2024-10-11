import { describe, it, expect } from '@jest/globals';
import { validPalindrome } from './validPalindrome';

describe('Valid palindrome', () => {
  it('should return true or false for a valid palindrome of two strings', async () => {
    const s = 'A man, a plan, a canal: Panama';
    expect(validPalindrome(s)).toBeTruthy();
  });
  
  it('should return true or false for a valid palindrome of two strings', async () => {
    const s = 'race a car';
    expect(validPalindrome(s)).toBeFalsy();
  });
  
  it('should return true or false for a valid palindrome of two strings', async () => {
    const s = 'a,,,,,,,,,,,b,c ba';
    expect(validPalindrome(s)).toBeTruthy();
  });

  it('should return true or false for a valid palindrome of two strings', async () => {
    const s = ' ';
    expect(validPalindrome(s)).toBeTruthy();
  });
});
