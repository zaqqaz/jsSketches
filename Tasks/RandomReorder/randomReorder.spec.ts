import { randomReorder } from "./randomReorder";

describe("randomReorder", () => {
    it("should chnge the order", () => {
        const initialArray = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 6, 7, 331, 123, 5435, 24, 6, 0, 22, 98, 86];
        const arrayForReorder = [...initialArray];

        randomReorder(arrayForReorder);
        expect(arrayForReorder).not.toEqual(initialArray)
    })
});
