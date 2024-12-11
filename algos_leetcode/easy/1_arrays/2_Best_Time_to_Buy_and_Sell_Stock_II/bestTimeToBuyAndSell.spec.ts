import { describe, it, expect } from "@jest/globals";
import { maxProfit } from "./bestTimeToBuyAndSell";

describe("Best Time to Buy and Sell Stock II", () => {
	it("should return 5 for [7, 1, 5, 3, 6, 4]", async () => {
		const prices = [7, 1, 5, 3, 6, 4];
		const output = 7;
		expect(maxProfit(prices)).toBe(output);
	});

	it("should return 4 for [1,2,3,4,5]", async () => {
		const prices = [1, 2, 3, 4, 5];
		const output = 4;
		expect(maxProfit(prices)).toBe(output);
	});

	it("should return 0 for [7,6,4,3,1]", async () => {
		const prices = [7, 6, 4, 3, 1];
		const output = 0;
		expect(maxProfit(prices)).toBe(output);
	});
});
