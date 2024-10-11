/* FIRST SOLUTION
export function findWord(words: string[], targetWord: string): boolean {
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (word.length !== targetWord.length) continue;
		for (let j = 0; j < word.length; j++) {
			if(targetWord[j] !== word[j] && targetWord[j] !== "*") break
			if(j === word.length - 1) return true
		}
	}
	return false;
 }
*/

/* SECOND SOLUTION */
class TrieNode {
	children: Map<string, TrieNode> = new Map();
	isEndOfWord = false;
}

class Trie {
	root: TrieNode = new TrieNode();

	constructor(words: string[]) {
		for (const word of words) {
			let node = this.root;
			for (const char of word) {
				if (!node.children.has(char)) {
					node.children.set(char, new TrieNode());
				}
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				node = node.children.get(char)!;
			}
			node.isEndOfWord = true;
		}
	}

	search(word: string, index = 0, node: TrieNode = this.root): boolean {
		if (index === word.length) return node.isEndOfWord;

		const char = word[index];
		if (char === "*") {
			for (const children of node.children.values()) {
				if (this.search(word, index + 1, children)) {
					return true;
				}
			}
		} else {
			if (!node.children.has(char)) return false;

			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			return this.search(word, index + 1, node.children.get(char)!);
		}

		return false;
	}
}

// Główna funkcja
export function findWord(words: string[], targetWord: string): boolean {
	const tree = new Trie(words);

	return tree.search(targetWord);
}
