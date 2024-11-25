export function isValidParentheses(s: string): boolean {
	type OpenedType = "(" | "{" | "[";
	type ClosedType = ")" | "}" | "]";

	const stack: string[] = [];
	const matchingPairs: Record<ClosedType, OpenedType> = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const char of s) {
		if (char === "(" || char === "{" || char === "[") {
			stack.push(char as OpenedType);
		} else {
			if (stack.pop() !== matchingPairs[char as ClosedType]) return false;
		}
	}

	return true;
}
