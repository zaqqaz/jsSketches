import { fairCandySwap } from "./fairCandySwap";

describe("Fair Candy Swap", () => {
    it("Example 1", () => {
        expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
    });
    it("Example 2", () => {
        expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
    });
    it("Example 3", () => {
        expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
    });
    it("Example 4", () => {
        expect(fairCandySwap([1, 2, 5], [2, 4])).toEqual([5, 4]);
    });
});
