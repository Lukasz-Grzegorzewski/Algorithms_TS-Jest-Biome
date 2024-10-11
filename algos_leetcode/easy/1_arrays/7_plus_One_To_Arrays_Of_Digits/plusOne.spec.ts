import { describe, it, expect } from '@jest/globals'
import { plusOne } from './plusOne';

describe('Plus one to a number represented by an array of digits', () => {
  it('should return incremented digit in form of an array', async () => {
    const digits: number[] = [1,2,3,4];
    expect(plusOne(digits)).toEqual([1,2,3,5])
  })

  it('should return incremented digit in form of an array', async () => {
    const digits: number[] = [4,3,2,1];
    expect(plusOne(digits)).toEqual([4,3,2,2])
  })

  it('should return incremented digit in form of an array', async () => {
    const digits: number[] = [1,9];
    expect(plusOne(digits)).toEqual([2,0])
  })

  it('should return incremented digit in form of an array', async () => {
    const digits: number[] = [1,9,9];
    expect(plusOne(digits)).toEqual([2,0,0])
  })

  it('should return empty array', async () => {
    const digits: number[] = [];
    expect(plusOne(digits)).toEqual([])
  })
})
