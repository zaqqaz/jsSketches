import { sortedArrayToBST } from "./sortedArrayToBST";
import { preorderTraversal } from "../TreeTraversal/preorderTraversal";

describe("sortedArrayToBST", () => {
    it("test", () => {
        const bst = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        expect(preorderTraversal(bst!)).toEqual([ 5, 2, 1, 3, 4, 8, 6, 7, 9 ]);
    })
});
