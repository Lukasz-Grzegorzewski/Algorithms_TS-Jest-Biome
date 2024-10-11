import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { removeNthNode } from "./removeNthNode";

describe("Remove Nth Node From End of List", () => {
	it("1-> 2-> 3-> 4-> 5-> null	|	Nth= 2	|	1-> 2-> 3-> 5-> null", async () => {
		const el5 = new ListNode(5);
		const el4 = new ListNode(4, el5);
		const el3 = new ListNode(3, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		const target = 2
		/*
														▼
			input: 		1-> 2-> 3-> 4-> 5-> null
			output: 	1-> 2-> 3-> 5-> null
    */
		expect(removeNthNode(root, 2)).toBe(root);
		expect(root.next).toBe(el2);
		expect(el2.next).toBe(el3);
		expect(el3.next).toBe(el5);
		expect(el5.next).toBe(null);
	});
	
	it("1-> 2-> 3-> 4-> 5-> null	|	Nth= 5	|	2-> 3-> 4-> 5-> null", async () => {
		const el5 = new ListNode(5);
		const el4 = new ListNode(4, el5);
		const el3 = new ListNode(3, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		const target = 5
		/*
								▼
			input: 		1-> 2-> 3-> 4-> 5-> null
			output: 	2-> 3-> 4-> 5-> null
    */
		expect(removeNthNode(root, target)).toBe(el2);
		expect(el2.next).toBe(el3);
		expect(el3.next).toBe(el4);
		expect(el4.next).toBe(el5);
		expect(el5.next).toBe(null);
	});
		
	it("1-> null	|	Nth= 1	|	null", async () => {
		const root = new ListNode(1);
		const target = 1
		/*
								▼
			input: 		1-> null
			output: 	null
    */
		expect(removeNthNode(root, target)).toBe(null);
	});
		
	it("1-> 2-> null	|	Nth= 2	|	1-> null", async () => {
		const el2 = new ListNode(2);
		const root = new ListNode(1, el2);
		const target = 1
		/*
										▼
			input: 		1-> 2-> null
			output: 	1-> null
    */
		expect(removeNthNode(root, target)).toBe(root);
		expect(root.next).toBe(null);
	});

});
