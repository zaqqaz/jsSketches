const matrix = [
    [-3, -2, -1, 1],
    [-2, 2, 3, 4],
    [4, 5, 7, 8],
];

export function countNegativeNumbers(matrix: number[][]) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            const cell = matrix[i][j];

            if (cell < 0) {
                count += j + 1;
                break;
            }
        }
    }

    return count;
}
