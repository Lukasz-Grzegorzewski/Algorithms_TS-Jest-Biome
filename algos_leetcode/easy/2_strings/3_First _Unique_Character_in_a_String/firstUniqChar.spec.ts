import { describe, it, expect } from '@jest/globals'
import { firstUniqChar } from './firstUniqChar';

describe('First UniqueCharacter in a String', () => {
  it('should return an index of the first character that is unique', async () => {
    const s = "leetcode"
    expect(firstUniqChar(s)).toBe(0)
  })

  it('should return an index of the first character that is unique', async () => {
    const s = "loveleetcode"
    expect(firstUniqChar(s)).toBe(2)
  })

  it('should return an index of the first character that is unique', async () => {
    const s = "aabb"
    expect(firstUniqChar(s)).toBe(-1)
  })

  it('should return an index of the first character that is unique', async () => {
    const s = "aadadaad"
    expect(firstUniqChar(s)).toBe(-1)
  })
})
