export function binarySearch(
    value: number,
    sortedArray: number[],
    start: number = 0,
    end: number = sortedArray.length - 1
): number | undefined {
    const half = Math.floor( (end - start) / 2) + start;

    if (value === sortedArray[half]) {
        return half;
    }

    if (value > sortedArray[half]) {
        return binarySearch(value, sortedArray, half + 1, end);
    } else {
        return binarySearch(value, sortedArray, start, half - 1);
    }
}
