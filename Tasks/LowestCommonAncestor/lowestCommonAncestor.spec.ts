import { BST } from "../../DataStructures/BST/BST";
import { lowestCommonAncestor } from "./lowestCommonAncestor";

describe("Lowest Common Ancestor", () => {
    it("should work", () => {
        const bst = new BST()
            .addValue(20)
            .addValue(8)
            .addValue(22)
            .addValue(4)
            .addValue(2)
            .addValue(12)
            .addValue(10)
            .addValue(14)
        ;

        expect(lowestCommonAncestor(bst.head!, 2, 14)).toBe(8);
    });
});
