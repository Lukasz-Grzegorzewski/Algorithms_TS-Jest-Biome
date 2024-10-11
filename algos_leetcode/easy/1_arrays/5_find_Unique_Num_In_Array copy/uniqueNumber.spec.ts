import { describe, it, expect } from '@jest/globals'
import { uniqueNum } from './uniqueNum';

describe('Unique number in array', () => {
  it('find unique number in array', async () => {
    const nums: number[] = [1,4,1,4,2];
    expect(uniqueNum(nums)).toBe(2)
  })

  it('find unique number in array', async () => {
    const nums: number[] = [1];
    expect(uniqueNum(nums)).toBe(1)
  })

  it('find unique number in array', async () => {
    const nums: number[] = [2,8,2,1,1,7,7,11,5,11,5];
    expect(uniqueNum(nums)).toBe(8)
  })

  it('return undefined for empty array', async () => {
    const nums: number[] = [];
    expect(uniqueNum(nums)).toBe(undefined)
  })
})
