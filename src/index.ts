import { h } from './algorithmes';
import Rectangle from './rectangle';

console.log('\nEX 2\n')
const y: number[] = [1, 2, 2.5, 3, 3.5, 4, 4.5];
for (let i = 0; i < y.length; i++) {
    console.log(y[i] + ': ' + new Rectangle({
        perimeter: 10,
        width: y[i]
    }).area);
}

console.log('\nEX 3\n');
for (let i = 0; i <= 5; i++) {
    console.log(h(i));
}
import { add, dot, transpose } from './util';

console.log(transpose([[1, 2, 3], [4, 5, 6]]));
console.log(dot([1, 2, 3], [4, 5, 6]));
console.log(add([1, 2, 3], [4, 5, 6]));
