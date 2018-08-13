import { nonrepeatedCharacter } from "./nonrepeatedCharacter";

describe("nonrepeated character", () => {
    it("should find nonrepeated character in a string", () => {
        expect(nonrepeatedCharacter("teeter")).toBe("r");
        expect(nonrepeatedCharacter("total")).toBe("o");
    });
});
