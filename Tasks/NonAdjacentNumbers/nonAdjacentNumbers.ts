export function nonAdjacentNumbers(numbers: number[]) {
    let i = 0;
    let e = 0;

    for (const number of numbers) {
        const prevMax = Math.max(i, e);
        i = e + number;
        e = prevMax;
    }

    return Math.max(i, e);
}
