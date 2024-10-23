export function fizzBuzz(n: number): string[] {
	const array: string[] = [];
	for (let i = 1; i <= n; i++) {
		array[i - 1] =
			i % 3 === 0 && i % 5 === 0
				? "FizzBuzz"
				: i % 3 === 0
					? "Fizz"
					: i % 5 === 0
						? "Buzz"
						: `${i}`;
	}
	return array;
}
