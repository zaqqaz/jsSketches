export function swapChars(str: string, i: number, j: number) {
    const arr = str.split("");
    arr[i] = str[j];
    arr[j] = str[i];

    return arr.join("");
}

export function permutation(str: string, start = 0, end = str.length - 1, result: string[] = []) {
    if (start == end) {
        result.push(str)
    }
    else {
        for (let i = start; i <= end; i++) {
            str = swapChars(str, start, i);
            permutation(str, start + 1, end, result);

            // swap back for next iteration;
            str = swapChars(str, start, i);
        }
    }

    return result;
}


// todo: Heap’s Algorithm for generating permutations
// https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/
