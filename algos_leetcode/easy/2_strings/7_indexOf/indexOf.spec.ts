import { describe, it, expect } from "@jest/globals";
import { customIndexOf } from "./indexOf";

describe("Finds index of a first occurence of a target inside a string", () => {
	it("should return an index where targer occures first inside a string", async () => {
		const string = "sdbutsad"
		const target = "sad"
		expect(customIndexOf(string, target)).toBe(5);
	});

	it("should return -1 where targer is not found in a string", async () => {
		const string = "leetcode"
		const target = "leeto"
		expect(customIndexOf(string, target)).toBe(-1);
	});

	it("should return an index where targer occures first inside a string", async () => {
		const string = "mississippi";
		const target = "issip";
		expect(customIndexOf(string, target)).toBe(4);
	});

	it("should return an index where targer occures first inside a string", async () => {
		const string = "mississippi";
		const target = "pi";
		expect(customIndexOf(string, target)).toBe(9);
	});

	it("should return -1 where targer is not found in a string", async () => {
		const string = "aaa";
		const target = "aabab";
		expect(customIndexOf(string, target)).toBe(-1);
	});

	it("should return -1 where targer is not found in a string", async () => {
		const string = "babbbbbabb";
		const target = "bbab";
		expect(customIndexOf(string, target)).toBe(5);
	});
});
