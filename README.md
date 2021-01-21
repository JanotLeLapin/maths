# maths
Some math things I'm currently learning in class.

![Node.js CI](https://github.com/JanotLeLapin/maths/workflows/Node.js%20CI/badge.svg?event=push)
![GitHub repo size](https://img.shields.io/github/repo-size/JanotLeLapin/maths)
![GitHub followers](https://img.shields.io/github/followers/JanotLeLapin?style=social)

## How to use
Make sure you have installed Node, Yarn and Git.
```
git clone https://github.com/JanotLeLapin/maths.git
cd maths
yarn install
tsc
yarn start
```

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

## Using raw arrays as vectors
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

## Using the Vector class

Performing multiple operations with vectors in the same line tend to be confusing when you're using only functions, that's why I created the Vector class.
```ts
// Using the Vector class
import Vector from './vector';

const u = new Vector(1, 2, 3);
const v = new Vector(2, 3, 4);
const w = new Vector(3, 4, 5);
const k = 2;

console.log(w.add(u).sub(v).mul(k).dot(w)); // 76

// Using raw arrays
import { dot, add, sub, mul } from './vectors';

const u = [1, 2, 3];
const v = [2, 3, 4];
const w = [3, 4, 5];
const k = 2;

console.log(dot(mul(k, sub(add(w, u), v)), w)); // 76
```
As you can see, using the Vector class makes the operation chain easier to write, edit and read.

### Middle
```ts
const u = new Vector(1, 2, 3);

console.log(u.middle().coordinates); // [0.5, 1, 1.5]
```

### Joining (or whatever it's called)
```ts
const a = new Vector(1, 2, 3);
const b = new Vector(2, 3, 4);
const c = new Vector(3, 4, 5);

console.log(Vector.join(a, b, c).coordinates) // [0, -1, -2]
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
