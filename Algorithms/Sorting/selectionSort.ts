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
