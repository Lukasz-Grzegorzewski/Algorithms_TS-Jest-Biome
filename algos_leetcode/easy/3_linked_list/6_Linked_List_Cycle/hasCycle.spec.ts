import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { hasCycle_SpaceO1, hasCycle_SpaceOn } from "./hasCycle";

describe("SPACE: 0(n) => Palindrome Linked List", () => {
	it("3-> 2-> 0-> 4->2| cycle		=>	true", async () => {
		const el2 = new ListNode(2);
		const el4 = new ListNode(4, el2);
		const el3 = new ListNode(2, el4);
		el2.next = el3;
		const root = new ListNode(3, el2);
		/*
										 _______
										▼				|
			input: 		3-> 2-> 2-> 4
			output: 	true
    */

		expect(hasCycle_SpaceOn(root)).toBeTruthy();
	});

	it("1-> 2->1| cycle		=>	true", async () => {
		const el2 = new ListNode(2);
		const root = new ListNode(1, el2);
		el2.next = root;
		/*
								 ___
								▼		|
			input: 		1-> 2
			output: 	true
    */

		expect(hasCycle_SpaceOn(root)).toBeTruthy();
	});
});

describe("SPACE: 0(1) => has cycle inside ?", () => {
	it("1-> null		=>	false", async () => {
		const root = new ListNode(1);
		/*
			input: 		1-> null
			output: 	flase
    */

		expect(hasCycle_SpaceO1(root)).toBeFalsy();
	});

	it("1-> 2-> 3-> 4-> 5-> null		=>	false", async () => {
		const el5 = new ListNode(5);
		const el4 = new ListNode(4, el5);
		const el3 = new ListNode(3, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		/*
			input: 		1-> 2-> 3-> 4-> 5-> null
			output: 	flase
    */

		expect(hasCycle_SpaceO1(root)).toBeFalsy();
	});
});
