import type { ListNode } from "./ListNode.class";

export function deleteNode(node: ListNode | null): void {
	if (node?.next) {
		node.val = node.next.val;
		node.next = node.next.next;
	}
}
