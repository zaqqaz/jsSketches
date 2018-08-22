export class ListNode {
    public val: number| undefined;
    public next: ListNode | undefined;
}

function getValues(root: ListNode) {
    let next: ListNode | undefined = root;
    const result = [];

    while (next) {
        result.push(next.val);
        next = next.next;
    }

    return result;
}

function addValue(arr: number[], value: number, currentIndex:number): number[] {
    value = (arr[currentIndex] || 0) + value;

    if (value > 9) {
        arr[currentIndex] = value % 10;
        return addValue(arr, 1, currentIndex - 1);
    }

    if(currentIndex < 0) {
        arr = [value, ...arr];
    } else  {
       arr[currentIndex] = value;
    }

    return arr;
}

export function addTwoNumbers(n1: ListNode, n2: ListNode) {
    const v1 = getValues(n1).reverse();
    const v2 = getValues(n2).reverse();

    let result: number[] = [];
    const max = Math.max(v1.length, v2.length);
    const v1LengthDiff = max - v1.length;
    const v2LengthDiff = max - v2.length;

    for(let i = 0; i < max; i++) {
        let sum = 0;
        if(i >= v1LengthDiff) {
            sum += v1[i - v1LengthDiff]!;
        }
        if(i >= v2LengthDiff) {
            sum += v2[i - v2LengthDiff]!;
        }

        result = addValue(result, sum, result.length);
    }

    const root = new ListNode();
    let next = root;

    while(result.length) {
        next.val = +result.pop()!;

        if(result.length) {
            next.next = new ListNode();
            next = next.next;
        }
    }

    return root;
}
