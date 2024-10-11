import { describe, it, expect } from "@jest/globals";
import { TreeNode } from "./TreeNode.class";
import { LevelOrder } from "./levelOrder";

describe("ITERATIVE BTS(Breadth First Search => Binary Tree Level Order Traversal", () => {
	it("should return nested array that contains arrays of each level of the tree values. [3,9,2,null,null,4,8] => [[3],[9,2],[4,8]]", async () => {
		const el5 = new TreeNode(8);
		const el4 = new TreeNode(4);
		const el3 = new TreeNode(2, el4, el5);
		const el2 = new TreeNode(9);
		const root = new TreeNode(3, el2, el3);
		/*
						3
					/   \
				9       2
							/   \
						4       8
    */
		expect(LevelOrder(root)).toEqual([[3], [9, 2], [4, 8]]);
	});

	it("should return nested array that contains arrays of each level of the tree values. [1,4,7,5,null,3,null,9] => [[1],[4,7],[5,3,9]]", async () => {
		const el6 = new TreeNode(9);
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(5);
		const el3 = new TreeNode(7, null, el6);
		const el2 = new TreeNode(4, el4, el5);
		const root = new TreeNode(1, el2, el3);
		/*
								1
							/   \
						4       7
					/   \       \
				5       3       9
    */
		expect(LevelOrder(root)).toEqual([[1], [4, 7], [5, 3, 9]]);
	});
});
