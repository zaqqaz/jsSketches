import { permutation } from "./permutation";

describe("Permutation", () => {
    it("Should return array with all permutations", () => {
        expect(permutation("hat")).toEqual(["hat", "hta", "aht", "ath", "tah", "tha"]);
    });
});
