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
 * Returns a random number between delimited values.
 * @param {number} from The minimum value.
 * @param {number} to The maximum value.
 */
export const random = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};
