# maths
Some math things I'm currently learning in class.

### Rectangle calculator
```ts
import Rectangle from './rectangle';
```

```ts
const r = new Rectangle({
    height: 7,
    width: 9,
});

console.log(r.area); // 63
```
The rectangle class can figure out its properties based on other parameters
```ts
const r = new Rectangle({
    perimeter: 10,
    width: 3,
});
console.log(r.height); // 2
```

## Vectors

```ts
import { dot, add, sub, mul } from './vectors';
```

### Dot product
```ts
const u = [1, 2, 3];
const v = [3, 4, 5];
const w = dot(u, v);

console.log(w); // 26
```

### Addition
```ts
const u = [1, 2, 3];
const v = [3, 4, 5];
const w = add(u, v);

console.log(w); // [5, 7, 9]
```

### Substraction
```ts
const u = [1, 2, 3];
const v = [3, 4, 5];
const w = sub(u, v);

console.log(w); // [-2, -2, -2]
```

### Product with a scalar
```ts
const k = 2;
const u = [1, 2, 3];
const w = mul(k, u);

console.log(w); // [2, 4, 6]
```

## Matrices
```ts
import { transpose } from './matrices';
```

### Transposing
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
