export function swap(array: number[], firstIndex: number, secondIndex: number) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
