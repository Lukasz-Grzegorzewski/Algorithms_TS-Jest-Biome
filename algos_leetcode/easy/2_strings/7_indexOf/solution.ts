export function customIndexOf(s: string, t: string): number {
	// FIRST SOLUTION
	// return s.indexOf(t);
	
	let targetLetterIndex = 0;
	const startIndexes: number[] = [];
	for (let i = 0; i < s.length; i++) {
		const sourceLetter = s[i];

		if (sourceLetter === t[targetLetterIndex]) {
			if (targetLetterIndex > 0 && t[0] === sourceLetter) startIndexes.push(i);
			if (t.length === targetLetterIndex + 1) return i - targetLetterIndex
			targetLetterIndex++;
		} else if (targetLetterIndex > 0 ) {
			if(startIndexes.length === 0 && sourceLetter === t[0]) i--
			const newStartIndex = startIndexes.shift();
			if (newStartIndex) i = newStartIndex - 1;
			targetLetterIndex = 0;
		}
	}

	return -1;
}
