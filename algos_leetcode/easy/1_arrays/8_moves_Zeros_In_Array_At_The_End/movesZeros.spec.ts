import { describe, it, expect } from '@jest/globals'
import { movesZeros } from './movesZeros';

describe('Moves zeros in array at the end', () => {
  it('should return array with zeros at the end', async () => {
    const nums: number[] = [4,0,1,0,8,3,2,1];
    expect(movesZeros(nums)).toEqual([4,1,8,3,2,1,0,0])
  })

  it('should return array with zeros at the end', async () => {
    const nums: number[] = [0,1,0,8,3,2,1];
    expect(movesZeros(nums)).toEqual([1,8,3,2,1,0,0])
  })

  it('should return array with zeros at the end', async () => {
    const nums: number[] = [8,3,2,1,0,1];
    expect(movesZeros(nums)).toEqual([8,3,2,1,1,0])
  })

  it('should return array with zeros at the end', async () => {
    const nums: number[] = [0,1];
    expect(movesZeros(nums)).toEqual([1,0])
  })

  it('should return array with zeros at the end', async () => {
    const nums: number[] = [];
    expect(movesZeros(nums)).toEqual([])
  })
})
