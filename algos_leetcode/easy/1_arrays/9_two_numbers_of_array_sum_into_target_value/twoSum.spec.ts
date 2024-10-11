import { describe, it, expect } from '@jest/globals'
import { twoSums } from './twoSum';

describe('Two numbers of array sum into target value', () => {
  it('should return array of indexes of correct numbers', async () => {
    const nums: number[] = [2,7,11,15];
    const target = 9;
    expect(twoSums(nums, target)).toEqual([0,1])
  })

  it('should return array of indexes of correct numbers', async () => {
    const nums: number[] = [3,2,4];
    const target = 6;
    expect(twoSums(nums, target)).toEqual([1,2])
  })

  it('should return array of indexes of correct numbers', async () => {
    const nums: number[] = [3,3];
    const target = 6;
    expect(twoSums(nums, target)).toEqual([0,1])
  })
})
