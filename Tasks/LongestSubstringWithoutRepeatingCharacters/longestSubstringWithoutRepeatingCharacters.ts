export function lengthOfLongestSubstring(s: string) {
    const used: any = {};
    const results = [0];
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (used[char] !== undefined && counter <= used[char]) {
            counter = used[char] + 1;
        } else {
            results.push(i - counter + 1);
        }

        used[char] = i;
    }

    return Math.max(...results);
}
