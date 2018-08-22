function total(arr: number[]) {
    return arr.reduce((a, c) => a + c);
}

export function fairCandySwap(A: number[], B: number[]) {
    const delta = (total(B) - total(A)) / 2;
    const sb: any = {};

    for (let i = 0; i < B.length; i++) {
        sb[B[i]] = true;
    }

    for (let i = 0; i < A.length; i++) {
        if (sb[A[i] + delta]) return [A[i], A[i] + delta];
    }
}
