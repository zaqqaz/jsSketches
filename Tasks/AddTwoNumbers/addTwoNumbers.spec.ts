import { addTwoNumbers, ListNode } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
    it("should work", () => {
        // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
        // Output: 7 -> 0 -> 8
        // Explanation: 342 + 465 = 807.

        const l1 = new ListNode();
        l1.val = 2;
        l1.next = new ListNode();
        l1.next.val = 4;
        l1.next.next = new ListNode();
        l1.next.next.val = 3;

        const l2 = new ListNode();
        l2.val = 5;
        l2.next = new ListNode();
        l2.next.val = 6;
        l2.next.next = new ListNode();
        l2.next.next.val = 4;

        const result = addTwoNumbers(l1, l2);
        expect(result.val).toBe(7);
        expect(result.next!.val).toBe(0);
        expect(result.next!.next!.val).toBe(8);
    });

    it("should work 2", () => {
        const l1 = new ListNode();
        l1.val = 9;
        l1.next = new ListNode();
        l1.next.val = 8;

        const l2 = new ListNode();
        l2.val = 1;

        const result = addTwoNumbers(l1, l2);
        expect(result.val).toBe(0);
        expect(result.next!.val).toBe(9);
    });

    it("should work 3", () => {
        const l1 = new ListNode();
        l1.val = 9;
        l1.next = new ListNode();
        l1.next.val = 9;

        const l2 = new ListNode();
        l2.val = 1;

        const result = addTwoNumbers(l1, l2);
        expect(result.val).toBe(0);
        expect(result.next!.val).toBe(0);
        expect(result.next!.next!.val).toBe(1);
    });

     it("should work 4", () => {
        const l1 = new ListNode();
        l1.val = 9;
        l1.next = new ListNode();
        l1.next.val = 9;

        const l2 = new ListNode();
        l2.val = 9;
        l2.next = new ListNode();
        l2.next.val = 9;

        const result = addTwoNumbers(l1, l2);
        expect(result.val).toBe(8);
        expect(result.next!.val).toBe(9);
        expect(result.next!.next!.val).toBe(1);
    });
});
