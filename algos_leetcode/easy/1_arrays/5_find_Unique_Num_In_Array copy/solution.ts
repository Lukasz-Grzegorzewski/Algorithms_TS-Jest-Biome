export function uniqueNum(nums: number[]): number | undefined {
  if(nums.length === 0) return undefined

  let unique = 0;
  for(let i = 0; i < nums.length; i++){
    unique ^= nums[i]
  }

  return unique;
}
