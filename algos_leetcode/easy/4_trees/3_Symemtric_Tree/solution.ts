import type { TreeNode } from "./TreeNode.class";

/*
	Time: => O(n)
	Space: 	=> O(h)
		- Best: O(log(n)),
		- Worst: O(n)
*/
export function isSymmetricTree_Recursive(root: TreeNode | null): boolean {
	function isSubsSymmetric(
		leftSubRoot: TreeNode | null,
		rightSubRoot: TreeNode | null,
	): boolean {
		if (!leftSubRoot && !rightSubRoot) return true;
		if (!leftSubRoot || !rightSubRoot) return false;

		return (
			leftSubRoot.val === rightSubRoot.val &&
			isSubsSymmetric(leftSubRoot.left, rightSubRoot.right) &&
			isSubsSymmetric(leftSubRoot.right, rightSubRoot.left)
		);
	}

	return isSubsSymmetric(root!.left, root!.right);
}

/*
	Time: => O(n)
	Space: => O(n)
*/
export function isSymmetricTree_Iterative(root: TreeNode | null): boolean {
	if (!root) return true;

	const left_SubTree: (TreeNode | null)[] = [root.left];
	const right_SubTree: (TreeNode | null)[] = [root.right];

	while (left_SubTree.length > 0 && right_SubTree.length > 0) {
		const tempLeft: TreeNode | null = left_SubTree.shift()!;
		const tempRight: TreeNode | null = right_SubTree.shift()!;

		if (tempLeft === null && tempRight === null) continue;
		if (tempLeft === null || tempRight === null) return false;
		if (tempLeft.val !== tempRight.val) return false;

		left_SubTree.push(tempLeft.left);
		left_SubTree.push(tempLeft.right);
		right_SubTree.push(tempRight.right);
		right_SubTree.push(tempRight.left);
	}

	return true;
}
