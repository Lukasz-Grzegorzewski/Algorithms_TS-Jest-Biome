import { describe, it, expect } from "@jest/globals";
import { isValidParentheses } from "./validParantheses";

describe("VALID PARENTHESES: ", () => {
	it("should return true for '()'", async () => {
		const s = "()";
		const output = true;
		expect(isValidParentheses(s)).toEqual(output);
	});

	it("should return true for '()[]{}'", async () => {
		const s = "()[]{}";
		const output = true;
		expect(isValidParentheses(s)).toEqual(output);
	});

	it("should return false for '(]'", async () => {
		const s = "(]";
		const output = false;
		expect(isValidParentheses(s)).toEqual(output);
	});

	it("should return true for '([])'", async () => {
		const s = "([])";
		const output = true;
		expect(isValidParentheses(s)).toEqual(output);
	});
});
