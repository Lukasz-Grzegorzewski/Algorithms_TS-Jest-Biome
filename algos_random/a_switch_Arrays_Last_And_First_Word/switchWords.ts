export function switchWords(string: string): string {
  const words = string.split(' ');
  if (words.length < 2) return string;

  const first = words[0];
  words[0] = words[words.length - 1];
  words[words.length - 1] = first;

  return words.join(' ');
}
