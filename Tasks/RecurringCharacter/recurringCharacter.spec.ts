import { getFirstRecurringCharacter } from "./recurringCharacter";

describe("reccuringCharacter", () => {
    it("should return first recurring character in a given string", () => {
        expect(getFirstRecurringCharacter("abcderd")).toBe("d");
        expect(getFirstRecurringCharacter("abcdgwl")).toBe(null);
        expect(getFirstRecurringCharacter("abab")).toBe("a");
    });

    it("should return null for string which  not contains any recurring character", () => {
        expect(getFirstRecurringCharacter("abcdgwl")).toBe(null);
    });
});
