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
