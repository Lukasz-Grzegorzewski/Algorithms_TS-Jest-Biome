export function countPrimes(n: number): number {
	if (n <= 2) return 0;

	const array: boolean[] = [];
	array[0] = false;
	array[1] = false;
	let count = 0;

	for (let i = 2; i < n; i++) {
		if (array[i] === undefined) {
			count++;
			for (let j = i * i; j < n; j += i) {
				array[j] = false;
			}
		}
	}

	return count;
}
