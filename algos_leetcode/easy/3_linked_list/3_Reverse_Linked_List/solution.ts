import type { ListNode } from "./ListNode.class";

// ITERATION
export function reverseListIteration(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null;
	let current: ListNode | null = head;

	while (current) {
		const t: ListNode | null = current.next;
		current.next = prev;
		prev = current;
		current = t;
	}
	return prev;
}

//RECURSIVE
export function reverseListRecursive(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	const nodeReturned = reverseListIteration(head.next);
	head.next.next = head;
	head.next = null;
	return nodeReturned;
}
