export class ListNode {
    public val: number | undefined;
    public next: ListNode | undefined;
}

export function addTwoNumbers(n1: ListNode | undefined, n2: ListNode | undefined) {
    const root = new ListNode();
    let current = root;
    let curring = 0;

    while (n1 || n2) {
        const v1 = n1 ? n1.val : 0;
        const v2 = n2 ? n2.val : 0;
        const sum = curring + v1! + v2!;
        curring = Math.floor(sum / 10);
        current.val = sum % 10;
        n1 = n1 ? n1.next : undefined;
        n2 = n2 ? n2.next : undefined;

        if (n1 || n2 || curring) {
            current.next = new ListNode();
            current = current.next;
        }
    }

    if (curring) {
        current.val = curring;
    }

    return root;
}
