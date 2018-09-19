type Path = {
    node: Node;
    cost: number;
    passed?: boolean;
};

export type Node = {
    name: string;
    // passed?: boolean;
    paths: Path[];
}

export type PassedNode = {
    // passed: true;
    cost: number;
    parent: string;
}

export function findLowestCostNode(costs: { [key: string]: number }, processed: string[]) {
    const sortedCost = Object.keys(costs)
        .filter(k => !processed.includes(k))
        .sort((k1, k2) => costs[k1] - costs[k2]);

    if (sortedCost.length) {
        return sortedCost[0];
    }
}

export function dijkstra() {
    const graph: any = {
        start: {
            a: 6,
            b: 2,
        },
        a: {
            finish: 1
        },
        b: {
            a: 3,
            finish: 5,
        },
        finish: {}
    };

    const costs: any = {
        start: 0,
        a: Number.MAX_SAFE_INTEGER,
        b: Number.MAX_SAFE_INTEGER,
        finish: Number.MAX_SAFE_INTEGER,
    };

    const parents: any = {
        a: "start",
        b: "start",
        finish: undefined,
    };

    const processed: string[] = [];

    let node = findLowestCostNode(costs, processed);
    while (node) {
        const cost = costs[node];
        const neighbors = graph[node];

        for (const neighbor of Object.keys(neighbors)) {
            const newCost = cost + neighbors[neighbor];
            if (costs[neighbor] > newCost) {
                console.log(costs);
                costs[neighbor] = newCost;
                parents[neighbor] = node;
            }
        }

        processed.push(node);

        node = findLowestCostNode(costs, processed);
    }

    return getFinalPath("finish", parents, costs);
}

function getFinalPath(node: string, parents: any, costs: any, result: string[] = []): string {
    const history = [...result, node + ` (cost: ${costs[node] || 0})`];
    if (node === "start") {
        return history.reverse().join(" -> ");
    }

    return getFinalPath(parents[node], parents, costs, history);
}
