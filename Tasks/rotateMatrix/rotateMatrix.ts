// Easiest but not optimal at all ))
// O(n) - where N is number of elements in matrix
export function rotateMatrix(matrix: number[][]) {
    const result: any = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!result[i]) result[i] = [];
            result[i][j] = matrix[matrix.length - j - 1][i];
        }
    }

    return result;
}
