import { BST } from "../../DataStructures/BST/BST";
import {
    inorderTraversal,
    postorderTraversal,
    preorderTraversal,
    preorderTraversalNoRecursion
} from "./preorderTraversal";

describe("Tree traversal", () => {
    it("Preorder. Should collect all values of BST in clock-wise manner", () => {
        const bst = new BST()
            .addValue(100)
            .addValue(50)
            .addValue(150)
            .addValue(25)
            .addValue(75)
            .addValue(74)
            .addValue(12)
            .addValue(13)
            .addValue(125)
            .addValue(175)
            .addValue(110)
        ;

        expect(preorderTraversal(bst.head!)).toEqual([100, 50, 25, 12, 13, 75, 74, 150, 125, 110, 175]);
    });

    it("Preorder. Same but without recursion", () => {
        const bst = new BST()
            .addValue(100)
            .addValue(50)
            .addValue(150)
            .addValue(25)
            .addValue(75)
            .addValue(74)
            .addValue(12)
            .addValue(13)
            .addValue(125)
            .addValue(175)
            .addValue(110)
        ;

        expect(preorderTraversalNoRecursion(bst.head!)).toEqual([100, 50, 25, 12, 13, 75, 74, 150, 125, 110, 175]);
    });

    it("Inorder Traversal", () => {
        const bst = new BST()
            .addValue(100)
            .addValue(50)
            .addValue(150)
        ;

        expect(inorderTraversal(bst.head!)).toEqual([50, 100, 150]);
    });

    it("Postorder Traversal", () => {
        const bst = new BST()
            .addValue(100)
            .addValue(50)
            .addValue(150)
        ;

        expect(postorderTraversal(bst.head!)).toEqual([50, 150, 100]);
    });
});
