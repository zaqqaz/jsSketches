import { nonAdjacentNumbers } from "./nonAdjacentNumbers";

describe("nonAdjacentNumbers", () => {
    it("should return max sum of non adjacent numbers", () => {
        expect(nonAdjacentNumbers([2, 10, 1, 1, 10])).toBe(20);
        expect(nonAdjacentNumbers([6, 10, 5, 3, 10])).toBe(21);
        expect(nonAdjacentNumbers([1, 10, 2, 3, 10])).toBe(20);
        expect(nonAdjacentNumbers([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(28);
        expect(nonAdjacentNumbers([100, 100])).toBe(100);
        expect(nonAdjacentNumbers([99])).toBe(99);
        expect(nonAdjacentNumbers([0, 0, 1, 1, 0, 1])).toBe(2);
        expect(nonAdjacentNumbers([0, 0, 0, 1, 1, 1, 1, 1])).toBe(3);
    });
});
