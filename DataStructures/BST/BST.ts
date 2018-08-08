type NodeProps = {
    left?: Node;
    right?: Node;
    value: number; // just for example
}

export class Node {
    public left?: Node;
    public right?: Node;
    public value: number;

    constructor(props: NodeProps) {
        this.left = props.left;
        this.right = props.right;
        this.value = props.value;
    }
}

export class BST {
    public head?: Node;

    getNextNode(currentNode: Node, value: number) {
        if (currentNode.value >= value) {
            return currentNode.left;
        } else {
            return currentNode.right;
        }
    }

    addValue(value: number) {
        if (!this.head) {
            this.head = new Node({ value });
            return this;
        }

        let currentNode = this.head;
        while (currentNode) {
            const nexNode = this.getNextNode(currentNode, value);

            if (!nexNode) {
                if (currentNode.value >= value) {
                    currentNode.left = new Node({ value });
                } else {
                    currentNode.right = new Node({ value });
                }
                break;
            }

            currentNode = nexNode;
        }

        return this;
    }

    lookup(value: number, currentNode?: Node): Node | undefined {
        if (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            return this.lookup(value, currentNode.value >= value ? currentNode.left : currentNode.right);
        }
    }

    lookupIterativeVersion(value: number): Node | undefined {
        if (this.head) {
            if (this.head.value === value) {
                return this.head;
            }

            let nexNode = this.getNextNode(this.head, value);

            while (nexNode) {
                if (nexNode.value === value) {
                    return nexNode;
                }

                nexNode = this.getNextNode(nexNode, value);
            }
        }
    }
}
