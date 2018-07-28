import { numberOfWays } from "./staircase";

describe("staircase", () => {
    it("4 steps, [1,4]", () => {
        expect(numberOfWays(4, [1, 4])).toBe(2);
    })

    it("4 steps, [1,2]", () => {
        expect(numberOfWays(4, [1, 2])).toBe(5);
    })
});
