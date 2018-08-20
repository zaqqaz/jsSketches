const digitToCharMap = {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Z"],
} as any;

function getCharKey(digit: number, i: number) {
    if ((digit > 1 && digit < 10) && (i >= 0 && i < 3)) {
        return digitToCharMap[digit][i];
    }
}

export function printWords(curDigit: number, phone: string, result: string[]) {
    for (let i = 0; i < 3; i++) {
        result[curDigit] = getCharKey(+phone[curDigit], i);
        const nextDigit = curDigit + 1;

        if (nextDigit === phone.length) {
            console.log(result.join(""));
            continue;
        }

        printWords(nextDigit, phone, result);

        if (+phone[curDigit] === 0 || +phone[curDigit] === 1) {
            return;
        }
    }
}
