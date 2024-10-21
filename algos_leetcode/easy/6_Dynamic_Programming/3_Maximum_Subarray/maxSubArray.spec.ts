import { describe, it, expect } from "@jest/globals";
import { maxSubArray } from "./maxSubArray";

describe("MAXIMUM SUBARRAY: ", () => {
	it("should return 6", async () => {
		const nums = [-2,1,-3,4,-1,2,1,-5,4]
		expect(maxSubArray(nums)).toBe(6);
	});

	it("should return 1", async () => {
		const nums = [1]
		expect(maxSubArray(nums)).toBe(1);
	});

	it("should return 23", async () => {
		const nums = [5,4,-1,7,8]
		expect(maxSubArray(nums)).toBe(23);
	});

	it("should return -5", async () => {
		const nums = [-5,-6,-7,-8]
		expect(maxSubArray(nums)).toBe(-5);
	});
});
