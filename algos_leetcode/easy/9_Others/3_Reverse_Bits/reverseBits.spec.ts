import { describe, it, expect } from "@jest/globals";
import { reverseBits } from "./reverseBits";

describe("REVERSE BITS: ", () => {
	it("should return 964176192 for n = 43261596", async () => {
		const n = 43261596; // 00000010100101000001111010011100;
		const output = 964176192; // 00111001011110000010100101000000
		expect(reverseBits(n)).toBe(output);
	});

	// it("should return 4294967293 for n = 3221225471", async () => {
	// 	const n = 4294967293;	// 11111111111111111111111111111101;
	// 	const output = 3221225471;	// 10111111111111111111111111111111
	// 	expect(reverseBits(n)).toBe(output);
	// });
});
