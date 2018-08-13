export function reverseWords(str: String) {
    return str.split(" ").reverse().join(" ");
}

export function reverseWords2(str: String) {
    let result = "";

    for (let i = str.length - 1, j = i; i >= 0; i--) {
        if (str[i] === " ") {
            const prevCharIndex = i + 1;
            result += str.substr(prevCharIndex, j - prevCharIndex + 1) + " ";
            j = --i;
        }

        if(i === 0) {
            result += str.substr(i, j - i + 1);
        }
    }

    return result;
}
