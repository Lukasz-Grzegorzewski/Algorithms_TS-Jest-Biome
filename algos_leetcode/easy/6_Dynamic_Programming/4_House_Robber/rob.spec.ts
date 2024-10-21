import { describe, it, expect } from "@jest/globals";
import { rob } from "./rob";

describe("HOUSE ROBBER: ", () => {
	it("should return 4", async () => {
		const nums = [1, 2, 3, 1];
		expect(rob(nums)).toBe(4);
	});

	it("should return 12", async () => {
		const nums = [2, 7, 9, 3, 1];
		expect(rob(nums)).toBe(12);
	});

	it("should return 12", async () => {
		const nums = [3, 1, 1, 3];
		expect(rob(nums)).toBe(6);
	});
});
