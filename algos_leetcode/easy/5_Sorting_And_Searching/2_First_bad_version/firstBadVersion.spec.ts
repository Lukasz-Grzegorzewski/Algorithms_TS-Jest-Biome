import { describe, it, expect, jest } from "@jest/globals";
import { solution } from "./firstBadVersion";


describe("FIND FIRST BAD", () => {
	it("should return 4 as the first bad version", () => {
		// Mock the isBadVersion API
		const mockIsBadVersion = jest.fn((version: number) => {
			return version >= 4;  // Version 4 and above are bad
		});

		// Pass the mock to the solution function
		const findFirstBad = solution(mockIsBadVersion);

		// Test with n = 5
		expect(findFirstBad(5)).toBe(4);
	});
});
