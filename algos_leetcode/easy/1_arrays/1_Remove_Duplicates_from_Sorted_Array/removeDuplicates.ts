type removeDuplicatesReturnT = {
  count: number,
  nums: (number | null)[]
}

export function removeDuplicates(nums: (number | null)[]): removeDuplicatesReturnT {
  if (nums.length === 0) return {count: 0, nums: []}
  
  let countUnique = 1
  let temp: number | null;
  
  for(let i = 1; i < nums.length; i++) {
      temp = nums[i - 1]
      
      if(i > countUnique) nums[i - 1] = null;
      
      if (nums[i] !== temp) {
          nums[countUnique] = nums[i]
          countUnique++
      }

      if(i === nums.length - 1 && countUnique <= i) nums[i] = null;
  }

  return {count: countUnique, nums};
};