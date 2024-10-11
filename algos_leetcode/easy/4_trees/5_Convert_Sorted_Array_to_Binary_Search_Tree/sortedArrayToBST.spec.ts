import { describe, it, expect } from "@jest/globals";
import { TreeNode } from "./TreeNode.class";
import { sortedArrayToBST } from "./sortedArrayToBST";

describe("Sorted array => TreeNode BST(Binary Search Tree) that is balanced to maximum.", () => {
	it("should return TreeNode [0,-3,9,-10,null,5,null] || [0,-10,5,null,-3,null,9]", async () => {
		const el5 = new TreeNode(5);
		const el4 = new TreeNode(-10);
		const el3 = new TreeNode(9, el5);
		const el2 = new TreeNode(-3, el4);
		const root = new TreeNode(0, el2, el3);
		/*
							0
						/   \
					-3      9
				/   		/
			-10   	5
    */

		const el5_2 = new TreeNode(9);
		const el4_2 = new TreeNode(-3);
		const el3_2 = new TreeNode(5, null, el5_2);
		const el2_2 = new TreeNode(-10, null, el4_2);
		const root2 = new TreeNode(0, el2_2, el3_2);
		/*
							0
						/   \
					-10     5
				    \   		\
			        -3      9
    */
		const res = sortedArrayToBST([-10, -3, 0, 5, 9]);
		expect(
			JSON.stringify(res) === JSON.stringify(root) ||
				JSON.stringify(res) === JSON.stringify(root2),
		).toBeTruthy();
	});

	it("should return TreeNode [1,null,3]  || [3,1,null]", async () => {
		const el2 = new TreeNode(1);
		const root = new TreeNode(3, el2);
		/*
							3
						/
					1
    */

		const el2_2 = new TreeNode(3);
		const root2 = new TreeNode(1, null, el2_2);
		/*
							1
								\
									3
    */
		const res = sortedArrayToBST([1, 3]);
		expect(
			JSON.stringify(res) === JSON.stringify(root) ||
				JSON.stringify(res) === JSON.stringify(root2),
		).toBeTruthy();
	});

	it("should return TreeNode [1]", async () => {
		const root = new TreeNode(1);
		/*
							1
    */
		expect(sortedArrayToBST([1])).toEqual(root);
	});

	it("should return null", async () => {
		const root = null
		/*
							null
    */
		expect(sortedArrayToBST([])).toEqual(root);
	});
});
