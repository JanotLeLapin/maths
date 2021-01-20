import Point from './point';

test('toVector function', () => {
    const a = new Point(1, 2, 3);
    const b = new Point(2, 3, 4);
    const c = new Point(3, 4, 5);

    expect(Point.toVector(a, b).coordinates).toStrictEqual([1, 1, 1]);
    expect(Point.toVector(c, b, a).coordinates).toStrictEqual([-4, -5, -6]);
});
