export function maxProfit(prices: number[]): number {
	let left = 0;
	let rigth = 1;
	let maxProfit = 0;

	while (rigth < prices.length) {
		if (prices[left] < prices[rigth]) {
			const profit = prices[rigth] - prices[left];
			if (maxProfit < profit) maxProfit = profit;
		} else left = rigth;
		rigth++;
	}

	return maxProfit;
}
