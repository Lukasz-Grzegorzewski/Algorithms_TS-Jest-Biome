type removeDuplicatesReturnT = {
	count: number;
	nums: (number | null)[];
};

export function removeDuplicates(
	nums: (number | null)[],
): removeDuplicatesReturnT {
	const noDuplicates: (number | null)[] = [];
	let temp: number | null;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== noDuplicates[noDuplicates.length - 1])
			noDuplicates.push(nums[i]);
	}

	const count = noDuplicates.length;
	noDuplicates.length = nums.length;
	noDuplicates.fill(null, count);

	return { count, nums: noDuplicates };
}
