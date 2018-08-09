import { BST, Node } from "../../DataStructures/BST/BST";
import { inorderTraversal } from "../TreeTraversal/preorderTraversal";
import { sortedArrayToBST } from "../SortedArrayToBST/sortedArrayToBST";

export function balanceBST(root: Node) {
   const sorted = inorderTraversal(root);
   return sortedArrayToBST(sorted);
}
