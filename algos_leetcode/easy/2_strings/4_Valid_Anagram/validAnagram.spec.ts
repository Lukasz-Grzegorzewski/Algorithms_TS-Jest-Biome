import { describe, it, expect } from '@jest/globals';
import { validAnagram } from './validAnagram';

describe('Valid anagram', () => {
  it('should return true or false for a valid anagram of two strings', async () => {
    const s = 'anagram'
    const t = 'nagaram';
    expect(validAnagram(s, t)).toBeTruthy();
  });
  // it('should return true or false for a valid anagram of two strings', async () => {
  //   const s = 'rat',
  //     t = 'car';
  //   expect(validAnagram(s, t)).toBeFalsy();
  // });
});
