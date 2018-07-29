export function getFirstRecurringCharacter(str: string) {
    let map: {[key: string]: number} = {};

    for(const char of str) {
        if(map[char] === undefined) {
            map[char] = 1;
        } else {
            return char;
        }
    }

    return null;
}
