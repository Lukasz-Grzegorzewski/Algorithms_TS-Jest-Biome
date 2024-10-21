import { describe, it, expect } from "@jest/globals";
import { Solution } from "./shuffleArray";
import _ from "lodash";

describe("SHUFFLE ARRAY: ", () => {
	it("should return a shuffle of [1, 2, 3]", async () => {
		const nums = [1, 2, 3];
		
		const obj = new Solution(nums);
		const shuffled = obj.shuffle();

		expect(obj.reset()).toBe(nums)
		expect(_.difference(nums, shuffled)).toHaveLength(0);
	});

	it("should return a shuffle of [1, 3, 5, 9, 11, 15, 16, 21]", async () => {
		const nums = [1, 3, 5, 9, 11, 15, 16, 21];
		
		const obj = new Solution(nums);
		const shuffled = obj.shuffle();

		expect(obj.reset()).toBe(nums)
		expect(_.difference(nums, shuffled)).toHaveLength(0);
	});
});
