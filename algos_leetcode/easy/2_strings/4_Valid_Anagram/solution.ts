export function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) if (count[i] !== 0) return false;

  return true;

  /* FOR UNICODE
    const count = new Map<string, number>();
    for (let char of s) count.set(char, (count.get(char) || 0) + 1);
    for (let char of t) {
        if (!count.has(char)) return false;
        count.set(char, count.get(char)! - 1);
        if (count.get(char) === 0) count.delete(char);
    }
    return count.size === 0;
  */
}
