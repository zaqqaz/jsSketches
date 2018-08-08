import { Node } from "../../DataStructures/BST/BST";

// O(n)
export function heightOfTree(root?: Node, currentHeight?: number): number {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(
        root.left ? heightOfTree(root.left, currentHeight) : 0,
        root.right ? heightOfTree(root.right, currentHeight) : 0,
    );
}
