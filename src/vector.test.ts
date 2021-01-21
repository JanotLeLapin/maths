import Vector from './vector';

test('Vector calculation chain', () => {
    const u = new Vector(1, 2, 3);
    const v = new Vector(2, 3, 4);
    const w = new Vector(3, 4, 5);
    const k = 2;

    expect(u.add(v).sub(w).coordinates).toStrictEqual([0, 1, 2]);
    expect(v.mul(k).add(u).dot(w)).toBe(102);
    expect(v.middle().coordinates).toStrictEqual([1, 1.5, 2]);
    expect(Vector.join(u, v, w).coordinates).toStrictEqual([0, -1, -2]);
});
