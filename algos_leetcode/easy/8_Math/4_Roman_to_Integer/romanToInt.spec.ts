import { describe, it, expect } from "@jest/globals";
import { romanToInt } from "./romanToInt";

describe("ROMAN TO INTEGER: ", () => {
	it("should return 3 input = 'III' ", async () => {
		const input = "III";
		expect(romanToInt(input)).toBe(3);
	});

	it("should return 58 input = 'LVIII' ", async () => {
		const input = "LVIII";
		expect(romanToInt(input)).toBe(58);
	});

	it("should return 1994 input = 'MCMXCIV' ", async () => {
		const input = "MCMXCIV";
		expect(romanToInt(input)).toBe(1994);
	});
});
