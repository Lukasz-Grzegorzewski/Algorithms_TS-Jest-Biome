import type { ListNode } from "./ListNode.class";

export function removeNthNode(
	head: ListNode | null,
	n: number,
): ListNode | null {
	let current: ListNode | null = head;
	let last: ListNode | null = head;

	for (let i = 0; i < n; i++) last = last!.next;

	if (!last) return head!.next;

	while (last.next !== null) {
		current = current!.next;
		last = last!.next;
	}

	current!.next = current!.next!.next;
	
	return head
}
