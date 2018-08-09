import { BST } from "../../DataStructures/BST/BST";
import { balanceBST } from "./binaryTreeToHeap";

describe("balanceBST", () => {
    it("test", () => {
        const bst = new BST()
            .addValue(4)
            .addValue(3)
            .addValue(5)
            .addValue(2)
            .addValue(6)
            .addValue(1)
            .addValue(7)
        ;


        const res = balanceBST(bst.head!)!;
        expect(res.value).toBe(4);
        expect(res.left.value).toBe(2);
        expect(res.left.left.value).toBe(1);
        expect(res.left.right.value).toBe(3);
        expect(res.right.value).toBe(6);
        expect(res.right.right.value).toBe(7);
        expect(res.right.left.value).toBe(5);
    })
});
