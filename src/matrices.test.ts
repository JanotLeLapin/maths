import { transpose } from './matrices';

test('Transposing a matrice', () => {
    expect(transpose([
        [1, 2, 3],
        [4, 5, 6],
    ])).toStrictEqual([
        [1, 4],
        [2, 5],
        [3, 6],
    ]);
});
