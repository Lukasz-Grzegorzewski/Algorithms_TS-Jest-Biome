import { describe, it, expect } from "@jest/globals";
import { removeDuplicates } from "./removeDuplicates";

describe('Remove duplicates in array and put them at the end as "null"', () => {
	it('should return an array where duplicates are replaced with "null" at the end', async () => {
		const nums: number[] = [1, 4, 4, 4, 5, 6];
		expect(removeDuplicates(nums)).toEqual({
			count: 4,
			nums: [1, 4, 5, 6, null, null],
		});
	});

	it('should return an array where duplicates are replaced with "null" at the end', async () => {
		const nums: number[] = [1, 1, 1, 1, 4, 4, 4, 5, 6, 7];
		expect(removeDuplicates(nums)).toEqual({
			count: 5,
			nums: [1, 4, 5, 6, 7, null, null, null, null, null],
		});
	});

	it("should return an array as it is", async () => {
		const nums: number[] = [1, 4, 5, 6];
		expect(removeDuplicates(nums)).toEqual({ count: 4, nums: [1, 4, 5, 6] });
	});

	it("should return empty array", async () => {
		const nums: number[] = [];
		expect(removeDuplicates(nums)).toEqual({ count: 0, nums: [] });
	});
});
