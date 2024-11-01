export function reverseBits(n: number): number {
	const bit32 = n.toString(2).padStart(32, "0");
	const bit32Reversed = bit32.split("").reverse().join("");
	return Number.parseInt(bit32Reversed, 2);

	/* // BITwise Solution
	let reversed = 0;
	for (let i = 0; i < 32; i++) {
		//ex: 11 << 1 => 1011 << 1 => 10110 (decimal aproach : it doubles 11: *2)
		reversed <<= 1;	// Shift reversed to the left to make space for the new bit

		//ex: -- = 0 | ( 1011 & 0001 ) => 0000 | 0001 => 0001 => 1 : reversed = 01
		reversed = reversed | (n & 1);	// Add the least significant bit of n to reversed

		//ex: 22 >> 1 => 10110 >> 1 => 1011 (decimal aproach : it devide 22 by 2)
		n >>= 1;	// Shift n to the right to process the next bit
	}
	return reversed >>> 0; // Ensure the result is treated as an unsigned 32-bit integer
	*/
}
