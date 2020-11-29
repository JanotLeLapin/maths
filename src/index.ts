import Rectangle from './rectangle';

const r = new Rectangle({
    area: 12,
    height: 4,
});

console.log(r.width);

import { exo1 } from './algorithmes';

const indexes = ['x', 'y', 'z'];
console.log(exo1(1.8).map((n, i) => indexes[i] + ': ' + n).join('\n'));