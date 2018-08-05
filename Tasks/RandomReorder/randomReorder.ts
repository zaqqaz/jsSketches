import { swap } from "./../../Algorithms/Sorting/helper";

export function randomReorder(arrray: any[]) {
    for (let i = 0; i < arrray.length; i++) {
        const randomIndex = Math.floor((arrray.length - i - 1) * Math.random());
        swap(arrray, i, randomIndex);
    }
}
