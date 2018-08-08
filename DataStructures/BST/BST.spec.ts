import { BST } from "./BST";

describe("BST", () => {
    it("add nodes to BST", () => {
        const bst = new BST()
            .addValue(5)
            .addValue(3)
            .addValue(10)
            .addValue(1)
            .addValue(4)
            .addValue(7)
            .addValue(12)
        ;

        expect(bst.head!.value).toBe(5);
        expect(bst.head!.left!.value).toBe(3);
        expect(bst.head!.right!.value).toBe(10);
    });

    it("lookup", () => {
        const bst = new BST()
            .addValue(5)
            .addValue(3)
            .addValue(10)
            .addValue(1)
            .addValue(4)
            .addValue(7)
            .addValue(12)
        ;

        const lookupNode = bst.lookup(3, bst.head)!;
        expect(lookupNode.value).toBe(3);
        expect(lookupNode.left!.value).toBe(1);
        expect(lookupNode.right!.value).toBe(4);
    })
});
