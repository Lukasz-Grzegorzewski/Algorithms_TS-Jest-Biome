import { describe, it, expect } from '@jest/globals'
import { reverseString } from './reverseString';

describe('Reverse an array of strings', () => {
  it('should return an array where all strings are reversed', async () => {
    const stringArr: string[] = ["h","e","l","l","o"]
    expect(reverseString(stringArr)).toEqual(["o","l","l","e","h"])
  })

  it('should return an array where all strings are reversed', async () => {
    const stringArr: string[] = ["H","a","n","n","a","h"]
    expect(reverseString(stringArr)).toEqual(["h","a","n","n","a","H"])
  })

  it('should return an empty array', async () => {
    const stringArr: string[] = []
    expect(reverseString(stringArr)).toEqual(stringArr)
  })

  it('should return an input array', async () => {
    const stringArr: string[] = ["a"]
    expect(reverseString(stringArr)).toEqual(stringArr)
  })
})
