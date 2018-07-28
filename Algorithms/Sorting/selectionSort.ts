import { swap } from "./helper";

export function findIndexOfMinimum(array: number[], startIndex: number) {
    let smallestIndex = startIndex;

    for (let j = startIndex + 1; j < array.length; j++) {
        if (array[smallestIndex] > array[j]) {
            smallestIndex = j;
        }
    }

    return smallestIndex;
}

// running time of selection sort is Θ(n^2)
export function selectionSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        // running time for all the calls to findIndexOfMinimum is Θ(n^2)
        // running time for for the calls to swap is Θ(n)
        swap(array, findIndexOfMinimum(array, i), i);
    }
}

describe("SelectionSort", () => {
    it("Should sort basic array", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
        selectionSort(array);
        expect(array).toEqual([2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });

    it("With negatives numbers and 0", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, -4, 6, 0];
        selectionSort(array);
        expect(array).toEqual([-4, 0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });
});
