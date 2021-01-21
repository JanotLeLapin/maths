import { add as a, sub as s, mul as m, dot as d } from './vectors';

export default class Vector {
    private c: number[];

    /**
     * @description A vector.
     * @param {number[]} coordinates The coordinates of the vector.
     */
    constructor(...coordinates: number[]) {
        this.c = coordinates;
    };

    /**
     * @description The coordinates of the vector.
     */
    get coordinates() {
        return this.c;
    };

    /**
     * @description Add this vector with another one.
     * @param {Vector} v The vector to add this vector with
     */
    add = (v: Vector) => new Vector(...a(this.c, v.c));

    /**
     * @description Subtract this vector with another one.
     * @param {Vector} v The vector to subtract this vector with
     */
    sub = (v: Vector) => new Vector(...s(this.c, v.c));

    /**
     * @description Multiply this vector with a scalar.
     * @param {number} v The scalar to multiply this vector with
     */
    mul = (k: number) => new Vector(...m(k, this.c));

    /**
     * @description Multiply this vector with another one.
     * @param {Vector} v The vector to multiply this vector with
     */
    dot = (v: Vector) => d(this.c, v.c);

    /**
     * @description Returns the middle of this vector.
     */
    /**
     * @description Joins two vectors.
     * @param {Vector[]} v The vector to join this vector with.
     */
    static join(...v: Vector[]) {
        let result = v[v.length - 1].c;
        for (let i = v.length - 2; i >= 0; i--) {
            result = s(result, v[i].c);
        }
        return new Vector(...result);
    };
};
