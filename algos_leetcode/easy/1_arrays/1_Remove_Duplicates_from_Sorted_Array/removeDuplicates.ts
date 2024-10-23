type removeDuplicatesReturnT = {
  count: number,
  nums: (number | null)[]
}

export function removeDuplicates(nums: (number | null)[]): removeDuplicatesReturnT {
  return {count: 0, nums};
};