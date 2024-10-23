import { TreeNode } from "./TreeNode.class";

/*
	Time: => O(n)
	Space: => O(log(n)) because TreeNode is balanced
*/
function fillSubTrees(
	nums: number[],
	leftPointer: number,
	rightPointer: number,
): TreeNode | null {
	if(leftPointer > rightPointer) return null;
	const half = Math.floor((leftPointer + rightPointer)/2);
	const newNode = new TreeNode(nums[half]);

	newNode.left = fillSubTrees(nums, leftPointer, half - 1);
	newNode.right = fillSubTrees(nums, half + 1, rightPointer);
	return newNode;
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (nums.length === 0) return null;
	return fillSubTrees(nums, 0, nums.length - 1);
}
