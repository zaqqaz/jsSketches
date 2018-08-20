import { partition, quickSort } from "./quickSort";
import { selectionSort } from "./selectionSort";
import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";
import { insertionSort } from "./insertionSort";


export function testSort(sortFunction: (array: number[]) => void) {
    it("Should sort basic array", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
        sortFunction(array);
        expect(array).toEqual([2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });

    it("With negatives numbers and 0", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, -4, 6, 0];
        sortFunction(array);
        expect(array).toEqual([-4, 0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });
}

describe("QuickSort", () => {
    it("Partition for common case", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
        const q = partition(array, 0, array.length - 1);
        expect(q).toBe(4);
        expect(array).toEqual([5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
    });

    testSort(quickSort);
});

describe("SelectionSort", () => {
    testSort(selectionSort);
});

describe("bubbleSort", () => {
    testSort(bubbleSort);
});

describe("MergeSort", () => {
    testSort(mergeSort);
});

describe("insertionSort", () => {
    testSort(insertionSort);
});
