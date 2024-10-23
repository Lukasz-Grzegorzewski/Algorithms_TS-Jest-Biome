export function rob(nums: number[]): number {
	let prevSum = 0;
	let currSum = nums[0];
	for (let i = 1; i < nums.length; i++)
		[prevSum, currSum] = [currSum, Math.max(nums[i] + prevSum, currSum)];
	return currSum;
}
