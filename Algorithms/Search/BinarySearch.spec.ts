import { binarySearch } from "./BinarySearch";

describe("Binary search", () => {
    it("should return index where element occur", () => {
        expect(binarySearch(3, [1, 2, 3, 4, 5, 12, 16, 119])).toBe(2);
        expect(binarySearch(12, [1, 2, 3, 4, 5, 12, 16, 119])).toBe(5);
        expect(binarySearch(119, [1, 2, 3, 4, 5, 12, 16, 119])).toBe(7);
    })
});
