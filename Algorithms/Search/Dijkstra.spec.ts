import { dijkstra } from "./Dijkstra";

function createGraph() {
    const graph = {
        start: {
            a: 6,
            b: 2,
        },
        a: {
            fin: 1
        },
        b: {
            a: 3,
            fin: 5,
        },
        fin: {}
    };

    const costs = {
        a: 6,
        b: 2,
        fin: Number.MAX_SAFE_INTEGER,
    };

    const parents = {
        a: "start",
        b: "start",
        fin: undefined,
    }
}

describe("Binary search", () => {
    it("getCheapestNotPassedPath", () => {
        const result = dijkstra();
        console.log(result);
    });
});
