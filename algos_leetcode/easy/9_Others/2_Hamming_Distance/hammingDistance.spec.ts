import { describe, it, expect } from "@jest/globals";
import { hammingDistance } from "./hammingDistance";

describe("HAMMING DISTANCE: ", () => {
	it("should return 2 for x = 1 and y = 4", async () => {
		const x = 1;
		const y = 4;
		expect(hammingDistance(x, y)).toBe(2);
	});
	
	it("should return 1 for x = 3 and y = 1", async () => {
		const x = 3;
		const y = 1;
		expect(hammingDistance(x, y)).toBe(1);
	});

	it("should return 2 for x = 4 and y = 2", async () => {
		const x = 4;
		const y = 2;
		expect(hammingDistance(x, y)).toBe(2);
	});
});
