export function hammingDistance(x: number, y: number): number {
	// SOLUTION XOR
	let xor = x ^ y; // XOR to find differing bits
	let count = 0;

	// Count the number of 1s in the XOR result
	while (xor > 0) {
		count += xor & 1; // ex: xor = 5 :: 101 & 001 = 001 ::: | 1&1=1 | 1&0=0 | 0&1=0 | 0&0=0 |
		xor >>= 1; // Right-shift to check the next bit
	}
	return count;

	/* // SOLUTION by division by 2
	 let count = 0;
	 while (x > 0 || y > 0) {
		 if (x > 0 && y > 0)
			 [count, x, y] = [
				 count + (x % 2 !== y % 2 ? 1 : 0),
				 Math.floor(x / 2),
				 Math.floor(y / 2),
			 ];
		 else if (x > 0) [count, x] = [count + (x % 2), Math.floor(x / 2)];
		 else [count, y] = [count + (y % 2), Math.floor(y / 2)];
	 }
	 return count;
	 */
}
