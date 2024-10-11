import { describe, it, expect } from "@jest/globals";
import { ListNode } from "./ListNode.class";
import { mergeLists } from "./mergeLists";

describe("Merge Two Sorted Lists", () => {
	it("1-> 2-> 4-> null	|		1-> 3-> 4-> null	=>	1-> 1-> 2-> 3-> 4-> 4-> null", async () => {
		const list1_el3 = new ListNode(4);
		const list1_el2 = new ListNode(2, list1_el3);
		const list1_root = new ListNode(1, list1_el2);

		const list2_el3 = new ListNode(4);
		const list2_el2 = new ListNode(3, list2_el3);
		const list2_root = new ListNode(1, list2_el2);
		/*
			input: 		1-> 2-> 4-> null	|		1-> 3-> 4-> null
			output: 	1-> 1-> 2-> 3-> 4-> 4-> null
    */

		expect(mergeLists(list1_root, list2_root)).toEqual(list1_root);
		expect(list1_root.next).toEqual(list2_root); // 1-> 1
		expect(list2_root.next).toEqual(list1_el2); // 1-> 2
		expect(list1_el2.next).toEqual(list2_el2); // 2-> 3
		expect(list2_el2.next).toEqual(list1_el3); // 3-> 4
		expect(list1_el3.next).toEqual(list2_el3); // 4-> 4
		expect(list2_el3.next).toEqual(null); // 4-> null
	});
});
