import { describe, it, expect } from "@jest/globals";
import { hammingWeight } from "./NumberOf1Bits";

describe("NUMBER OF 1 BITS: ", () => {
	it("should return 3 for n = 11", async () => {
		const n = 11;
		expect(hammingWeight(n)).toBe(3);
	});
	
	it("should return 1 for n = 128", async () => {
		const n = 128;
		expect(hammingWeight(n)).toBe(1);
	});

	it("should return 30 for n = 2147483645", async () => {
		const n = 2147483645;
		expect(hammingWeight(n)).toBe(30);
	});
});
