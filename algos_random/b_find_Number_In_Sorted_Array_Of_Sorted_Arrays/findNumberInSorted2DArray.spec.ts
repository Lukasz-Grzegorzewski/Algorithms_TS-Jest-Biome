import { describe, it, expect } from "@jest/globals";
import { findNumber } from "./findNumberInSorted2DArray";

describe("Find number in sorted 2D array ", () => {
	it("should not find a target number in sorted 2D array", async () => {
		const array = [[1, 5, 8, 9, 11, 21], [], [68, 78, 89, 99]];
		const target = 67;
		expect(findNumber(target, array)).toBe(false);
	});

	it("should find a target number in sorted 2D array", async () => {
		const array = [[1, 5, 8, 9, 11, 21], [], [68, 78, 89, 99]];
		const target = 68;
		expect(findNumber(target, array)).toBe(true);
	});

	it("should not find a target number in sorted 2D array", async () => {
		const array = [[], [], [68, 78, 89, 99]];
		const target = 99;
		expect(findNumber(target, array)).toBe(true);
	});

	it("should not find a target number in sorted 2D array", async () => {
		const array = [[], [], []];
		const target = 50;
		expect(findNumber(target, array)).toBe(false);
	});
});
