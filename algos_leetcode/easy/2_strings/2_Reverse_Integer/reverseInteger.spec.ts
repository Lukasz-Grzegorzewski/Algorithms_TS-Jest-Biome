import { describe, it, expect } from '@jest/globals'
import { reverseInteger } from './reverseInteger';

describe('Reverse digits of a number', () => {
  it('should return a reversed number', async () => {
    const x = 123
    expect(reverseInteger(x)).toBe(321)
  })

  it('should return a reversed number', async () => {
    const x = -123
    expect(reverseInteger(x)).toBe(-321)
  })

  it('should return a reversed number', async () => {
    const x = 120
    expect(reverseInteger(x)).toBe(21)
  })
})
