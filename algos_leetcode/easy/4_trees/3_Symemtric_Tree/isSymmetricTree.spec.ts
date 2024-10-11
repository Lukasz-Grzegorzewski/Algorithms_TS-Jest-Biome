import { describe, it, expect } from "@jest/globals";
import { TreeNode } from "./TreeNode.class";
import {
	isSymmetricTree_Iterative,
	isSymmetricTree_Recursive,
} from "./isSymmetricTree";

describe("RECURSIVE Is Symmetric Tree", () => {
	it("should return true for [1,2,2,3,4,4,3]", async () => {
		const el7 = new TreeNode(3);
		const el6 = new TreeNode(4);
		const el5 = new TreeNode(4);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(2, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(1, el2, el3);
		/*
						 1
					 /   \
				 2       2
				/ \     / \
			 3   4   4   3
    */
		expect(isSymmetricTree_Recursive(root)).toBeTruthy();
	});

	it("should return false for [1,2,2,null,3,null,3]", async () => {
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(2, null, el5);
		const el2 = new TreeNode(2, null, el4);
		const root = new TreeNode(1, el2, el3);
		/*
						1
					/   \
					2    2
				   \    \
						3    3
    */
		expect(isSymmetricTree_Recursive(root)).toBeFalsy();
	});
});

describe("ITERATIVE Is Symmetric Tree", () => {
	it("should return true for [1,2,2,3,4,4,3]", async () => {
		const el7 = new TreeNode(3);
		const el6 = new TreeNode(4);
		const el5 = new TreeNode(4);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(2, el6, el7);
		const el2 = new TreeNode(2, el4, el5);
		const root = new TreeNode(1, el2, el3);
		/*
						 1
					 /   \
				 2       2
				/ \     / \
			 3   4   4   3
    */
		expect(isSymmetricTree_Iterative(root)).toBeTruthy();
	});

	it("should return false for [1,2,2,null,3,null,3]", async () => {
		const el5 = new TreeNode(3);
		const el4 = new TreeNode(3);
		const el3 = new TreeNode(2, null, el5);
		const el2 = new TreeNode(2, null, el4);
		const root = new TreeNode(1, el2, el3);
		/*
						1
					/   \
					2    2
				   \    \
						3    3
    */
		expect(isSymmetricTree_Iterative(root)).toBeFalsy();
	});
});
