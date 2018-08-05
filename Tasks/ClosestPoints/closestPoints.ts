export interface Point {
    x: number;
    y: number;
}

export function findDistanceBetweenPoints(point1: Point, point2: Point) {
    return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2)
}

// O(NlogN)
export function findClosestPoints(root: Point, points: Point[], needNumberOfClosest: number) {
    return points
        .sort((a, b) => (findDistanceBetweenPoints(root, a) - findDistanceBetweenPoints(root, b)))
        .slice(0, needNumberOfClosest);
}
