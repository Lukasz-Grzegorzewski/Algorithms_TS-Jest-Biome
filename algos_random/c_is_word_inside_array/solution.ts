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

			return this.search(word, index + 1, node.children.get(char)!);
		}

		return false;
	}
}

export function findWord(words: string[], targetWord: string): boolean {
	const tree = new Trie(words);

	return tree.search(targetWord);
}
