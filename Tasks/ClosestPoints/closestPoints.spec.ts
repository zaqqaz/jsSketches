import { findClosestPoints, Point } from "./closestPoints";

describe("closest points", () => {
    it("should find 4 closest points to 0,0", () => {
        const root: Point = {
            x: 0,
            y: 0,
        };

        const points: Point[] = [
            { x: -2, y: 4 },
            { x: 3, y: 2 },
            { x: -1, y: 0 },
            { x: 0, y: -2 },
            { x: -2, y: -3 },
            { x: 3, y: -5 },
        ];

        const closest = findClosestPoints(root, points, 4);

        expect(closest).toContainEqual({ x: -1, y: 0 });
        expect(closest).toContainEqual({ x: 0, y: -2 });
        expect(closest).toContainEqual({ x: 3, y: 2 });
        expect(closest).toContainEqual({ x: -2, y: -3 });
    })
});
