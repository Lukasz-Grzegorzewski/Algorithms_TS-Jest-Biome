export function reverseInteger(x: number): number {
	let reversed = 0;
	while (x !== 0) {
		const lastDigit = x % 10;
		/*  
      - JS converts x into 32 bit number and remove the decimal part
        after "OR" operation it comes back to number
      - alternative : Math.trunc()
    */
		x = (x / 10) | 0;

		if ((reversed | 0) !== reversed) return 0;
		reversed = reversed * 10 + lastDigit;
	}
	return reversed;

	/* 

  const a = [...`${Math.abs(x)}`];

  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - 1 - i])
      [a[i], a[a.length - 1 - i]] = [a[a.length - 1 - i], a[i]];
  }

  const result = Number(a.join('')) * (x < 0 ? -1 : 1);
  return -(2 ** 31) < result && result < 2 ** 31 - 1 ? result : 0;
  */
}
