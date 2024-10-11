import { describe, it, expect } from '@jest/globals'
import { intersect } from './intersection';

describe('Intersect 2 arrays', () => {
  it('returns array with intersected numbers based on 2 arrays', async () => {
    const nums1: number[] = [1,2,2,1];
    const nums2: number[] = [2,2];
    expect(intersect(nums1, nums2)).toEqual([2,2])
  })

  it('returns array with intersected numbers based on 2 arrays', async () => {
    const nums1: number[] = [4,9,5,1,1,1,3];
    const nums2: number[] = [9,4,9,8,4,1,1];
    
    const result = intersect(nums1, nums2);
    expect(result.sort()).toEqual([1,1,4,9].sort());
  })

  it('returns empty array', async () => {
    const nums1: number[] = [];
    const nums2: number[] = [9,4,9,8,4];
    expect(intersect(nums1, nums2)).toEqual([])
  })
})
