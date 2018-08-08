import { Node } from "../../DataStructures/BST/BST";

// O (log(N))
export function lowestCommonAncestor(root: Node, v1: number, v2: number): number | undefined {
    let next: Node | undefined = root;

    while (next) {
        if (v1 < next.value && v2 < next.value) {
            next = next.left;
        } else if (v1 > next.value && v2 > next.value) {
            next = next.right;
        } else {
            return next.value;
        }
    }
}
