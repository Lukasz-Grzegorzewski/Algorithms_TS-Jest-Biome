import type { TreeNode } from "./TreeNode.class";

/*
	Time: => O(n)
	Space: => O(n)
*/
export function LevelOrder(root: TreeNode | null): number[][] {
	const levels: number[][] = [];

	const queue: (TreeNode | null)[] = [root];

	while (queue.length > 0) {
		const levelCurrent: number[] = [];
		const length = queue.length;
		for (let i = 0; i < length; i++) {
			const parent = queue.shift()!;
			if (parent.left) queue.push(parent.left);
			if (parent.right) queue.push(parent.right);
			levelCurrent.push(parent.val);
		}
		levels.push(levelCurrent);
	}
	return levels;
}
