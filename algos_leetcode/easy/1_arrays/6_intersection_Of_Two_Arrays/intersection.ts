export function intersect(nums1: number[], nums2: number[]): number[] {
  
  const countMap = new Map<number, number>();
  for (const num of nums1) countMap.set(num, (countMap.get(num) || 0) + 1);

  const result: number[] = [];
  for (const num of nums2) {
    const fountNum = countMap.get(num);

    if (fountNum && fountNum > 0) {
      result.push(num);
      countMap.set(num, fountNum - 1);
    }
  }
  return result;
}
