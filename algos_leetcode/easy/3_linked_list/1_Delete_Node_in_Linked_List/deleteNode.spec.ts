import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { deleteNode } from "./deleteNode";

describe("Delete Node in a Linked List", () => {
	it("should return head of a linked list where 2nd node (val: 5) is deleted", async () => {
		const el4 = new ListNode(9);
		const el3 = new ListNode(1, el4);
		const el2 = new ListNode(5, el3);
		const root = new ListNode(4, el2);
		/*
        4 -> 5 -> 1 -> 9
             ^
    */
		deleteNode(el2);

		expect(root.next).toStrictEqual(el3);
		expect(el3.next).toStrictEqual(el4);
		expect(el4.next).toStrictEqual(null);
	});

  it("should return head of a linked list where 3rd node (val: 1) is deleted", async () => {
		const el4 = new ListNode(9);
		const el3 = new ListNode(1, el4);
		const el2 = new ListNode(5, el3);
		const root = new ListNode(4, el2);
		/*
        4 -> 5 -> 1 -> 9
                  ^
    */
		deleteNode(el3);

		expect(root.next).toStrictEqual(el2);
		expect(el2.next).toStrictEqual(el4);
		expect(el4.next).toStrictEqual(null);
	});
});
