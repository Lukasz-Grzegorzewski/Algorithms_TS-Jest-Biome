export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] += 1;
      return digits;
    }
    if(i === 0) digits.unshift(1);
  }
  return digits;
}
