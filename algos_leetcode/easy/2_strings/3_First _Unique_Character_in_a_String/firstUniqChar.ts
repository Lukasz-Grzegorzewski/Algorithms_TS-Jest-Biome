export function firstUniqChar(s: string): number {
  /* 
    algo conditions
    - a-z => 26 possible letters represents by indexes 0-25
    - where a->0 and z->25
    - ASCII for a -> 97
  */
  const countAlphabetCharCodes = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++)
    countAlphabetCharCodes[s.charCodeAt(i) - 97]++;
  for (let i = 0; i < s.length; i++)
    if (countAlphabetCharCodes[s.charCodeAt(i) - 97] === 1) return i;
  return -1;

  
  /* SECOND SOLUTION
  const lettersCount = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (lettersCount.get(letter) === undefined) lettersCount.set(letter, i);
    else if (lettersCount.get(letter)! >= 0) lettersCount.set(letter, -1);
  }
  let smallestIndex: number = -1;
  for (let value of lettersCount.values()) {
    if (value >= 0 && (smallestIndex === -1 || value < smallestIndex))
    smallestIndex = value;
  }
  return smallestIndex;
  */
}
