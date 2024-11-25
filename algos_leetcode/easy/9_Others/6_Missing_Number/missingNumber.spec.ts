import { describe, it, expect } from "@jest/globals";
import { missingNumber } from "./missingNumber";

describe("MISSING NUMBER: ", () => {
	it("should return missing 2", async () => {
		const nums = [3, 0, 1];
		const output = 2;
		expect(missingNumber(nums)).toEqual(output);
	});

	it("should return missing 2 at the end", async () => {
		const nums = [0, 1];
		const output = 2;
		expect(missingNumber(nums)).toEqual(output);
	});

	it("should return 8", async () => {
		const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
		const output = 8;
		expect(missingNumber(nums)).toEqual(output);
	});

	it("should return 0", async () => {
		const nums = [1];
		const output = 0;
		expect(missingNumber(nums)).toEqual(output);
	});
});
