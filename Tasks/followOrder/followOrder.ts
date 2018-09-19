export function followOrder(arr: string[], order: string[]) {
    let weight = Number.MAX_SAFE_INTEGER;
    const orderIndexMap: any = {};

    for (let i = 0; i < order.length; i++) {
        orderIndexMap[order[i]] = order.length - i;
    }

    for (const a of arr) {
        const newWeight = +a.split("").reduce((sum, b) => sum + orderIndexMap[b], "");
        if (weight >= newWeight) {
            weight = newWeight;
        } else {
            return false;
        }
    }
    return true;
}
