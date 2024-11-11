export function generete(numRows: number): number[][] {
	if (numRows === 0) return [];
	const triangle = [[1]];
	for (let i = 1; i < numRows; i++) {
		const prevRow = triangle[i - 1];
		const newRow = [];
		newRow.push(1);
		for (let j = 0; j < i - 1; j++) {
			newRow.push(prevRow[j] + prevRow[j + 1]);
		}
		newRow.push(1);
		triangle.push(newRow);
	}
	return triangle;
}
