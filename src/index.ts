import Triangle from './triangle';
[2, 3.2, 5.6, 10.9].forEach(i => console.log(new Triangle(i, i + 1).area));

import { exo1, f, random } from './algorithmes';

const indexes = ['x', 'y', 'z'];
console.log(exo1(1.8).map((n, i) => indexes[i] + ': ' + n).join('\n'));

console.log(f(4));
for (let i = 0; i < 100; i++) {
    console.log(random(1, 100));
}
