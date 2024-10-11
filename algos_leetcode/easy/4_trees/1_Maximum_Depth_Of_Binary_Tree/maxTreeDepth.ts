import type { TreeNode } from "./TreeNode.class";

// Recursive DFS (Depth First Search)
export function maxTreeDepth_Recursive_DFS(root: TreeNode | null): number {
	if (!root) return 0;

	return (
		1 +
		Math.max(
			maxTreeDepth_Recursive_DFS(root.left),
			maxTreeDepth_Recursive_DFS(root.right),
		)
	);
}

// Iterative BFS (Breadth First Search)
export function maxTreeDepth_Iterative_BFS(root: TreeNode | null): number {
  if(root === null) return 0

	let level = 0;
	const queue: (TreeNode | null)[] = [root];
	while (queue.length > 0) {
		for (let i = 0; i < queue.length; i++) {
			const parent = queue.shift()!;
			if (parent.left) queue.push(parent.left);
			if (parent.right) queue.push(parent.right);
		}
    level++;
	}

	return level;
}

// Iterative DFS (Depth First Search)
export function maxTreeDepth_Iterative_DFS(root: TreeNode | null): number {
	let countDepth = 0;
	const stack: [TreeNode | null, number][] = [[root, 1]];

	while (stack.length > 0) {
		const [node, depth] = stack.pop()!;

		if (node) {
			countDepth = Math.max(countDepth, depth);
      stack.push([node.left, depth + 1])
      stack.push([node.right, depth + 1])
		}
    
	}

	return countDepth;
}
