import { heightOfTree } from "./heightOfTree";
import { BST } from "../../DataStructures/BST/BST";

describe("Heihgt of tree", () => {
    it("Should return height for BST", () => {
        const bst = new BST()
            .addValue(5)
            .addValue(3)
            .addValue(10)
            .addValue(1)
            .addValue(4)
            .addValue(7)
            .addValue(12)
            .addValue(13)
            .addValue(15)
            .addValue(16)
            .addValue(14)
        ;

        expect(heightOfTree(bst.head!)).toBe(6);
    })
});
