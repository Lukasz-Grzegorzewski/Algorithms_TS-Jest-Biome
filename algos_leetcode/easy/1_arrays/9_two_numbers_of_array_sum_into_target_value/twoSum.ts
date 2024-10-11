export function twoSums(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const missing = target - number;

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (map.has(missing)) return [map.get(missing)!, i];

    map.set(number, i);
  }
  return [];
}
