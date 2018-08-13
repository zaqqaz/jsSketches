import { reverseWords, reverseWords2 } from "./reverseWords";

describe("reverseWords", () => {
    it("should reverse words in a string", () => {
        expect(reverseWords("Do or not, there is no try.")).toBe("try. no is there not, or Do")
    });

    it("should reverse words in a string 2 ", () => {
        expect(reverseWords2("Do or not, there is no try.")).toBe("try. no is there not, or Do")
    })
});
