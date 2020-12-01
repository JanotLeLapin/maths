export const exo1 = (z: number) => {
    let x = 3;
    let y = z * x;
    z = y - 2.3;
    return [x, y, z];
};

export const f = (x: number) => {
    return 5 * x - x ** 2;
};

/**
 * Returns a random number between delimited values.
 * @param {number} from The minimum value.
 * @param {number} to The maximum value.
 */
export const random = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};
