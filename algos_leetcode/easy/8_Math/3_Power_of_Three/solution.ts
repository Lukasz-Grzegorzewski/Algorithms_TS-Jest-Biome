export function isPowerOfThree(n: number): boolean {
	// 0(1) solution
	return n > 0 && 3 ** 19 % n === 0;

	// Loop solution
	/*
	if (n === 0) return false;
	for (let i = 0; 3 ** i <= n; i++) {
		if (3 ** i === n) return true;
	}
	return false;
	*/
}
