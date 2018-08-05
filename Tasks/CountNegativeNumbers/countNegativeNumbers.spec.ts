import { countNegativeNumbers } from "./countNegativeNumbers";

describe("Count negative numbers", () => {
    it("Should return count of negative matrix in Row/Column-Wise Sorted Matrix", () => {
        const matrix = [
          [-3, -2, -1, 1],
          [-2, 2, 3, 4],
          [4, 5, 7, 8],
        ];

        expect(countNegativeNumbers(matrix)).toBe(4);
    })
});
