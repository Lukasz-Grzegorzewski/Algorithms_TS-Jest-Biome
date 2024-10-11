import { describe, it, expect } from "@jest/globals";
import { TreeNode } from "./TreeNode.class";
import { isValidBST_Recursive_TO2n_S0n, isValidBST_Recursive_TOn_S0n } from "./isBinarySearchTree";

describe("RECURSIVE Time: On, Space: On => Validate Binary Search Tree", () => {
	it("should return true for [2,1,3]", async () => {
		const el3 = new TreeNode(3);
		const el2 = new TreeNode(1);
		const root = new TreeNode(2, el2, el3);
		/*
						2
					 / \
					1   3
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeTruthy();
	});

	it("should return false for [,4,2,8,1,3,6,10,5,7,9,11]", async () => {
		const el11 = new TreeNode(11);
		const el10 = new TreeNode(9);
		const el9 = new TreeNode(7);
		const el8 = new TreeNode(5);
		const el7 = new TreeNode(10, el10, el11);
		const el6 = new TreeNode(6, el8, el9);
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(1);
		const el3 = new TreeNode(8, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(4, el2, el3);
		/*
						 4
					 /   \
				 2       8
				/ \     / \
			 1   3  6    10
						 / \   / \
				    5   7 9   11
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeTruthy();
	});

	it("should return true for [2]", async () => {
		const root = new TreeNode(2);
		/*
        		2
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeTruthy();
	});

	it("should return true for [0,-1]", async () => {
		const el2 = new TreeNode(-1);
		const root = new TreeNode(0, el2);
		/*
						 0
					 /
				 -1
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeTruthy();
	});

	it("should return true for [5,1,6,3,7]", async () => {
		const el5 = new TreeNode(7);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(6, el4, el5);
		const el2 = new TreeNode(1);
		const root = new TreeNode(5, el2, el3);
		/*
					 5
				 /   \
				1     6
						 / \
						3   7
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeFalsy();
	});


	it("should return false for [1,1]", async () => {
		const el2 = new TreeNode(1);
		const root = new TreeNode(1, el2);
		/*
						 1
					 /
					1
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeFalsy();
	});

	it("should return false for [4,2,8,1,3,6,10,5,8,9,11]", async () => {
		const el11 = new TreeNode(11);
		const el10 = new TreeNode(9);
		const el9 = new TreeNode(8);
		const el8 = new TreeNode(5);
		const el7 = new TreeNode(10, el10, el11);
		const el6 = new TreeNode(6, el8, el9);
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(1);
		const el3 = new TreeNode(8, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(4, el2, el3);
		/*
						 4
					 /   \
				 2       8
				/ \     / \
			 1   3  6    10
						 / \   / \
				    5   8 9   11
    */
		expect(isValidBST_Recursive_TOn_S0n(root)).toBeFalsy();
	});
});

describe("RECURSIVE Time: O2n, Space: On => Validate Binary Search Tree", () => {
	it("should return true for [2,1,3]", async () => {
		const el3 = new TreeNode(3);
		const el2 = new TreeNode(1);
		const root = new TreeNode(2, el2, el3);
		/*
						2
					 / \
					1   3
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeTruthy();
	});

	it("should return false for [,4,2,8,1,3,6,10,5,7,9,11]", async () => {
		const el11 = new TreeNode(11);
		const el10 = new TreeNode(9);
		const el9 = new TreeNode(7);
		const el8 = new TreeNode(5);
		const el7 = new TreeNode(10, el10, el11);
		const el6 = new TreeNode(6, el8, el9);
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(1);
		const el3 = new TreeNode(8, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(4, el2, el3);
		/*
						 4
					 /   \
				 2       8
				/ \     / \
			 1   3  6    10
						 / \   / \
				    5   7 9   11
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeTruthy();
	});

	it("should return true for [2]", async () => {
		const root = new TreeNode(2);
		/*
        		2
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeTruthy();
	});

	it("should return true for [0,-1]", async () => {
		const el2 = new TreeNode(-1);
		const root = new TreeNode(0, el2);
		/*
						 0
					 /
				 -1
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeTruthy();
	});

	it("should return true for [5,1,6,3,7]", async () => {
		const el5 = new TreeNode(7);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(6, el4, el5);
		const el2 = new TreeNode(1);
		const root = new TreeNode(5, el2, el3);
		/*
					 5
				 /   \
				1     6
						 / \
						3   7
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeFalsy();
	});


	it("should return false for [1,1]", async () => {
		const el2 = new TreeNode(1);
		const root = new TreeNode(1, el2);
		/*
						 1
					 /
					1
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeFalsy();
	});

	it("should return false for [4,2,8,1,3,6,10,5,8,9,11]", async () => {
		const el11 = new TreeNode(11);
		const el10 = new TreeNode(9);
		const el9 = new TreeNode(8);
		const el8 = new TreeNode(5);
		const el7 = new TreeNode(10, el10, el11);
		const el6 = new TreeNode(6, el8, el9);
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(1);
		const el3 = new TreeNode(8, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(4, el2, el3);
		/*
						 4
					 /   \
				 2       8
				/ \     / \
			 1   3  6    10
						 / \   / \
				    5   8 9   11
    */
		expect(isValidBST_Recursive_TO2n_S0n(root)).toBeFalsy();
	});
});