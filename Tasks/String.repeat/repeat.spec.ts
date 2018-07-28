export interface CustomString extends String {
    customRepeat: (N: number) => string;
}

(String.prototype as any as CustomString).customRepeat = function (N: number) {
    return Array(N).fill(this).join("");
};

describe("String.myRepeat", () => {
    it("Should repeat string N times", () => {
        const N = 10;
        const str = "test" as any as CustomString;
        expect(str.customRepeat(N)).toBe(str.repeat(N));
    })
});
