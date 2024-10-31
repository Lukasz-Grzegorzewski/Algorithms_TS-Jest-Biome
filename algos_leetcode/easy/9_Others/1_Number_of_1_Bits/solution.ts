export function hammingWeight(n: number): number {
	if (n === 0) return 0;
	return n % 2 + hammingWeight(Math.floor(n / 2));
}
