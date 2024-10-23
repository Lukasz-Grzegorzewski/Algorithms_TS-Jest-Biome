export function climbStairs(n: number): number {
	if (n === 1) return 1;
	if (n === 2) return 2;

	let prev = 1;
	let current = 2;

	for (let i = 2; i < n; i++) {
		[prev, current] = [current, prev + current];
	}

	return current;
}
