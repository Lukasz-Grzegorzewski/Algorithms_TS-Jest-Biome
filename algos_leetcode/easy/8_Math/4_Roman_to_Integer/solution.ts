export function romanToInt(s: string): number {
	let sum = 0;

	const values: { [key: string]: number } = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	for (let i = 0; i < s.length; i++) {
		if (s[i + 1] && values[s[i]] < values[s[i + 1]]) sum -= values[s[i]];
		else sum += values[s[i]];
	}

	return sum;
}
