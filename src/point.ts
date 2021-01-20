import Vector from './vector';

import { add as a, sub as s, mul as m, dot as d } from './vectors';

export default class Point {
    private c: number[];

    /**
     * @description A point.
     * @param {number[]} coordinates The coordinates of the point.
     */
    constructor(...coordinates: number[]) {
        this.c = coordinates;
    };

    /**
     * @description The coordinates of the point.
     */
    get coordinates() {
        return this.c;
    }

    /**
     * @description Takes an array of points and returns a vector.
     * @param {Point[]} points The array of points.
     */
    static toVector (...points: Point[]) {
        let result = points[points.length - 1].coordinates;
        for (let i = points.length - 2; i >= 0; i--) {
            result = s(result, points[i].coordinates);
        }
        return new Vector(...result);
    }
};
