import { describe, it, expect } from '@jest/globals'
import { switchWords } from './switchWords'

describe('test switch', () => {
  it('switch word mopre than 3', async () => {
    const string= 'lukasz est mon premier nom';
    expect(switchWords(string)).toBe('nom est mon premier lukasz')
  })

  it('2 words', async () => {
    const string= 'toto titi';
    expect(switchWords(string)).toBe('titi toto')
  })

  it('empty string', async () => {
    const string= '';
    expect(switchWords(string)).toBe(string)
  })
})
