import { describe, it, expect } from "@jest/globals";
import { myAtoi } from "./myAtoi";

describe("Converting a string to a 32-bit signed integer", () => {
	it("should return number after string-32bit Integer convertion", async () => {
		const s = "42";
		expect(myAtoi(s)).toBe(42);
	});
  
	it("should return number after string-32bit Integer convertion", async () => {
		const s = " -042";
		expect(myAtoi(s)).toBe(-42);
	});

	it("should return number after string-32bit Integer convertion", async () => {
		const s = " +042";
		expect(myAtoi(s)).toBe(42);
	});

	it("should return number after string-32bit Integer convertion", async () => {
		const s = "1337999999999999999c0d3";
		expect(myAtoi(s)).toBe(2147483647);
	});

	it("should return number after string-32bit Integer convertion", async () => {
		const s = "-1337999999999999999c0d3";
		expect(myAtoi(s)).toBe(-2147483648);
	});

	it("should return number after string-32bit Integer convertion", async () => {
		const s = "0-1";
		expect(myAtoi(s)).toBe(0);
	});
});
