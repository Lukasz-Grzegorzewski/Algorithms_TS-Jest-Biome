import type { ListNode } from "./ListNode.class";

// SPACE 0(n)
export function hasCycle_SpaceOn(head: ListNode | null): boolean {
	const set = new Set();

	while (head!.next !== null) {
		if (set.has(head)) return true;
		set.add(head);
		head = head!.next;
	}

	return true;
}

// SPACE 0(1)
export function hasCycle_SpaceO1(head: ListNode | null): boolean {
	/*
		slow and fast at the beginning
		run the list
		If fast||fast.next === null | return false
		If there is cycle fast will eventualy be equal to slow | return true
	*/

	let slow: ListNode | null = head;
	let fast: ListNode | null = head;

	while(fast?.next) {
		slow = slow!.next;
		fast = fast.next.next;
		if(slow === fast) return true;
	}

	return false;
}
