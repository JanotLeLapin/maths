import process from 'process';

/**
 * @description Returns a random number between delimited values.
 * @param {number} from The minimum value.
 * @param {number} to The maximum value.
 */
export const random = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};

/**
 * @description Logs the memory usage on the current Node.JS process.
 */
export const logUsedMemory = () => console.log('Memory usage: ' + Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100 + 'Mb');
