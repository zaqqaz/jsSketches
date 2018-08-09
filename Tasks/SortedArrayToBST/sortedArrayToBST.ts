import { Node } from "../../DataStructures/BST/BST";

export function sortedArrayToBST(arr: number[], start: number = 0, end: number = arr.length) {
    if (start > end)
        return;

    /* Get the middle element and make it root */
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === undefined) {
        return;
    }

    const root = new Node({ value: arr[mid] });

    /* Recursively construct the left subtree and make it left child of root */
    root.left = sortedArrayToBST(arr, start, mid - 1);

    /* Recursively construct the right subtree and make it right child of root */
    root.right = sortedArrayToBST(arr, mid + 1, end);

    return root;
}

