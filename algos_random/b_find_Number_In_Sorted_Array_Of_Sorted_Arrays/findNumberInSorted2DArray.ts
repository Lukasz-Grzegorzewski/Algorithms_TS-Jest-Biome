export const findNumber = (number: number, array: number[][]) => {
	for (let i = 0; i < array.length; i++) {
		const innerArray = array[i];
		if (innerArray.length === 0) continue;
		if (innerArray[0] > number) return false;
		if (innerArray[innerArray.length - 1] >= number)
			return binarySearch(number, innerArray);
	}
	return false;
};

const binarySearch = (target: number, array: number[]) => {
	let left = 0;
	let right = array.length - 1;
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (array[middle] === target) return true;
		if (array[middle] > target) right = middle - 1;
		else {
			left = middle + 1;
		}
	}
	return false;
};
