import Rectangle from './rectangle';

test('Rectangle', () => {
    expect(new Rectangle({
        height: 2,
        width: 6,
    }).area).toBe(12);
    expect(new Rectangle({
        area: 12,
        height: 2,
    }).width).toBe(6);
    expect(new Rectangle({
        perimeter: 16,
        width: 6,
    }).height).toBe(2);
});
