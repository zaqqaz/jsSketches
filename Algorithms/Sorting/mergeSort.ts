// O (N)
export function merge(array: number[], min: number, pivot: number, max: number) {
    const lowHalf = array.slice(min, pivot + 1);
    const highHalf = array.slice(pivot + 1, max + 1);

    let k = min;
    let i = 0;
    let j = 0;

    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }

        k++;
    }

    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }

    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
}


// O(N log N)
export function mergeSort(array: number[], min = 0, max = array.length - 1) {
    if (min < max) {
        const pivot = Math.floor((min + max) / 2);
        mergeSort(array, min, pivot);
        mergeSort(array, pivot + 1, max);
        merge(array, min, pivot, max);
    }
}
