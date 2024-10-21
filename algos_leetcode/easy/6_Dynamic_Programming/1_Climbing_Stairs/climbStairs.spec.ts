import { describe, it, expect } from "@jest/globals";
import { climbStairs } from "./climbStairs";

describe("CLIMB STAIRS: ", () => {
	it("should return 2", async () => {
		const n = 2;
		/*
		|1| 1 + 1 
		|2| 2
		*/
		expect(climbStairs(n)).toBe(2);
	});

	it("should return 3", async () => {
		const n = 3;
		/*
		|1| 1 + 1 + 1
		|2| 1 + 2
		|3| 2 + 1
		*/
		expect(climbStairs(n)).toBe(3);
	});
});
