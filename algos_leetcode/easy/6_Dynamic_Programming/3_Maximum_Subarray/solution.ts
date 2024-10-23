export function maxSubArray(nums: number[]): number {
	let sum = 0;
	let maxSum = nums[0];

	for (const curr of nums) {
		sum += curr;
		if (maxSum < sum) maxSum = sum;
		if (sum < 0) sum = 0;
	}
	return maxSum;
}
