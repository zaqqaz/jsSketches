// O(N)
export function nonrepeatedCharacter(str: string) {
    const arr = str.split("");
    const hash: any = {};

    for(const char of arr) {
        hash[char] = hash[char] === undefined ? 0 : hash[char] + 1;
    }

    for(const char of arr) {
        if(hash[char] === 0) {
            return char;
        }
    }
}
