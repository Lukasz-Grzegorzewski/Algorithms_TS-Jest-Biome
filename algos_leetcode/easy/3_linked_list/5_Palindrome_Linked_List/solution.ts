import type { ListNode } from "./ListNode.class";

// SPACE 0(n)
export function isPalindromeSpace0n(head: ListNode | null): boolean {
	const a: number[] = [];

	while (head) {
		a.push(head.val);
		head = head.next;
	}

	for (let i = 0; i < Math.floor(a.length / 2); i++) {
		if (a[i] !== a[a.length - 1 - i]) return false;
	}

	return true;
}

// SPACE 0(1)
export function isPalindromeSpace01(head: ListNode | null): boolean {
	/*
		1: head -> slow(half) -> end(fast)
		2: slow(half) <- end(fast)	=> reverse linked list from half->end =>TO=> end->half
		3: compare 2 link lists: start->halh =>AND=> end->half

		1: 
			▼(start)		▼(half)			▼(end)
			1-> 2-> 3-> 4-> 3-> 2-> 1->null 
		2: 
			▼(start)		▼(half)			▼(end)
			1-> 2-> 3-> 4 <-3 <-2- <-1
								 /
								null
		3: end === start => true
				end--
				start++
			...
	*/

	// 1:
	let half: ListNode | null = head;
	let end: ListNode | null = head;
	while (end?.next) {
		half = half!.next;
		end = end.next.next;
	}

	// 2:
	let prev: ListNode | null = null;
	let current: ListNode | null = half;
	while (current) {
		const t: ListNode | null = current.next;
		current.next = prev;
		prev = current;
		current = t;
	}

	// 3:
	let left: ListNode | null = head;
	let right: ListNode | null = prev;
	while (right) {
		if(left!.val !== right.val) return false
		left = left!.next;
		right = right.next;
	}

	return true;
}
