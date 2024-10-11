import { describe, it, expect } from "@jest/globals";
import { TreeNode } from "./TreeNode.class";
import {
	maxTreeDepth_Recursive_DFS,
	maxTreeDepth_Iterative_BFS,
	maxTreeDepth_Iterative_DFS,
} from "./maxTreeDepth";

describe("RECURSIVE DFS (Depth First Search) => Depth of a binary tree", () => {
	it("should return 3 for a level 3 binary tree", async () => {
		const el5 = new TreeNode(7);
		const el4 = new TreeNode(15);
		const el3 = new TreeNode(20, el4, el5);
		const el2 = new TreeNode(9);
		const root = new TreeNode(3, el2, el3);
		/*
        3
       / \
      9   20
         /  \
        15   7
    */
		expect(maxTreeDepth_Recursive_DFS(root)).toBe(3);
	});

	it("should return 2 for a level 2 binary tree", async () => {
		const el2 = new TreeNode(2);
		const root = new TreeNode(1, null, el2);
		/*
        1
         \
          2
    */
		expect(maxTreeDepth_Recursive_DFS(root)).toBe(2);
	});

	it("should return 0 for a level 0 binary tree", async () => {
		const root = null;
		/*
        
    */
		expect(maxTreeDepth_Recursive_DFS(root)).toBe(0);
	});
});

describe("ITERATIVE BFS (Breadth First Search) => Depth of a binary tree", () => {
	it("should return 3 for a level 3 binary tree", async () => {
		const el5 = new TreeNode(7);
		const el4 = new TreeNode(15);
		const el3 = new TreeNode(20, el4, el5);
		const el2 = new TreeNode(9);
		const root = new TreeNode(3, el2, el3);
		/*
        3
       / \
      9   20
         /  \
        15   7
    */
		expect(maxTreeDepth_Iterative_BFS(root)).toBe(3);
	});

	it("should return 2 for a level 2 binary tree", async () => {
		const el2 = new TreeNode(2);
		const root = new TreeNode(1, null, el2);
		/*
        1
         \
          2
    */
		expect(maxTreeDepth_Iterative_BFS(root)).toBe(2);
	});

	it("should return 0 for a level 0 binary tree", async () => {
		const root = null;
		/*
        
    */
		expect(maxTreeDepth_Iterative_BFS(root)).toBe(0);
	});
});

describe("ITERATIVE DFS (Depth First Search) => Depth of a binary tree", () => {
	it("should return 3 for a level 3 binary tree", async () => {
		const el5 = new TreeNode(7);
		const el4 = new TreeNode(15);
		const el3 = new TreeNode(20, el4, el5);
		const el2 = new TreeNode(9);
		const root = new TreeNode(3, el2, el3);
		/*
        3
       / \
      9   20
         /  \
        15   7
    */
		expect(maxTreeDepth_Iterative_DFS(root)).toBe(3);
	});

	it("should return 2 for a level 2 binary tree", async () => {
		const el2 = new TreeNode(2);
		const root = new TreeNode(1, null, el2);
		/*
        1
         \
          2
    */
		expect(maxTreeDepth_Iterative_DFS(root)).toBe(2);
	});

	it("should return 0 for a level 0 binary tree", async () => {
		const root = null;
		/*
        
    */
		expect(maxTreeDepth_Iterative_DFS(root)).toBe(0);
	});
});
