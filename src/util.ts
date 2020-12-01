class RangeError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'RangeError';
    }
}

/**
 * Returns the dot product of two vectors.
 */
export const dot = (a: number[], b: number[]) => {
    if (a.length != b.length) throw new RangeError('Invalid vector length: ' + a.length + ' != ' + b.length + '.');
    for (let i = 0; i < a.length; i++) {
        a[i] *= b[i];
    }
    return a;
};

/**
 * @description Returns the transposed matrix of a matrix.
 * @param {number[][]} a The matrix
 */
export const transpose = (a: number[][]) => {
    try {
        for (let i = 1; i < a.length; i++) {
            if (a[i].length !== a[i - 1].length) throw new RangeError('The matrix is not homologous.');
        }
        const result: number[][] = [];
        for (let i = 0; i < a[0].length; i++) {
            result.push([]);
        }
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[0].length; j++) {
                result[j].push(a[i][j]);
            }
        }
        return result;
    } catch (err) {
        return [];
    }
}

 * @param {number} from The minimum value.
 * @param {number} to The maximum value.
 */
export const random = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};
