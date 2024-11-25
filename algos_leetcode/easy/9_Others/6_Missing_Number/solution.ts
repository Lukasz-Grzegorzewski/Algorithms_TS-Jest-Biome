export function missingNumber(nums: number[]): number {
	let sum = ((nums.length + 1) * nums.length) / 2;
	for (let i = 0; i < nums.length; i++) sum -= nums[i];
	return sum;
}
