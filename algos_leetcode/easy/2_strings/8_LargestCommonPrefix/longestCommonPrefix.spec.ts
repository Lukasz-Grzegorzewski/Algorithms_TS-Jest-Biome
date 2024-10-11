import { describe, it, expect } from "@jest/globals";
import { longestCommonPrefix } from "./longestCommonPrefix";

describe("Find the longest common prefix string amongst an array of strings", () => {
	it("should return the longest common prefix", async () => {
		const strings = ["flower","flow","flight"]
		expect(longestCommonPrefix(strings)).toBe("fl");
	});

	it("should return empty string", async () => {
		const strings = ["dog","racecar","car"]
		expect(longestCommonPrefix(strings)).toBe("");
	});
});
