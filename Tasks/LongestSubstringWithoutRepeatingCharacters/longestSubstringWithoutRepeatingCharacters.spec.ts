import { lengthOfLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters";

describe("Longest Substring Without Repeating Characters", () => {
    it("t1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });

    it("t2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });

    it("t3", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    it("t4", () => {
        expect(lengthOfLongestSubstring("aaaaaooa")).toBe(2);
    });

    it("t5", () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });

    it("t6", () => {
        expect(lengthOfLongestSubstring(" ")).toBe(1);
    });

    it("t7", () => {
        expect(lengthOfLongestSubstring("abbbbbbba")).toBe(2);
    });

    it("t8", () => {
        expect(lengthOfLongestSubstring("dvdf")).toBe(3);
    });
});
