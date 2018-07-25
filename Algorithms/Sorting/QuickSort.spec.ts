// Quicksort works in place. And its worst-case running time is as bad as selection sort's and insertion sort's: Θ(n^2)
// But its average-case running time is as good as merge sort's: Θ(N logN) ' +
// 'So why think about quicksort when merge sort is at least as good? ' +
// 'That's because the constant factor hidden in the big-Θ notation for quicksort is quite good.
//  In practice, quicksort outperforms merge sort, and it significantly outperforms selection sort and insertion sort.

function swap(array: number[], firstIndex: number, secondIndex: number) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array: number[], min: number, max: number) {
    let q = min;
    for (let i = min; i < max; i++) {
        if (array[i] <= array[max]) {
            swap(array, i, q);
            q++;
        }
    }
    swap(array, max, q);

    return q;
}

function quickSort(arr: number[], min: number, max: number) {
    if (min < max) {
        const pivot = partition(arr, min, max);
        quickSort(arr, min, pivot - 1);
        quickSort(arr, pivot + 1, max);
    }
}


describe("Partition", () => {
    it("Partition for common case", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
        const q = partition(array, 0, array.length - 1);
        expect(q).toBe(4);
        expect(array).toEqual([5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
    });
});


describe("QuickSort", () => {
    it("Should sort basic array", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
        quickSort(array, 0, array.length - 1);
        expect(array).toEqual([2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });

    it("With negatives numbers and 0", () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, -4, 6, 0];
        quickSort(array, 0, array.length - 1);
        expect(array).toEqual([-4, 0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });
});
