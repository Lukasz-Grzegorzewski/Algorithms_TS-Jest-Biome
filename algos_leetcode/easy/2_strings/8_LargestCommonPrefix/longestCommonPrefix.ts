export function longestCommonPrefix(words: string[]): string {
	// FIRST SOLUTION
	// if(words[0].length === 0) return ""
	
	// let prefix = words[0];
	// for (let i = 1; i < words.length; i++) {
	// 	const word = words[i];
	// 	if(word.length === 0) return "";
		
	// 	let tempPrefix = "";
	// 	let z = 0;
	// 	while (prefix[z] === word[z] && z < prefix.length) {				
	// 		tempPrefix += prefix[z];
	// 		z++
	// 	}
	// 	if(prefix.length > tempPrefix.length) prefix = tempPrefix;
	// 	if(prefix.length === 0) return "";
	// }

	// return prefix;

	// SECOND SOLUTION
	if(words[0].length === 0) return ""
	let prefix = words[0];
	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		if(word.length === 0) return "";
		let z = 0;
		while (prefix[z] === word[z] && z < prefix.length && z < word.length) z++
		if(z === 0) return "";
		if(prefix.length > z) prefix = prefix.substring(0, z)
	}
	return prefix;
}
