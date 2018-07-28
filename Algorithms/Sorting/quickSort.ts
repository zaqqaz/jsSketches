
// Quicksort works in place. And its worst-case running time is as bad as selection sort's and insertion sort's: Θ(n^2)
// But its average-case running time is as good as merge sort's: Θ(N logN) ' +
// 'So why think about quicksort when merge sort is at least as good? ' +
// 'That's because the constant factor hidden in the big-Θ notation for quicksort is quite good.
//  In practice, quicksort outperforms merge sort, and it significantly outperforms selection sort and insertion sort.

import { swap } from "./helper";

export function partition(array: number[], min: number, max: number) {
    const pivot = array[max];
    let q = min;
    for (let i = min; i < max; i++) {
        if (array[i] <= pivot) {
            swap(array, i, q);
            q++;
        }
    }
    swap(array, max, q);

    return q;
}

export function quickSort(arr: number[], min: number = 0, max: number = arr.length - 1) {
    if (min < max) {
        const pivot = partition(arr, min, max);
        quickSort(arr, min, pivot - 1);
        quickSort(arr, pivot + 1, max);
    }
}
