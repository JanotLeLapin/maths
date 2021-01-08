/**
 * @description Returns a random number between delimited values.
 * @param {number} from The minimum value.
 * @param {number} to The maximum value.
 */
export const random = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};
