import { ListNode } from "./ListNode.class";

export function mergeLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	const dummy: ListNode | null = new ListNode();
	let currentLast: ListNode | null = dummy;
	
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			currentLast.next = list1;
			list1 = list1.next;
		} else {
			currentLast.next = list2;
			list2 = list2.next;
		}
		currentLast = currentLast.next
	}

	if (list1) currentLast.next = list1;
	else if (list2) currentLast.next = list2;

	return dummy.next;
}
