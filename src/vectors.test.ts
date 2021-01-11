import { dot, add, sub, mul } from './vectors';

test('Dot product', () => {
    expect(dot([1, 2, 3], [2, 3, 4])).toBe(20);
});

test('Vector addition', () => {
    expect(add([1, 2, 3], [2, 3, 4])).toStrictEqual([3, 5, 7]);
});

test('Vector subtraction', () => {
    expect(sub([1, 2, 3], [2, 3, 4])).toStrictEqual([-1, -1, -1]);
});

test('Scalar product', () => {
    expect(mul(2, [1, 2, 3])).toStrictEqual([2, 4, 6]);
});
