import { add, sub, mul } from './vectors';

// Ex 2: 1
const u = [2, -2];
const v = [-1, Math.sqrt(2)];
const w = [1 / Math.sqrt(3), 3];

console.log(sub(u, v));
console.log(add(sub(mul(2, v), u), w));

// Ex 2: 2
const a = [6, 9];
const b = [4, 2];

console.log(add(a, b));
