import { followOrder } from "./followOrder";

describe("followOrder", () => {
    it("should work", () => {
        const arr = ["ba", "bc", "aa", "ac", "cb"];
        const order = ["b", "a", "c"];
        expect(followOrder(arr, order)).toBe(true);
    })

    it("should work2", () => {
        const arr = ["bb", "ba", "bc", "aa", "ac", "cb"];
        const order = ["b", "a", "c"];
        expect(followOrder(arr, order)).toBe(true);
    })

    it("should work3", () => {
        const arr = ["bc", "ba", "bc", "aa", "ac", "cb"];
        const order = ["b", "a", "c"];
        expect(followOrder(arr, order)).toBe(false);
    })

    it("should work4", () => {
        const arr = ["bc"];
        const order = ["b", "a", "c"];
        expect(followOrder(arr, order)).toBe(true);
    })
});
