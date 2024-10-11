export function myAtoi(s: string): number {
	// FIRST SOLUTION
	let minus = false;
	let start = 0;
	const MAX_INT = 2 ** 31 - 1;
	const MIN_INT = -(2 ** 31);

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char === " ") continue;
		start = i;

		if (char === "-" || char === "+") {
			minus = char === "-";
			start++;
		}
		break;
	}

	let result = 0;
	for (let i = start; i < s.length; i++) {
		if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) break;
		result = result * 10 + (s.charCodeAt(i) - 48);
		if (minus && -result < MIN_INT) return MIN_INT;
		if (!minus && result > MAX_INT) return MAX_INT;
	}

	return minus ? -result : result;
}
