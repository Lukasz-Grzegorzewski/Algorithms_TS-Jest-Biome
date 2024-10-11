import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { reverseListIteration, reverseListRecursive } from "./reverseList";

describe("ITERATIVE : Remove Nth Node From End of List", () => {
	it("1-> 2-> 3-> 4-> 5-> null	|	5-> 4-> 3-> 2-> 1-> null", async () => {
		const el5 = new ListNode(5);
		const el4 = new ListNode(4, el5);
		const el3 = new ListNode(3, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		const target = 2
		/*
			input: 		1-> 2-> 3-> 4-> 5-> null
			output: 	5-> 4-> 3-> 2-> 1-> null
    */
		expect(reverseListIteration(root)).toBe(el5);
		expect(el5.next).toBe(el4);
		expect(el4.next).toBe(el3);
		expect(el3.next).toBe(el2);
		expect(el2.next).toBe(root);
	});

	it("1-> null	|	1-> null", async () => {
		const root = new ListNode(1);
		const target = 2
		/*
			input: 		1-> null
			output: 	1-> null
    */
		expect(reverseListIteration(root)).toBe(root);
		expect(root.next).toBe(null);
	});

	it("1-> null	|	1-> null", async () => {
		const root = null;
		const target = 2
		/*
			input: 		null
			output: 	null
    */
		expect(reverseListIteration(root)).toBe(null);
	});
});

describe("RECURSIVE : Remove Nth Node From End of List", () => {
	it("1-> 2-> 3-> 4-> 5-> null	|	5-> 4-> 3-> 2-> 1-> null", async () => {
		const el5 = new ListNode(5);
		const el4 = new ListNode(4, el5);
		const el3 = new ListNode(3, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		const target = 2
		/*
			input: 		1-> 2-> 3-> 4-> 5-> null
			output: 	5-> 4-> 3-> 2-> 1-> null
    */
		expect(reverseListRecursive(root)).toBe(el5);
		expect(el5.next).toBe(el4);
		expect(el4.next).toBe(el3);
		expect(el3.next).toBe(el2);
		expect(el2.next).toBe(root);
	});

	it("1-> null	|	1-> null", async () => {
		const root = new ListNode(1);
		const target = 2
		/*
			input: 		1-> null
			output: 	1-> null
    */
		expect(reverseListRecursive(root)).toBe(root);
		expect(root.next).toBe(null);
	});

	it("1-> null	|	1-> null", async () => {
		const root = null;
		const target = 2
		/*
			input: 		null
			output: 	null
    */
		expect(reverseListRecursive(root)).toBe(null);
	});
});

