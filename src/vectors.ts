/**
 * @description Returns the dot product of two vectors.
 * @example ```js
 * const u = [1, 2, 3];
 * const v = [2, 3, 4];
 * const w = dot(u, v);
 * ```
 */
export const dot = (a: number[], b: number[]) => {
    if (a.length != b.length) throw new RangeError('Invalid vector length: ' + a.length + ' != ' + b.length + '.');
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i] *= b[i];
    }
    return result;
};

/**
 * @description Returns the sum of two vectors.
 * @example ```js
 * const u = [1, 2, 3];
 * const v = [2, 3, 4];
 * const w = add(u, v);
 * ```
 */
export const add = (a: number[], b: number[]) => {
    if (a.length !== b.length) throw new RangeError(a.length + ' !== ' + b.length + '.');
    for (let i = 0; i < a.length; i++) {
        a[i] += b[i];
    }
    return a;
};

/**
 * @description Returns the difference of two vectors.
 * @example ```js
 * const u = [1, 2, 3];
 * const v = [2, 3, 4];
 * const w = sub(u, v);
 * ```
 */
export const sub = (a: number[], b: number[]) => {
    if (a.length !== b.length) throw new RangeError(a.length + ' !== ' + b.length + '.');
    for (let i = 0; i < a.length; i++) {
        a[i] -= b[i];
    }
    return a;
};

/**
 * @description Returns the product of a vector and a scalar.
 * @example ```js
 * const k = 2;
 * const u = [1, 2, 3];
 * const w = mul(k, u);
 * ```
 */
export const mul = (a: number, b: number[]) => {
    for (let i = 0; i < b.length; i++) {
        b[i] *= a;
    }
    return b;
};
