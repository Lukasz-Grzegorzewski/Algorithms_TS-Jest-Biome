export class Solution {
	original: number[];
	constructor(nums: number[]) {
		this.original = nums;
	}

	reset(): number[] {
		return this.original;
	}

	shuffle(): number[] {
		const shuffled: number[] = [...this.original];

		for (let i = this.original.length - 1; i >= 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]
		}
		return shuffled;
	}
}
