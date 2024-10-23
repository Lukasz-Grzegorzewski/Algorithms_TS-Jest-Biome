export function reverseString(s: string[]): string[] {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i])
      [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
}
