export function mergeArrays(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void {
	let lastM = m - 1;
	let lastN = n - 1;
	let lastNums1 = n + m - 1;

	while (lastM >= 0 && lastN >= 0) {
		if (nums1[lastM] >= nums2[lastN]) {
			nums1[lastNums1] = nums1[lastM];
			lastM--;
		} else {
			nums1[lastNums1] = nums2[lastN];
			lastN--;
		}
		lastNums1--;
	}

	while (lastN >= 0) {
		nums1[lastNums1] = nums2[lastN];
		lastNums1--;
		lastN--;
	}

	/*
	if (nums2.length === 0) return;

	const queue: number[] = [];
	let tN: number | null = nums2.shift()!;

	for (let i = 0; i < nums1.length; i++) {
		if (i < m) {
			if (tN !== null && queue.length === 0 && tN < nums1[i]) {
				queue.push(nums1[i]);
				nums1[i] = tN;
				tN = nums2.length > 0 ? nums2.shift()! : null;
			} else if (tN !== null && queue.length > 0) {
				if (tN < nums1[i] || queue[0] < nums1[i]) {
					if (queue[0] <= tN) {
						queue.push(nums1[i]);
						nums1[i] = queue.shift()!;
					} else {
						queue.push(nums1[i]);
						nums1[i] = tN;
						tN = nums2.length > 0 ? nums2.shift()! : null;
					}
				}
			} else if (tN === null && queue.length > 0) {
				queue.push(nums1[i]);
				if (queue[0] <= nums1[i]) nums1[i] = queue.shift()!;
			}
		} else if (queue.length > 0 && tN === null) nums1[i] = queue.shift()!;
		else {
			if (queue.length > 0 && tN !== null) {
				if (queue[0] <= tN) nums1[i] = queue.shift()!;
				else {
					nums1[i] = tN;
					tN = nums2.length > 0 ? nums2.shift()! : null;
				}
			} else if (tN !== null) {
				nums1[i] = tN;
				if (nums2.length > 0) tN = nums2.shift()!;
			}
		}
	}
		*/
}
