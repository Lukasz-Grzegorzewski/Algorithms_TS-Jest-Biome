import type { TreeNode } from "./TreeNode.class";

/*
	Time: 				=> O(n)
		- O(n)
	Space: 				=> O(n)
		- Best: O(log(n)),
		- Worst: O(n)
*/
export function isValidBST_Recursive_TOn_S0n(root: TreeNode | null): boolean {
	function isValidSubBST(
		node: TreeNode | null,
		leftVal: number,
		rightVal: number,
	): boolean {
		if (!node) return true;
		if (leftVal >= node.val || node.val >= rightVal) return false;

		return (
			isValidSubBST(node.left, leftVal, node.val) &&
			isValidSubBST(node.right, node.val, rightVal)
		);
	}

	return isValidSubBST(
		root,
		Number.NEGATIVE_INFINITY,
		Number.POSITIVE_INFINITY,
	);
}

/*
	Time:  				=> O(n)
		-	O(2n) 
	Space: 				=> O(n)
		- Recursivity : 
			* Best: O(log(n)),
			* Worst: O(n)
		- Array: O(n)
*/
export function isValidBST_Recursive_TO2n_S0n(root: TreeNode | null): boolean {
	function fillValuesIntoStack(node: TreeNode | null, stack: number[]): void {
		if (!node) return;

		fillValuesIntoStack(node.left, stack);
		stack.push(node.val);
		fillValuesIntoStack(node.right, stack);
	}

	const stackValues: number[] = [];
	fillValuesIntoStack(root, stackValues)

	for (let i = 0; i < stackValues.length - 1; i++) {
		const current = stackValues[i];
		const next = stackValues[i + 1];

		if (current >= next) return false
	}

	return true;
}
