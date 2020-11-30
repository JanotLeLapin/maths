import Rectangle from './rectangle';

const r = new Rectangle({
    perimeter: 10,
    width: 3,
});

console.log(r.height);

import { exo1 } from './algorithmes';

const indexes = ['x', 'y', 'z'];
console.log(exo1(1.8).map((n, i) => indexes[i] + ': ' + n).join('\n'));
