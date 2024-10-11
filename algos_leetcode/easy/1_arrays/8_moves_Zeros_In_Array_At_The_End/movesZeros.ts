export function movesZeros(nums: number[]): number[] {
  if(nums.length === 0) return []
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[pointer] = nums[i];
      if(pointer !== i) nums[i] = 0;
      pointer++;
    }
  }
  return nums;
}
