export function numberOfWays(finalStep: number, possibleWays: number[]) {
    if (finalStep === 1 || finalStep === 0)  {
        return 1;
    }

    let total = 0;
    for (const way of possibleWays) {
        if (finalStep >= way) {
            total += numberOfWays(finalStep - way, possibleWays);
        }
    }

    return total;
}

