import { describe, it, expect } from "@jest/globals";
import { maxProfit } from "./maxProfit";

describe("MAX PROFIT: ", () => {
	it("should return 2", async () => {
		const prices = [7, 1, 5, 3, 6, 4];
		expect(maxProfit(prices)).toBe(5);
	});

	it("should return 2", async () => {
		const prices = [7, 6, 4, 3, 1];
		expect(maxProfit(prices)).toBe(0);
	});
});
