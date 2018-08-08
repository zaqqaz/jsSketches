import { Node } from "../../DataStructures/BST/BST";

// O(N)
export function preorderTraversal(root: Node, result: number[] = []): number[] {
    if (!root) {
        return result;
    }

    result.push(root.value);

    if (root.left) {
        preorderTraversal(root.left, result);
    }

    if (root.right) {
        preorderTraversal(root.right, result)
    }

    return result;
}


export function preorderTraversalNoRecursion(root: Node): number[] {
    const result = [];
    const rights = [];

    let nextValue: Node | undefined = root;

    while (nextValue) {
        if (nextValue.right) {
            rights.push(nextValue.right);
        }

        result.push(nextValue.value);
        nextValue = nextValue.left || rights.pop();
    }

    return result;
}


export function inorderTraversal(root: Node, result: number[] = []): number[] {
    if (!root) {
        return result;
    }

    if (root.left) {
        preorderTraversal(root.left, result);
    }

    result.push(root.value);

    if (root.right) {
        preorderTraversal(root.right, result)
    }

    return result;
}


export function postorderTraversal(root: Node, result: number[] = []): number[] {
    if (!root) {
        return result;
    }

    if (root.left) {
        preorderTraversal(root.left, result);
    }

    if (root.right) {
        preorderTraversal(root.right, result)
    }

    result.push(root.value);


    return result;
}
