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
     * @param {Vector} v The vector to add this vector with.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     * const v = new Vector(2, 3, 4);
     * const w = u.add(v);
     *
     * console.log(w.coordinates); // [3, 5, 7]
     * ```
     */
    add(v: Vector) {
        return new Vector(...a(this.c, v.c));
    };

    /**
     * @description Subtract this vector with another one.
     * @param {Vector} v The vector to subtract this vector with.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     * const v = new Vector(2, 3, 4);
     * const w = u.sub(v);
     *
     * console.log(w.coordinates); // [-1, -1, -1]
     * ```
     */
    sub(v: Vector) {
        return new Vector(...s(this.c, v.c));
    };

    /**
     * @description Multiply this vector with a scalar.
     * @param {number} v The scalar to multiply this vector with.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     * const k = 2;
     * const w = u.mul(k);
     *
     * console.log(w.coordinates); // [2, 4, 6]
     * ```
     */
    mul(k: number) {
        return new Vector(...m(k, this.c));
    };

    /**
     * @description Multiply this vector with another one.
     * @param {Vector} v The vector to multiply this vector with.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     * const v = new Vector(2, 3, 4);
     * const w = u.add(v);
     *
     * console.log(w.coordinates); // 20
     * ```
     */
    dot(v: Vector) {
        return d(this.c, v.c);
    };

    /**
     * @description Returns the middle of this vector.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     *
     * console.log(u.middle().coordinates); // [0.5, 1, 1.5]
     */
    middle() {
        return this.mul(0.5);
    };

    /**
     * @description Joins an array of vectors.
     * @param {Vector[]} v The vectors to join together.
     * @example ```ts
     * const u = new Vector(1, 2, 3);
     * const v = new Vector(2, 3, 4);
     * const w = new Vector(3, 4, 5);
     *
     * console.log(Vector.join(u, v, w).coordinates); // [0, -1, -2];
     * ```
     */
    static join(...v: Vector[]) {
        let result = v[v.length - 1].c;
        for (let i = v.length - 2; i >= 0; i--) {
            result = s(result, v[i].c);
        }
        return new Vector(...result);
    };
};
