export function validPalindrome(s: string): boolean {
	/* // FIRST SOLLUTION
  const t = s.toLowerCase().replace(/[^a-zA-Z]/g, "");
	for (let i = 0; i < Math.floor(t.length); i++)
  if (t[i] !== t[t.length - 1 - i]) return false;
	return true;
  */

  // FAST SECOND SOLUTION 
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		while (left < right && !isAlphanumeric(s[left])) {
			left++;
		}

		while (left < right && !isAlphanumeric(s[right])) {
			right--;
		}

		if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

		left++;
		right--;
	}

	return true;
}

function isAlphanumeric(char: string): boolean {
	return /[a-zA-Z0-9]/.test(char);
}
