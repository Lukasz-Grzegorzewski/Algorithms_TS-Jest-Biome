import { describe, it, expect } from "@jest/globals";
import { isPowerOfThree } from "./isPowerOfThree";
import _ from "lodash";

describe("POWER OF THREE: ", () => {
	it("should return true for n = 9", async () => {
		const n = 9;
		expect(isPowerOfThree(n)).toBeTruthy();
	});
	
	it("should return true for n = 27", async () => {
		const n = 27;
		expect(isPowerOfThree(n)).toBeTruthy();
	});
	
	it("should return false for n = 0", async () => {
		const n = 0;
		expect(isPowerOfThree(n)).toBeFalsy();
	});

	it("should return false for n = -1", async () => {
		const n = -1;
		expect(isPowerOfThree(n)).toBeFalsy();
	});
});
