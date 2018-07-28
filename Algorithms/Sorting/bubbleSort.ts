import { swap } from "./helper";

// O(N^2)
export function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }
}
