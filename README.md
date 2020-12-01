# maths
Some math things I'm currently learning in class.

### Rectangle calculator
```ts
const r = new Rectangle({
    height: 7,
    width: 9,
});

console.log(r.area) // 63
```
The rectangle class can figure out its properties based on other parameters
```ts
const r = new Rectangle({
    perimeter: 10,
    width: 3,
});
console.log(r.height); // 2
```

### Dot product calculator
```ts
const u = [1, 2, 3];
const v = [3, 4, 5];
const w = dot(u, v);

console.log(w); //26
```

### Transpose a matrix
```ts
const x = [
    [1, 2],
    [3, 4],
    [5, 6],
];

console.log(transpose(x));
// [
//     [1, 3, 5],
//     [2, 4, 6],
// ];
```
