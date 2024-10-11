import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { isPalindromeSpace01, isPalindromeSpace0n } from "./isPalindrome";

describe("SPACE: 0(n) => Palindrome Linked List", () => {
	it("1-> 2-> 2-> 1	=>	true", async () => {
		const el4 = new ListNode(1);
		const el3 = new ListNode(2, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		/*
			input: 		1-> 2-> 2-> 1-> null
			output: 	true
    */

		expect(isPalindromeSpace0n(root)).toBeTruthy();
	});

	it("1-> 2	=>	false", async () => {
		const el2 = new ListNode(2);
		const root = new ListNode(1, el2);
		/*
			input: 		1-> 2-> null
			output: 	false
    */

		expect(isPalindromeSpace0n(root)).toBeFalsy();
	});
});

describe("SPACE: 0(1) => Palindrome Linked List", () => {
	it("1-> 2-> 2-> 1	=>	true", async () => {
		const el4 = new ListNode(1);
		const el3 = new ListNode(2, el4);
		const el2 = new ListNode(2, el3);
		const root = new ListNode(1, el2);
		/*
			input: 		1-> 2-> 2-> 1-> null
			output: 	true
    */

		expect(isPalindromeSpace01(root)).toBeTruthy();
	});

	it("1-> 2	=>	false", async () => {
		const el2 = new ListNode(2);
		const root = new ListNode(1, el2);
		/*
			input: 		1-> 2-> null
			output: 	false
    */

		expect(isPalindromeSpace01(root)).toBeFalsy();
	});
});
